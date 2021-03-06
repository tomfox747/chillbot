import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native'

import colourScheme from '../../assets/styling/colourScheme'
import {bottomLeft, mid, midLeft} from '../../assets/styling/flexPositions'

import Row from '../Shared/Row'
import Col from '../Shared/Col'
import Header from '../Shared/Header'
import RouteButton from '../Shared/RouteButton'
import Textinput from '../Shared/TextInput'
import { Route } from 'react-router-native';

const LoginPage = ({registered}) =>{
    const [emailValue, setEmailValue] = useState("Email");
    const [passwordValue, setPasswordValue] = useState("Password");

    useEffect(() =>{
        if(registered){
            alert("Registration Successful")
        }
    },[registered])

    return (
        <View style={styles.body}>
            <Row size={4}>
                <Col >
                    <Header HeaderText={"Welcome to ChillBot"}/>
                </Col>
            </Row>
            <Row size={3}></Row>
            <Row size={2}>
                <Col size={1}></Col>
                <Col size={5} position={midLeft}>
                    <Text>Login</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={3}>
                <Col size={1}></Col>
                <Col size={5} position={mid}>
                    <Textinput value={emailValue} setValue={setEmailValue}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={1}></Row>
            <Row size={3}>
                <Col size={1}></Col>
                <Col size={5} position={mid}>
                    <Textinput value={passwordValue} setValue={setPasswordValue}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={1}></Row>
            
            <Row size={3}>
                <Col size={1}></Col>
                <Col size={5} position={mid}>
                    <RouteButton path={"/registerPage1"} text={"Register"} colour={colourScheme.Abstract}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={3}></Row>
            <Row size={3}>
                <Col size={1}></Col>
                <Col size={5} position={mid}>
                    <RouteButton path={"/home"} text={"Login"} colour={colourScheme.LightTone}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={3}></Row>
        </View>
    )
}

const styles= StyleSheet.create({
    body:{
        height:'100%'
    }
})

export default LoginPage