import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

import {mid} from '../../assets/styling/flexPositions'

const Textinput = ({value, setValue, disabled, placeholder}) =>{
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
                onChangeText={setValue}
                value={value}
                placeholder={placeholder}
            />
        </View>
    )
}

export default Textinput