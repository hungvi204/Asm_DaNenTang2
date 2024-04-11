import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, FlatList, Pressable, ScrollView } from "react-native";
import ProductHomeItem from "../../components/ProductHomeItem";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home: React.FC = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();// dùng để kiểm tra xem màn hình đó có đang focus hay không //focus: màn hình đang hiển thị, blur: màn hình không hiển thị
    const [products, setProducts] = useState<any[]>([]);
    const [typetree, setTypetree] = useState<any[]>([]);

    console.log(products);

    // Function to get token from AsyncStorage
    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            return token;
        } catch (error) {
            console.error("Error getting token:", error);
            return null;
        }
    };

    const onCart = () => {
        navigation.navigate("Cart" as never);
    }

    const renderProductItem = ({ item }: { item: any }) => {
        // Tìm kiếm đối tượng typetree có id_typetree tương ứng với id_typetree của sản phẩm
        const matchedTypetree = typetree.find((tree) => tree._id === item.id_typetree);

        // Nếu không tìm thấy typetree tương ứng, có thể xử lý bằng cách trả về một giá trị mặc định hoặc không hiển thị gì cả
        const typetreeName = matchedTypetree ? matchedTypetree.name : "Unknown";

        return (
            <ProductHomeItem
                image={item.image[0]}
                name={item.name}
                id_typetree={typetreeName} // Truyền tên của typetree vào props
                price={item.price}
                onPress={onProductDetail}
            />
        );
    };

    const onProductDetail = () => {
        navigation.navigate("ProductDetail" as never);
    }
    
    const fetchProducts = async () => {
        try {
            const token = await getToken();
            if (!token) {
                console.error("Token is null or undefined.");
                return null;
            }

            const response = await axios.get('http://192.168.11.1:3000/crops/get-list-Cropss', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const { status, messenger, data } = response.data;
            if (status === 200) {
                return data; // Return the data fetched from the API
            } else {
                console.error("Error fetching products:", messenger);
                return null;
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            return null;
        }
    };

    const fetchTypetree = async () => {
        try {
            const response = await axios.get("http://192.168.11.1:3000/typetree/get-list-typetree");
            const data = response.data.data; // Lấy mảng data từ dữ liệu trả về
            setTypetree(data);
        } catch (error) {
            console.error("Error fetching typetree:", error);
        }
    };


    useEffect(() => {
        if (isFocused) {
            fetchProducts().then(data => {
                if (data) {
                    setProducts(data.slice(0, 4));
                }
            });
            fetchTypetree();
        }
    }, [isFocused]);

    return (
        <ScrollView style={styles.container}>
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
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={products}
                    renderItem={renderProductItem}
                    numColumns={2}
                />
                <Text style={styles.xemthem}>Xem thêm cây trồng</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
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