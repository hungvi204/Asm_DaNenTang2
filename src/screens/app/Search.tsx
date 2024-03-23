import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Herder from "../../components/Header";
import ItemSearch from "../../components/ItemSearch";

const Search: React.FC = () => {
    return (
        <View style={styles.container}>
            <Herder title="Tìm kiếm" iconLeft={require('../../assets/icons/iconleft.png')} />
            <View style={styles.input}>
                <TextInput placeholder="Tìm kiếm" />
                <Image style={styles.image} source={require('../../assets/tabs/search.png')} />
            </View>
            <ItemSearch />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#8B8B8B',
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10,
        borderBottomWidth: 1,
        justifyContent: 'space-between' 
    },
    image: {
        marginHorizontal: 16,
    }
})

export default Search