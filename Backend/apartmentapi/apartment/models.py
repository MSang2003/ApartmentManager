from django.db import models
from django.contrib.auth.models import AbstractUser
from ckeditor.fields import RichTextField
from cloudinary.models import CloudinaryField
from enum import Enum
from django_enum_choices.fields import EnumChoiceField
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.hashers import make_password


class User(AbstractUser):
    class EnumRole(models.TextChoices):
        RESIDENT = 'Resident'
        MANAGER = 'Manager'

    class EnumSex(models.TextChoices):
        MALE = 'Male'
        FEMALE = 'Female'

    role = models.CharField(max_length=20, choices=EnumRole.choices, default=EnumRole.RESIDENT)
    phone = models.CharField(max_length=15, null=True)
    sex = models.CharField(max_length=20, choices=EnumSex.choices, default=EnumSex.MALE)
    avatar = CloudinaryField('avatar', null=True)
    created = models.DateField(auto_now_add=True, null=True)
    change_password_required = models.BooleanField(default=True)

    def __str__(self):
        return self.username


class Resident(models.Model):
    user_infor = models.OneToOneField(User, related_name='Resident', primary_key=True, on_delete=models.CASCADE,
                                      null=False)

    def __str__(self):
        return "RD." + " " + self.user_infor.first_name + " " + self.user_infor.last_name


class Apartment(models.Model):
    class EnumRoom(models.IntegerChoices):
        ROOM_1 = 1, 'Room 1'
        ROOM_2 = 2, 'Room 2'
        ROOM_3 = 3, 'Room 3'

    name = models.CharField(max_length=20, unique=True)
    floor = models.IntegerField()
    room = models.IntegerField(choices=EnumRoom.choices, default=EnumRoom.ROOM_2)
    resident = models.ForeignKey(Resident, on_delete=models.CASCADE, null=True)

    def management_fee(self):
        return self.management_service.price * self.room

    def __str__(self):
        return self.name


class Manager(models.Model):
    user_infor = models.OneToOneField(User, related_name='Manager', primary_key=True, null=False,
                                      on_delete=models.CASCADE)
    area = models.CharField(max_length=20, null=True)

    def __str__(self):
        return "Mn." + self.user_infor.first_name + " " + self.user_infor.last_name


class BaseModel(models.Model):
    created_date = models.DateTimeField(auto_now_add=True, null=True)
    updated_date = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        abstract = True


class MonthlyFee(BaseModel):
    fee_name = models.CharField(max_length=30)
    price = models.IntegerField()
    residents = models.ManyToManyField(Resident, through='ResidentFee')

    def __str__(self):
        return self.fee_name


class ResidentFee(models.Model):
    payment_method = models.CharField(max_length=50)
    payment_proof = CloudinaryField(null=True)
    payment_date = models.DateField(auto_now_add=True)
    status = models.BooleanField(default=False)
    amount = models.IntegerField(default=1)
    resident = models.ForeignKey(Resident, on_delete=models.CASCADE)
    fee = models.ForeignKey(MonthlyFee, on_delete=models.CASCADE)

    def __str__(self):
        return self.resident.__str__() + " / " + self.fee.fee_name


class ReservationVehicle(MonthlyFee):
    class EnumStatus(models.TextChoices):
        PENDING = 'Đang chờ xử lý'
        DENY = 'Không thể xử lý'
        DONE = 'Đã đăng ký'

    vehicle_number = models.CharField(max_length=10)
    status = models.CharField(max_length=20, choices=EnumStatus.choices, default=EnumStatus.PENDING)
    resident = models.ForeignKey(Resident, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return "Reservation for" + str(self.residents)


class ElectronicLockerItem(BaseModel):
    name = models.CharField(max_length=30, default='Tủ đồ')
    status = models.BooleanField(default=False)

    apartment = models.OneToOneField(Apartment, related_name='apartment', null=False,
                                     on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Item(BaseModel):
    status = models.BooleanField(default=True)
    item_name = models.CharField(max_length=255, null=True, default='Tên sản phẩm')
    electronic_lock = models.ForeignKey(ElectronicLockerItem, on_delete=models.CASCADE)
    received_date = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.item_name


class Survey(BaseModel):
    tittle = models.CharField(max_length=30, primary_key=True)
    data_expire = models.DateField()
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.tittle


class Question(BaseModel):
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)

    content = models.CharField(max_length=30, primary_key=True)


class Choice(BaseModel):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='question_sv')

    content = models.CharField(max_length=30, primary_key=True)
    letter = models.CharField(max_length=1, help_text="A, B, C, D")


class Response(models.Model):
    survey = models.ForeignKey(Survey, on_delete=models.CASCADE)
    resident_id = models.IntegerField()
    submitted_at = models.DateTimeField(auto_now_add=True)


class Answer(models.Model):
    response = models.ForeignKey(Response, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice = models.ForeignKey(Choice, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('response', 'question')  # Each question can only be answered once per response

    def __str__(self):
        return f"{self.question.text} - {self.choice.letter}"


class ReflectionForm(BaseModel):
    class EnumStatus(models.TextChoices):
        PENDING = 'Đang chờ xử lý'
        DENY = 'Không thể xử lý'
        DONE = 'Đã xử lý'

    resident = models.ForeignKey(Resident, on_delete=models.CASCADE)

    tittle = models.CharField(max_length=30)
    content = models.TextField(max_length=50, null=True)
    status = models.CharField(max_length=20, choices=EnumStatus.choices, default=EnumStatus.PENDING)

    def __str__(self):
        return self.tittle.__str__()
