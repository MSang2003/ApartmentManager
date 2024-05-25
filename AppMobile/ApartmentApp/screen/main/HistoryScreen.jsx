import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, List, Searchbar } from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';
const a = null;

const FirstRoute = () => (
    <ScrollView style={[styles.scene, {}]}>
        <TouchableOpacity>
            <List.Item
                title="Thanh toán tiền điện Tháng 7"
                description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}
                style={{}}

                left={props => <List.Icon {...props} icon="bank-transfer" />}
                right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
            />
        </TouchableOpacity>
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />

    </ScrollView>

);
const SecondRoute = () => (
    <ScrollView style={[styles.scene, {}]}>
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />

    </ScrollView>

);

const ThurstRoute = () => (
    <ScrollView style={[styles.scene, {}]}>
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />

    </ScrollView>

);


const FourthRoute = () => (
    <ScrollView style={[styles.scene, {}]}>
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}
            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />
        <List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        /><List.Item
            title="Thanh toán tiền điện Tháng 7"
            description={`15-02-2003 20:21\n ${a == null ? 'Thất bại' : 'Thành công'}`}

            left={props => <List.Icon {...props} icon="bank-transfer" />}
            right={props => <Text style={{ alignSelf: 'center', marginRight: 16, fontSize: 16, fontWeight: '700' }}> -100.000đ</Text>}
        />

    </ScrollView>

);

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Tất cả' },
            { key: 'second', title: 'Điện' },
            { key: 'thurst', title: 'Nước' },
            { key: 'fourth', title: 'Dịch vụ' },
        ],
    };

    render() {
        return (
            <React.Fragment style={styles.container}>
                <View style={styles.search}>
                    <ImageBackground source={require('E:\\OU\\LapTrinhHienDai\\ApartmentManager\\AppMobile\\ApartmentApp\\assets\\banner.png')} style={styles.image}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={() => { }}
                            value={"sdaf"}
                            style={{ width: '80%', height: 50 }}

                        />
                    </ImageBackground>
                </View>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                        thurst: ThurstRoute,
                        fourth: FourthRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    style={styles.containerTab}
                />
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    containerTab: {
        flex: 7
    },
    scene: {
        flex: 2,
    },
    search: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});