import React from 'react'
import {View,StyleSheet} from 'react-native'

const Col = ({children, size, position, style}) =>{
    const styles= StyleSheet.create({
        col:{
            flex:size ? size : 1,
            //border:'dotted black',
            ...position,
            height:'100%',
            ...style
        }
    })

    return(
        <View style={styles.col}>
            {children}
        </View>
    )
}

export default Col