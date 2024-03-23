import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Button from "../../components/Button";


const ProductDetails: React.FC = () => {
    return (
        <View style={styles.container}>
            <Header title="Chi tiết sản phẩm" iconLeft={require('../../assets/icons/iconleft.png')} />
            <View style={styles.image}>
                <Image source={require('../../assets/image/image1.png')} />
            </View>
            <ScrollView style={styles.container1}>
                <View style={styles.buttonText}>
                    <View style={styles.viewbutton}><Text style={{ color: '#FFFFFF' }}>Cây trồng</Text></View>
                    <View style={styles.viewbutton}><Text style={{ color: '#FFFFFF' }}>Ưa bóng</Text></View>
                </View>
                <Text style={{ color: '#007537', fontSize: 24, fontWeight: '500', marginBottom: 30 }}>250.000đ</Text>
                <View>
                    <View>
                        <Text style={styles.text1}>Chi tiết sản phẩm</Text>
                    </View>
                    <View style={styles.underline}></View>
                    <View style={styles.containerText}>
                        <Text style={styles.text}>Kích cỡ</Text>
                        <Text style={styles.text}>Nhỏ</Text>
                    </View>
                    <View style={styles.underline}></View>
                    <View style={styles.containerText}>
                        <Text style={styles.text}>Xuất xứ</Text>
                        <Text style={styles.text}>Châu phi</Text>
                    </View>
                    <View style={styles.underline}></View>
                    <View style={styles.containerText}>
                        <Text style={styles.text}>Tình trạng</Text>
                        <Text style={styles.text}>Còn 156 sp</Text>
                    </View>
                    <View style={styles.underline}></View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footer1}>
                    <Text style={styles.text}>Đã chọn 0 sản phẩm</Text>
                    <Text style={styles.text}>Tạm tính</Text>
                </View>
                <View style={styles.footer2}>
                    <View style={styles.viewFooter}>
                        <Pressable>
                            <Image source={require('../../assets/icons/minus-square.png')} />
                        </Pressable>
                        <Text>0</Text>
                        <Pressable>
                            <Image source={require('../../assets/icons/plus-square.png')} />
                        </Pressable>
                    </View>
                    <Text>0đ</Text>
                </View>
                <Button title="Chọn mua" onPress={function (): void {
                    throw new Error("Function not implemented.");
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        flexDirection: 'row',
        marginBottom: 20
    },
    viewbutton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        width: 68,
        height: 28,
        borderRadius: 5,
        backgroundColor: '#007537'
    },
    container1: {
        paddingStart: 60,
        paddingEnd: 60,
        paddingTop: 20,
    },
    containerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text1: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3A3A3A',
        marginBottom: 5
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: '#3A3A3A',
        marginTop: 20,
        marginBottom: 5
    },
    underline: {
        borderBottomWidth: 1, // Độ rộng của đường kẻ dưới
        borderBottomColor: 'black', // Màu sắc của đường kẻ dưới
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 40,
    },
    footer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20
    },
    viewFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150
    }
});

export default ProductDetails;