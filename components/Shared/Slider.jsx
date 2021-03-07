import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {midLeft} from '../../assets/styling/flexPositions' 

import colourScheme from '../../assets/styling/colourScheme'

const Slider = ({setValue}) =>{
    const [viewWidth, setViewWidth] = useState(0)
    const [notches, setNotches] = useState([])
    const [position, setPosition] = useState(0)

    const slider={
        height:'16px',
        width:'16px',
        borderRadius:'8px',
        backgroundColor:colourScheme.LightTone,
        marginTop:'-9.5px',
        marginLeft:`${position}px`
    }

    const handlePositionChange = (e) =>{
        let pos = e.nativeEvent.layerX
        const closest = notches.reduce((a, b) => {
            return Math.abs(b - pos) < Math.abs(a - pos) ? b : a;
        });
        const idx = notches.indexOf(closest)
        setPosition(notches[idx])
    }

    const handleLayout = (e) =>{
        let width = e.nativeEvent.layout.width
        setViewWidth(width)
        let notchSize = e.nativeEvent.layout.width / 10 
        let notches_p = [
            notchSize * 0,
            notchSize * 1,
            notchSize * 2,
            notchSize * 3,
            notchSize * 4,
            notchSize * 5,
            notchSize * 6,
            notchSize * 7,
            notchSize * 8,
            notchSize * 9,
            notchSize * 10,
        ]
        setNotches(notches_p)
    }

    return(
        <View onLayout={(e) => handleLayout(e)} style={styles.body}>
            <TouchableOpacity style={{width:'100%'}} onPress={(e) => handlePositionChange(e)}>
                <View style={styles.line}></View>
                <View style={slider}></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        height:'40px',
        ...midLeft
    },
    line:{
        height:'2px',
        width:'100%',
        backgroundColor:'black'
    }
})

export default Slider