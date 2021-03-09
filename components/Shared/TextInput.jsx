import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

import {mid} from '../../assets/styling/flexPositions'

const Textinput = ({value, setValue, disabled}) =>{
    const styles = StyleSheet.create({
        textInput:{
            height: 30, 
            borderColor: 'gray',
            borderWidth: 1,
            width:'100%',
            height:'100%',
            textAlign:'center',
            backgroundColor:!disabled ? 'white' : 'grey'
        },
        wrapper:{
            width:'100%', 
            height:'100%'
        }
    })
    
    return (
        <View style={styles.wrapper}>
            <TextInput
                editable={!disabled}
                style={styles.textInput}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </View>
    )
}

export default Textinput