import React from 'react';
import { View, Text,ScrollView, StyleSheet, Image } from 'react-native';

export default function BookScreen({navigation, route}) {

    const data = route.params.data;
    return (
        <ScrollView >
                <View style={styles.container}>
                    <View>
                        <Image style={styles.bookCover} source={{uri: `${data.image}`}} />
                    </View>
                    <View style={styles.contentContainer}>
                        <View>
                            <Text style={styles.title}>{data.title}</Text>
                            <Text style={styles.author}>{data.author}</Text>
                        </View>
                        <View>
                            <Text style={styles.description}>
                               {data.description}
                            </Text>
                        </View>
                    </View>
                </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    bookCover: {
        marginTop: 20,
        width: 200,
        height: 300,
        zIndex: 10
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        position: 'relative',
        top: -20,
        width: '90%',
        backgroundColor:'white',
        borderRadius: 15,
    },
    description: {
        paddingHorizontal: 40,
        paddingBottom:20,
        fontSize: 18,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30
    },    
    author: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 18,
        opacity: 0.6
    }
})