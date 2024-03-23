import React from "react";
import { Image, StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import ProductHomeItem from "../../components/ProductHomeItem";
import { useNavigation } from "@react-navigation/native";


const Home: React.FC = () => {
    const navigation = useNavigation();
    
    const data = [
        {
            id: 1,
            name: 'Cây cỏ',
            image: 'https://tse3.mm.bing.net/th?id=OIP.qEJsE1V-PDSRYZzhgKyrZQHaHa&pid=Api&P=0&h=220',
            title: 'Cây cỏ',
            price: 100
        },
        {
            id: 2,
            name: 'Cây cảnh',
            image: 'https://tse3.mm.bing.net/th?id=OIP.qEJsE1V-PDSRYZzhgKyrZQHaHa&pid=Api&P=0&h=220',
            title: 'Cây cảnh',
            price: 100
        },
        {
            id: 3,
            name: 'Cây cảnh',
            image: 'https://tse3.mm.bing.net/th?id=OIP.qEJsE1V-PDSRYZzhgKyrZQHaHa&pid=Api&P=0&h=220',
            title: 'Cây cảnh',
            price: 100
        },
        {
            id: 4,
            name: 'Cây cảnh',
            image: 'https://tse3.mm.bing.net/th?id=OIP.qEJsE1V-PDSRYZzhgKyrZQHaHa&pid=Api&P=0&h=220',
            title: 'Cây cảnh',
            price: 100
        },
        {
            id: 5,
            name: 'Cây cảnh',
            image: 'https://tse3.mm.bing.net/th?id=OIP.qEJsE1V-PDSRYZzhgKyrZQHaHa&pid=Api&P=0&h=220',
            title: 'Cây cảnh',
            price: 100
        },
    ]

    const renderProductItem = ({ item }: { item: any }) => (
        <ProductHomeItem {...item} onPress={onProductDetail}/>
    );

    const onCart= () => {
        navigation.navigate("Cart" as never); 
    }

    const onProductDetail = () => {
        navigation.navigate("ProductDetail" as never);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../assets/image/backgoundHome.png')} />
            </View>
            <View style={styles.title}>
                <Text style={styles.text}>Planta - toả sáng</Text>
                <Text style={styles.text}>không gian nhà bạn</Text>
                <Text style={styles.text1}>Xem hàng mới về <Image source={require('../../assets/icons/fi_arrow-right.png')} /></Text>
            </View>
            <Pressable style={styles.shopping} onPress={onCart}>
                <Image source={require('../../assets/icons/shopping-cart.png')} />
            </Pressable>
            <View style={styles.list}>
                <Text style={styles.contentText}>Cây trồng</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data.slice(0, 4)}//lấy 4 phần tử đầu tiên
                    renderItem={renderProductItem}
                    numColumns={2}
                />
                <Text style={styles.xemthem}>Xem thêm cây trồng</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#F6F6F6'
    },
    image: {
        marginTop: 113,
        width: '100%',
    },
    title: {
        position: 'absolute',
        top: 40,
        marginStart: 30,
    },
    text: {
        fontSize: 24,
        fontWeight: '500',
        color: '#000000',
        marginBottom: 10
    },
    text1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#009245'
    },
    shopping: {
        position: 'absolute', //dùng để định vị vị trí của component
        right: 30,
        top: 40,
        width: 50,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        padding: 20,
        marginBottom: 20,
        flex: 1
    },
    contentText: {
        fontSize: 24,
        fontWeight: '500',
        color: '#221F1F',
        marginBottom: 15
    },
    xemthem: {
        fontSize: 16,
        color: '#221F1F',
        fontWeight: '500',
        textDecorationLine: 'underline',
        textAlign: 'right',
    }
})

export default Home