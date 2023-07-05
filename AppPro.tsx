import React from 'react'

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'

     return(
        <View style={style.container}>
            <Text style={isDarkMode ? style.darkText : style.darkText}>
                hello World
            </Text>
        </View>
     )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff',
    },
    whiteText:{
        color:'#ffffff',
        textTransform:'uppercase'
    },
    darkText:{
        color:'#000000'
    }
})


export default AppPro