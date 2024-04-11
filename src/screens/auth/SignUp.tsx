import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignUp: React.FC = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateInputs = () => {
        const errors: { [key: string]: string } = {};

        if (!fullName) {
            errors.fullName = "Họ tên không được để trống";
        }

        if (!email) {
            errors.email = "Email không được để trống";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email không hợp lệ";
        }

        if (!phone) {
            errors.phone = "Số điện thoại không được để trống";
        } else if (!/^\d{10,11}$/.test(phone)) {
            errors.phone = "Số điện thoại không hợp lệ";
        }

        if (!password) {
            errors.password = "Mật khẩu không được để trống";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const onSignUp = async () => {
        if (validateInputs()) {
            try {               
                // Nếu không có lỗi, gửi yêu cầu đăng ký
                const signUpResponse = await axios.post('http://192.168.11.1:3000/users/register-send-email', {
                    fullName,
                    email,
                    phone,
                    password
                });
                console.log('Đăng ký thành công!', signUpResponse.data);
                navigation.navigate("SignIn" as never);
                Alert.alert('Thành công', 'Đăng ký thành công. Vui lòng đăng nhập để tiếp tục.');
                // Xử lý sau khi đăng ký thành công, ví dụ chuyển hướng người dùng đến trang đăng nhập
            } catch (error) {
                console.error('Lỗi khi đăng ký:', error);
                Alert.alert('Lỗi', 'Đăng ký không thành công. Vui lòng thử lại sau.');
            }
        }
    };
    

    const onSignIn = () => {
        navigation.navigate("SignIn" as never);
    };

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
                <Input placeholder="Họ tên" value={fullName} onChangeText={setFullName} error={errors.fullName}/>
                <Input placeholder="E-mail" value={email} onChangeText={setEmail} error={errors.email}/>
                <Input placeholder="Số điện thoại" value={phone} onChangeText={setPhone} error={errors.phone}/>
                <Input placeholder="Mật khẩu" isPassword value={password} onChangeText={setPassword} error={errors.password} />
            </View>
            <View style={styles.i}>
                <Text style={styles.text}>
                    <Text style={{ color: '#000000' }}>Để đăng ký tài khoản, bạn đồng ý </Text>
                    <Text style={{ color: '#009245', fontWeight: '400', textDecorationLine: 'underline' }}>Terms & Conditions</Text>
                    <Text style={{ color: '#000000' }}> and </Text>
                    <Text style={{ color: '#009245', fontWeight: '400', textDecorationLine: 'underline' }}>Privacy Policy</Text>
                </Text>
            </View>
            <Button title="Đăng ký" onPress={onSignUp} style={styles.button} />
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
    );
};

const styles = StyleSheet.create({
    container: {
        // Your container styles
    },
    image: {
        width: '100%',
        height: 250,
    },
    header: {
        // Your header styles
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
