import React, { useState } from "react";
import { Image, Pressable, TextInput, View, StyleSheet } from "react-native";

type InputProps = {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    isPassword?: boolean;
};

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    isPassword
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                secureTextEntry={isPassword && !isPasswordVisible}
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={onChangeText} />
            {isPassword ? (
                <Pressable onPress={onEyePress}>
                    <Image
                        style={styles.eye}
                        source={
                            isPasswordVisible
                                ? require('../assets/icons/eye.png')
                                : require('../assets/icons/eye_closed.png')
                        }
                    />
                </Pressable>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: '#8B8B8B',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 46,
        fontSize: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    },
});

export default Input;
