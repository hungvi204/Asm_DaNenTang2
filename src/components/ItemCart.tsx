import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type ItemCartProps = {
    isCheck: boolean;
}

const ItemCart: React.FC<ItemCartProps> = ({
    isCheck
}) => {
    const [isCheckBox, setCheck] = useState(false);

    const onCheck = () => {
        setCheck(!isCheckBox);
    };

    return (
        <View style={styles.container}>
            <View style={styles.checkbox}>
                {
                    isCheck ? (
                        <Pressable onPress={onCheck}>
                            <Image
                                style={styles.check}
                                source={
                                    isCheckBox
                                        ? require('../assets/icons/checkV.png')
                                        : require('../assets/icons/check.png')
                                }
                            />
                        </Pressable>
                    ) : null
                }
            </View>
            <View>
                <Image style={styles.image} source={require('../assets/image/image.png')} />
            </View>
            <View style={styles.container2}>
                <Text>Spider Plant | <Text>Ưa bóng</Text> </Text>
                <Text>250.000đ</Text>
                <View style={styles.container1}>
                    <Pressable>
                        <Image source={require('../assets/icons/minus-square.png')}/>
                    </Pressable>
                    <Text>1</Text>
                    <Pressable>
                        <Image source={require('../assets/icons/plus-square.png')}/>
                    </Pressable>
                    <Text>Xóa</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },
    checkbox: {
        justifyContent: 'center'
    },
    check: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    image: {
        width: 77,
        height: 77,
        borderRadius: 8,
        marginRight: 20
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    container2: {
        justifyContent: 'center'
    }
})

export default ItemCart;