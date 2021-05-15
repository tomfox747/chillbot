import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import {midRow,mid} from '../../assets/styling/flexPositions'

const FunctionButton = ({value, funct, text, color}) =>{
    return(
        <View style={styles.body}>
            <TouchableOpacity  onPress={(e) => funct(value)} style={{...styles.button, backgroundColor: color ? color : colourScheme.LightTone}}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        height:'100%'
    },
    button:{
        height:'100%',
        width:"100%",
        backgroundColor: colourScheme.LightTone,
        borderRadius:5,
        ...mid
    },
    text:{ 
        textAlign:'center',
        color:'white'
    }
})

export default FunctionButton