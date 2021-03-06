import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

import {mid} from '../../assets/styling/flexPositions'

const Textinput = ({value, setValue}) =>{
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.textInput}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput:{
        height: 30, 
        borderColor: 'gray',
        borderWidth: 1,
        width:'100%',
        height:'100%',
        textAlign:'center'
    },
    wrapper:{
        width:'100%', 
        height:'100%'
    }
})

export default Textinput