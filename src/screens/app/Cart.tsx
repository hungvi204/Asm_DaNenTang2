import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import ItemCart from "../../components/ItemCart";
import Button from "../../components/Button";


const Cart: React.FC = () => {
    return (
        <View style={styles.container}>
            <Header
                title="Giỏ hàng"
                iconLeft={require('../../assets/icons/iconleft.png')}
                iconRight={require('../../assets/icons/delete.png')} />
            <ItemCart isCheck />
            <View style={styles.footer}>
                <View style={styles.containerText}>
                    <Text>Tạm tính</Text>
                    <Text>500.000đ</Text>
                </View>
                <Button title="Tiến hành thanh toán" onPress={function (): void {
                    throw new Error("Function not implemented.");
                } } />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    footer: {
        padding: 10,
        flex: 1,
        justifyContent: 'flex-end',
    },
    containerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    }
});

export default Cart;