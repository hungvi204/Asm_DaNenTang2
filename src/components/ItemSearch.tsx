import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ItemSearch: React.FC = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../assets/image/backgoundHome.png')} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Panse Đen | Hybrid</Text>
                <Text>250.000đ</Text>
                <Text>Còn 156 sp</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',   
    },
    image: {
        width: 77,
        height: 77,
        borderRadius: 8,
        marginRight: 20
    },
    containerText: {
        justifyContent: 'center',
    } ,
    text: {
        fontSize: 16,
        color: '#221F1F',
        marginBottom: 5
    }   
});

export default ItemSearch;