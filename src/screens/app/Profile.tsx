import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";

const Profile: React.FC = () => {
    return (
        <View style={styles.container}>
            <Header title="Hồ sơ" iconLeft={require('../../assets/icons/iconleft.png')} />
            <View style={styles.profile}>
                <View style={styles.image}>
                    <Image source={require('../../assets/icons/Avatar.png')} />
                </View>
                <View>
                    <Text>Nguyễn Hùng Vĩ</Text>
                    <Text>vinhpd08351@fpt.edu.vn</Text>
                </View>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>Chung</Text>
                <Text style={styles.text}>Chỉnh sửa thông tin</Text>
                <Text style={styles.text}>Cẩm nang trồng cây</Text>
                <Text style={styles.text}>Lịch sử giao dịch</Text>
                <Text style={styles.text}>Q & A</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.title}>Bảo mật và Điều khoản</Text>
                <Text style={styles.text}>Điều khoản và điều kiện</Text>
                <Text style={styles.text}>Chính sách quyền riêng tư</Text>
                <Text style={{color: 'red', fontSize: 18}}>Đăng xuất</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginStart: 20
    },
    containerText: {
        padding: 30
    },
    title: {
        fontSize: 16,
        marginBottom: 20,
        borderBottomWidth: 0.2,
        paddingBottom: 10
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
        color: '#000000'
    }
})

export default Profile