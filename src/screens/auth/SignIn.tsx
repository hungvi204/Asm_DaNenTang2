import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";


const SignIn: React.FC = () => {
    const navigation = useNavigation();
    
    const onSignUp = () => {
        navigation.navigate("SignUp" as never);// dùng as never để bỏ qua lỗi kiểm tra kiểu dữ liệu
    }

    const onHome = () => {
        navigation.navigate("Tabs" as never);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../assets/image/LogoSignIn.png')} />
            </View>
            <View style={styles.title}>
                <Text style={{ fontSize: 30, color: '#000000', fontWeight: '700' }}>Chào mừng bạn</Text>
                <Text style={{ fontSize: 18, color: '#000000', fontWeight: '400' }}>Đăng nhập tài khoản</Text>
            </View>
            <View style={styles.input}>
                <Input placeholder="Nhập email hoặc số điện thoại" />
                <Input placeholder="Mật khẩu" isPassword />
            </View>
            <View style={styles.i}>
                <View style={styles.checkbox}>
                    <Image source={require('../../assets/icons/checkboxfalse.png')} />
                    <Text style={{ color: '#949090', fontSize: 11, fontWeight: '500', }}> Nhớ tài khoản</Text>
                </View>
                <Text style={{ color: '#009245', fontSize: 11, fontWeight: '500', }}>Forgot Password ?</Text>
            </View>
            <Button title="Đăng nhập" onPress={onHome} style={styles.button} />
            <View style={styles.line}>
                <View />
                <Text style={{ fontSize: 12, fontWeight: '500' }} >Hoặc</Text>
                <View />
            </View>
            <View style={styles.login}>
                <View style={{margin: 15}}>
                    <Image source={require('../../assets/icons/logos_google.png')} />
                </View>
                <View style={{margin: 15}}>
                    <Image source={require('../../assets/icons/logos_facebook.png')} />
                </View>
            </View>
            <View style={styles.footer}>
                <Text>Bạn không có tài khoản ?</Text>
                <Text style={{ fontSize: 12, color: '#009245', fontWeight: '400' }} onPress={onSignUp}>Tạo tài khoản</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: '100%',
        height: 350,
    },
    header: {

    },
    title: {
        alignItems: 'center',
        margin: 10
    },
    input: {
        marginLeft: 30,
        marginRight: 30
    },
    i: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 20
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        marginLeft: 30,
        marginRight: 30,
    },
    line: {
        alignItems: 'center',
        marginTop: 20
    },
    login: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default SignIn;