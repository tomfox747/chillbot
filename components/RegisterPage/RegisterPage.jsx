import React,{useState} from 'react'
import {View, Text} from 'react-native'

import {NativeRouter, Route, Link} from 'react-router-native'

import Row from '../Shared/Row'
import Col from '../Shared/Col'
import RouteButton from '../Shared/RouteButton'
import Header from '../Shared/Header'
import TextInput from '../Shared/TextInput'

const RegisterPage = () =>{    
    const rowSizes=[
        12,12,6,10,1,10,1,10,18,10,10
    ]
    if(rowSizes.reduce((a,b) => a + b,0) !== 100){alert("grid error, row sizes = " + rowSizes.reduce((a,b) => a + b,0))}

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return(
        <View>
            <Row>
                <Col>
                    <Header HeaderText={Register}/>
                </Col>
            </Row>
            <Row>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>Tell us a bit about yourself</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row>
                <Col size={1}></Col>
                <Col size={5}>
                    <TextInput value={email} setValue={setEmail}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row>
                <Col size={1}></Col>
                <Col size={5}>
                    <TextInput value={name} setValue={setName}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row>
                <Col size={1}></Col>
                <Col size={5}>
                    <Text>Please choose a password</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row>
                <Col size={1}></Col>
                <Col size={5}>
                    <TextInput value={password} setValue={setPassword}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row>
                <Col size={1}></Col>
                <Col size={5}>
                    <TextInput value={confirmPassword} setValue={setConfirmPassword}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row>
                <Col>
                    <RouteButton path={"/"} text={"Back"}/>
                </Col>
                <Col>
                    <RouteButton path={"/"} text={"Next"}/>
                </Col>
            </Row>
            <RouteButton path={"/"} text={"Cancel"}/>
            <Text>This is the Registration Page</Text>
        </View>
    )
}

export default RegisterPage