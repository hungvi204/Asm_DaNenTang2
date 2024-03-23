import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = {
    title: string;
    onPress: () => void;
    style?: object;
};

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, style]}>
            <LinearGradient
                colors={['#007537', '#4CAF50']} // Define your colors here
                style={styles.gradient}
                start={{ x: 0, y: 0 }} // Start of the gradient (left-top)
                end={{ x: 1, y: 0 }} // End of the gradient (right-top)
            >
                <Text style={styles.textContent}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        height: 50,
        overflow: 'hidden', // Thêm dòng này để khi border-radius thì nội dung không bị tràn ra ngoài
    },
    gradient: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 15, 
        height: '100%', 
    },
    textContent: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700'
    }
})

export default React.memo(Button);
