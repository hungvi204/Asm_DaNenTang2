import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";

const Notification:React.FC = () => {
    return (
        <View style={styles.container}>
            <Header title="Thông báo" iconLeft={require('../../assets/icons/iconleft.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})

export default Notification