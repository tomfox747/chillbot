import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'

import Row from '../Shared/Row'
import Col from '../Shared/Col'
import Header from '../Shared/Header' 
import RouteButton from '../Shared/RouteButton'

const HomePage = () =>{
    const [nickname, setNickname] = useState("tom")
    const rowSizes = [
        12,14,11,3,11,3,11,35
    ]
    if(rowSizes.reduce((a,b) => a + b) !== 100){console.log("grid error, row sizes = " + rowSizes.reduce((a,b) => a + b))}

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={`Welcome back ${nickname}`}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={5}>
                <RouteButton path={"/diaryPage"} text={"Your Diary"} colour={colourScheme.LightTone}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}></Row>
            <Row size={rowSizes[4]}>
            <Col size={1}></Col>
                <Col size={5}>
                    <RouteButton path={"/calmZoneSetupPage"} text={"Calm Zone"} colour={colourScheme.LightTone}/>        
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[5]}></Row>
            <Row size={rowSizes[6]}>
            <Col size={1}></Col>
                <Col size={5}>
                    <RouteButton path={"/settingsPage"} text={"Settings"} colour={colourScheme.LightTone}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[7]}></Row>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        height:'100%'
    }
})

export default HomePage