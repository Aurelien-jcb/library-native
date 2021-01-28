import React from 'react'
import { StyleSheet, Image, View, Button } from 'react-native'

export default function SplashScreen({navigation}) {

    const switchToLibrary = () => {
        navigation.navigate("Bibliothèque");
    }

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.splashLogo} source={require('../assets/img/splash.png')} />
            </View>
            <View style={styles.splashButton}>
                <Button onPress={switchToLibrary} title='Go'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashLogo: {
        width: 350,
        height: 350
    },
    splashButton: {
        width: 150,
        marginTop: 40
    }
})
