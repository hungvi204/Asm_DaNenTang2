import React, { useState } from "react";
import { Image, Pressable, TextInput, View, StyleSheet, Text } from "react-native";

type InputProps = {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    secureTextEntry?: boolean;
    isPassword?: boolean;
    error?: string;
};

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    isPassword,
    error
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [hasText, setHasText] = useState(false); // Thêm state để theo dõi trạng thái của text input

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleTextChange = (text: string) => {
        setHasText(text.length > 0); // Cập nhật trạng thái của text input
        onChangeText && onChangeText(text);
    };

    return (
        <View>
            <View style={[styles.inputContainer, hasText && { borderColor: '#009245', borderWidth: 2 }]}>
                <TextInput
                    secureTextEntry={isPassword && !isPasswordVisible}
                    placeholder={placeholder}
                    style={styles.input}
                    value={value}
                    onChangeText={handleTextChange} />
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
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
    errorText: {
        color: '#CE0000',
        fontSize: 12,
        fontWeight: '600',
    }
});

export default Input;
