import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default function Book({ data, navigation}) {

    return (
        <View >
             {data.map(book => {
                return (
                <TouchableOpacity key={book.id} onPress={() => navigation.navigate("Détails", {data: book})}>
                    <View  style={styles.container}>
                        <View>
                            <Image style={styles.bookCover} source={{uri: `${book.image}`}} />
                        </View>
                        <View>
                            <Text style={styles.bookTitle}>{book.title}</Text>
                            <Text style={styles.bookAuthor}>{book.author}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                    )
                })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#C8C8C8',
        borderBottomWidth: 2,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical:40,
        paddingRight:40,
        paddingLeft: 20
    },
    bookCover: {
        marginRight: 30,
        width: 90,
        height: 150
    },
    bookTitle: {
        fontSize: 20,
    },
    bookAuthor: {
        opacity: 0.6
    }
})