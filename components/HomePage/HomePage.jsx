import React,{useState, useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import {LoggedInUserStore,LocationStore} from '../../data/GlobalStore'

import Row from '../Shared/Row'
import Col from '../Shared/Col'
import Header from '../Shared/Header' 
import RouteButton from '../Shared/RouteButton'

const HomePage = () =>{
    let {loggedInUser, setLoggedInUser} = useContext(LoggedInUserStore)
    const rowSizes = [12,3,6,5,11,3,11,3,11,3,11,21]

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={`Welcome back ${loggedInUser.nickname}`}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={6}>
                    <RouteButton path={"/"} text={"Log out"} colour={colourScheme.Abstract}/>
                </Col>
                <Col size={11}></Col>
            </Row>
            <Row size={rowSizes[3]}></Row>
            <Row size={rowSizes[4]}>
                <Col size={1}></Col>
                <Col size={5}>
                <RouteButton path={"/diaryPage"} text={"Your Diary"} colour={colourScheme.LightTone}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[5]}></Row>
            <Row size={rowSizes[6]}>
            <Col size={1}></Col>
                <Col size={5}>
                    <RouteButton path={"/calmZoneSetupPage"} text={"Calm Zone"} colour={colourScheme.LightTone}/>        
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[7]}></Row>
            <Row size={rowSizes[8]}>
            <Col size={1}></Col>
                <Col size={5}>
                    <RouteButton path={"/cheerMeUpPage"} text={"Cheer Me Up"} colour={colourScheme.LightTone}/>        
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[9]}></Row>
            <Row size={rowSizes[10]}>
            <Col size={1}></Col>
                <Col size={5}>
                    <RouteButton path={"/settingsPage"} text={"Settings"} colour={colourScheme.LightTone}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[11]}></Row>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        height:'100%'
    }
})

export default HomePage