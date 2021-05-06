import React,{useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native'

import colourScheme from '../../assets/styling/colourScheme'
import {bottomLeft, mid, midLeft} from '../../assets/styling/flexPositions'

import Row from '../Shared/Row'
import Col from '../Shared/Col'
import Header from '../Shared/Header'
import RouteButton from '../Shared/RouteButton'
import Textinput from '../Shared/TextInput'

import GlobalStore from '../../data/GlobalStore';

const LoginPage = ({registered}) =>{
    const rowSizes=[
        12,12,6,10,1,10,1,10,18,10,10
    ]
    if(rowSizes.reduce((a,b) => a + b,0) !== 100){alert("grid error, row sizes = " + rowSizes.reduce((a,b) => a + b,0))}
    
    const [emailValue, setEmailValue] = useState("Email");
    const [passwordValue, setPasswordValue] = useState("Password");

    useEffect(() =>{
        if(registered){
            alert("Registration Successful")
        }
    },[registered])

    return (
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={"Welcome to ChillBot"}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={5} position={midLeft}>
                    <Text>Login</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}>
                <Col size={1}></Col>
                <Col size={5} position={mid}>
                    <Textinput value={emailValue} setValue={setEmailValue}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[4]}></Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={5} position={mid}>
                    <Textinput value={passwordValue} setValue={setPasswordValue}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[6]}></Row>
            
            <Row size={rowSizes[7]}>
                <Col size={1}></Col>
                <Col size={5} position={mid}>
                    <RouteButton path={"/home"} text={"Login"} colour={colourScheme.LightTone}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[8]}></Row>
            <Row size={rowSizes[9]}>
                <Col size={1}></Col>
                <Col size={5} position={mid}>
                    <RouteButton path={"/registerPage1"} text={"Register"} colour={colourScheme.Abstract}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[10]}></Row>
        </View>
    )
}

const styles= StyleSheet.create({
    body:{
        height:'100%'
    }
})

export default LoginPage