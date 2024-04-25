from rest_framework import viewsets, generics, status, parsers, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from apartment import serializers, paginators, perms
from apartment.models import ResidentFee, User, ElectronicLockerItem, Item, MonthlyFee, ReflectionForm, Resident, \
    Apartment, Survey, Answer, Vehicle, \
    ReservationVehicle


class ResidentFeeViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = ResidentFee.objects.filter(status=True)
    serializer_class = serializers.ResidentFeeSerializer

    def get_queryset(self):
        queryset = self.queryset

        if self.action.__eq__('list'):
            q = self.request.query_params.get('q')
            if q:
                queryset = queryset.filter(resident_id=q)
        return queryset

    # @action(methods=['get'], url_path='resident', detail=True)
    # def get_residents(self, request, pk):
    #     residents = self.get_object().resident_set.filter(status=True)
    #
    #     rd_id = request.query_params.get('id')
    #     if rd_id:
    #         residents = rd_id.filter(user_infor=rd_id)
    #
    #     return Response(serializers.ResidentFeeSerializer(residents, many=True).data,
    #                     status=status.HTTP_200_OK)


class ResidentViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = Resident.objects.all()
    serializer_class = serializers.ResidentSerializer


class MonthlyFeeViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = MonthlyFee.objects.all()
    serializer_class = serializers.MonthlyFeeSerializer


class ReflectionViewSet(viewsets.ViewSet, generics.DestroyAPIView, generics.UpdateAPIView):
    # giong nhu comment
    queryset = ReflectionForm.objects.all()
    serializer_class = serializers.ReflectionSerializer
    permission_classes = [perms.ReflectionOwner]


class ElectronicLockerViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = ElectronicLockerItem.objects.filter(status=True)
    serializer_class = serializers.ElectronicLockerSerializer

    #     course
    @action(methods=['get'], url_path='items', detail=True)
    def get_items(self, request, pk):
        items = self.get_object().item_set.filter(status=True)

        q = request.query_params.get('q')
        if q:
            items = items.filter(name__icontains=q)

        return Response(serializers.ItemSerializer(items, many=True).data,
                        status=status.HTTP_200_OK)


class ApartmentViewSet(viewsets.ViewSet, generics.ListAPIView):
    # lesson
    queryset = Item.objects.all()
    serializer_class = serializers.ApartmentSerializer


class ItemViewSet(viewsets.ViewSet, generics.RetrieveAPIView):
    # lesson
    queryset = Item.objects.all()
    serializer_class = serializers.ItemSerializer

    # def get_queryset(self):
    #     queryset = self.queryset
    #
    #     if self.action.__eq__('list'):
    #         q = self.request.query_params.get('q')
    #         if q:
    #             queryset = queryset.filter(name__icontains=q)
    #
    #     return queryset


# class CourseViewSet(viewsets.ViewSet, generics.ListAPIView):
#     queryset = Course.objects.filter(active=True)
#     serializer_class = serializers.CourseSerializer
#     pagination_class = paginators.CoursePaginator
#
#     def get_queryset(self):
#         queryset = self.queryset
#
#         if self.action.__eq__('list'):
#             q = self.request.query_params.get('q')
#             if q:
#                 queryset = queryset.filter(name__icontains=q)
#
#             cate_id = self.request.query_params.get('category_id')
#             if cate_id:
#                 queryset = queryset.filter(category_id=cate_id)
#
#         return queryset
#
#     @action(methods=['get'], url_path='lessons', detail=True)
#     def get_lessons(self, request, pk):
#         lessons = self.get_object().lesson_set.filter(active=True)
#
#         q = request.query_params.get('q')
#         if q:
#             lessons = lessons.filter(subject__icontains=q)
#
#         return Response(serializers.LessonSerializer(lessons, many=True).data,
#                         status=status.HTTP_200_OK)

#
# class LessonViewSet(viewsets.ViewSet, generics.RetrieveAPIView):
#     queryset = Lesson.objects.prefetch_related('tags').filter(active=True)
#     serializer_class = serializers.LessonDetailsSerializer
#
#     def get_permissions(self):
#         if self.action in ['add_comment', 'like']:
#             return [permissions.IsAuthenticated()]
#
#         return [permissions.AllowAny()]
#
#     def get_serializer_class(self):
#         if self.request.user.is_authenticated:
#             return serializers.AuthenticatedLessonDetailsSerializer
#
#         return self.serializer_class
#
#     @action(methods=['get'], url_path='comments', detail=True)
#     def get_comments(self, request, pk):
#         comments = self.get_object().comment_set.select_related('user').order_by('-id')
#
#         paginator = paginators.CommentPaginator()
#         page = paginator.paginate_queryset(comments, request)
#         if page is not None:
#             serializer = serializers.CommentSerializer(page, many=True)
#             return paginator.get_paginated_response(serializer.data)
#
#         return Response(serializers.CommentSerializer(comments, many=True).data)
#
#     @action(methods=['post'], url_path='comments', detail=True)
#     def add_comment(self, request, pk):
#         c = self.get_object().comment_set.create(content=request.data.get('content'),
#                                                  user=request.user)
#         return Response(serializers.CommentSerializer(c).data, status=status.HTTP_201_CREATED)
#
#     @action(methods=['post'], url_path='like', detail=True)
#     def like(self, request, pk):
#         li, created = Like.objects.get_or_create(lesson=self.get_object(),
#                                                  user=request.user)
#         if not created:
#             li.active = not li.active
#             li.save()
#
#         return Response(serializers.AuthenticatedLessonDetailsSerializer(self.get_object()).data)
#
#

class UserViewSet(viewsets.ViewSet, generics.CreateAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = serializers.UserSerializer
    parser_classes = [parsers.MultiPartParser, ]

    def get_permissions(self):
        if self.action in ['get_current_user']:
            return [permissions.IsAuthenticated()]

        return [permissions.AllowAny()]

    @action(methods=['get', 'patch'], url_path='current-user', detail=False)
    def get_current_user(self, request):
        user = request.user
        if request.method.__eq__('PATCH'):
            for k, v in request.data.items():
                setattr(user, k, v)
            user.save()

        return Response(serializers.UserSerializer(user).data)

# class CommentViewSet(viewsets.ViewSet, generics.DestroyAPIView, generics.UpdateAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = serializers.CommentSerializer
#     permission_classes = [perms.CommentOwner]
#
