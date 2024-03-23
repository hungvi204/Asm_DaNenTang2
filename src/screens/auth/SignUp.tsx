import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";


const SignUp: React.FC = () => {
    const navigation = useNavigation();
    
    const onSignIn = () => {
        navigation.navigate("SignIn" as never);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../assets/image/LogoSignUp.png')} />
            </View>
            <View style={styles.title}>
                <Text style={{ fontSize: 30, color: '#000000', fontWeight: '700' }}>Đăng ký</Text>
                <Text style={{ fontSize: 18, color: '#000000', fontWeight: '400' }}>Tạo tài khoản</Text>
            </View>
            <View style={styles.input}>
                <Input placeholder="Họ tên" />
                <Input placeholder="E-mail" />
                <Input placeholder="Số điện thoại" />
                <Input placeholder="Mật khẩu" isPassword />
            </View>
            <View style={styles.i}>
                <Text style={styles.text}>
                    <Text style={{ color: '#000000' }}>Để đăng ký tài khoản, bạn đồng ý </Text>
                    <Text style={{ color: '#009245', fontWeight: '400', textDecorationLine: 'underline' }}>Terms & Conditions</Text>
                    <Text style={{ color: '#000000' }}> and </Text>
                    <Text style={{ color: '#009245', fontWeight: '400', textDecorationLine: 'underline' }}>Privacy Policy</Text>
                </Text>
            </View>
            <Button title="Đăng ký" onPress={onSignIn} style={styles.button} />
            <View style={styles.line}>
                <View />
                <Text style={{ fontSize: 12, fontWeight: '500' }} >Hoặc</Text>
                <View />
            </View>
            <View style={styles.login}>
                <View style={{ margin: 15 }}>
                    <Image source={require('../../assets/icons/logos_google.png')} />
                </View>
                <View style={{ margin: 15 }}>
                    <Image source={require('../../assets/icons/logos_facebook.png')} />
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{ color: '#000000' }}>Tôi đã có tài khoản ?</Text>
                <Text style={{ color: '#009245', fontWeight: '400' }} onPress={onSignIn}> Đăng nhập</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: '100%',
        height: 250,
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
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 20
    },
    text: {
        marginStart: 30,
        marginEnd: 30,
        textAlign: 'center'
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

export default SignUp;