import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Row from '../Shared/Row'
import Col from '../Shared/Col'

import colourScheme from '../../assets/styling/colourScheme';
import * as flex from '../../assets/styling/flexPositions';

const DiaryEntryListItem = ({props}) =>{
    return(
        <View style={styles.body}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.text}>{props.date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        marginTop:5,
        height:'auto',
        minHeight:60,
        width:'100%',
        backgroundColor:colourScheme.Primary,
        borderRadius:5,
        ...flex.mid
    },
    text:{
        color:'white'
    }
})

export default DiaryEntryListItem