import React from "react";
import { Image, Pressable, StyleSheet, Text, Dimensions } from "react-native"
const { width } = Dimensions.get('window'); //lấy thông tin kích thước thiết bị

type ProductHomeItemProps = {
    image: string,
    title: string,
    name: string,
    price: number,
    onPress: () => void
}

const ProductHomeItem: React.FC<ProductHomeItemProps> = ({
    image,
    name,
    title,
    price,
    onPress
}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}đ</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    title: {
        color: '#606060',
    },
    name: {
        fontSize: 16,
        color: '#221F1F',
        fontWeight: '500',
    },
    image: {
        width: (width - 64) / 2,
        height: 220,
        borderRadius: 8
    },
    price: {
        color: '#007537',
        fontWeight: '500',
        fontSize: 16
    }
})

export default React.memo(ProductHomeItem)