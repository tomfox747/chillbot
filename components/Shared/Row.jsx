import React from 'react'
import {View, StyleSheet} from 'react-native'
import {flexRow} from '../../assets/styling/flexPositions'

const Row = ({children, size, style}) =>{
    const styles = StyleSheet.create({
        row:{
            ...flexRow,
            flex:size ? size : 1,
            alignItems:'center',
            width:'100%',
            height:'100%',
            //border:'solid black',
            ...style
        }
    })

    return(
        <View style={styles.row}>
            {children}
        </View>
    )
}

export default Row