import React, { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '862003484658-p3emm4onqq1vvgbgnni9a5961i9u4tab.apps.googleusercontent.com'
});

const SignIn: React.FC = () => {
    const navigation = useNavigation();
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateInputs = () => {
        const errors: { [key: string]: string } = {};

        if (!emailOrPhone) {
            errors.emailOrPhone = "Email hoặc sđt không được để trống";
        }

        if (!password) {
            errors.password = "Mật khẩu không được để trống";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const onSignUp = () => {
        navigation.navigate("SignUp" as never);// dùng as never để bỏ qua lỗi kiểm tra kiểu dữ liệu
    }

    const onLogin = async () => {
        if (validateInputs()) {
            try {
                const response = await axios.post('http://192.168.11.1:3000/users/login', {
                    emailOrPhone,
                    password
                });
                const { status, messenger, data, token, refreshToken } = response.data;
                if (status === 200) {
                    // Lưu trữ token vào AsyncStorage
                    await AsyncStorage.setItem('token', token);
                    await AsyncStorage.setItem('refreshToken', refreshToken);
                    navigation.navigate("Tabs" as never); // Assuming the home screen is named "Home"
                } else {
                    // Login failed
                    // Display error message
                    Alert.alert("Error", messenger);
                }
            } catch (error) {
                console.error("Error logging in:", error);
                Alert.alert("Error", "An error occurred. Please try again later.");
            }
        }
    };


    

    const loginWithGoogle = async () => {
        await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
        });

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            console.log(userInfo.user);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };


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
                <Input placeholder="Nhập email hoặc số điện thoại" value={emailOrPhone} onChangeText={setEmailOrPhone} error={errors.emailOrPhone} />
                <Input placeholder="Mật khẩu" value={password} onChangeText={setPassword} isPassword error={errors.password} />
            </View>
            <View style={styles.i}>
                <View style={styles.checkbox}>
                    <Image source={require('../../assets/icons/checkboxfalse.png')} />
                    <Text style={{ color: '#949090', fontSize: 11, fontWeight: '500', }}> Nhớ tài khoản</Text>
                </View>
                <Text style={{ color: '#009245', fontSize: 11, fontWeight: '500', }}>Forgot Password ?</Text>
            </View>
            <Button title="Đăng nhập" onPress={onLogin} style={styles.button} />
            <View style={styles.line}>
                <View />
                <Text style={{ fontSize: 12, fontWeight: '500' }} >Hoặc</Text>
                <View />
            </View>
            <View style={styles.login} >
                <Pressable style={{ margin: 15 }} onPress={loginWithGoogle}>
                    <Image source={require('../../assets/icons/logos_google.png')} />
                </Pressable>
                <Pressable style={{ margin: 15 }}>
                    <Image source={require('../../assets/icons/logos_facebook.png')} />
                </Pressable>
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