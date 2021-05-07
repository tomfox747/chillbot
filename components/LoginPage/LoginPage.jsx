import React,{useState, useEffect, useContext} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {useHistory} from 'react-router-native'
import useDataSource from '../../hooks/useDataSource'
import {LoggedInUserStore} from '../../data/GlobalStore'

import colourScheme from '../../assets/styling/colourScheme'
import {bottomLeft, mid, midLeft} from '../../assets/styling/flexPositions'

import Row from '../Shared/Row'
import Col from '../Shared/Col'
import Header from '../Shared/Header'
import RouteButton from '../Shared/RouteButton'
import Textinput from '../Shared/TextInput'

const LoginPage = ({registered}) =>{
    let history = useHistory();
    let {
        _authenticate,
        _getAllFromCollection
    }= useDataSource()

    const rowSizes=[
        12,12,6,10,1,10,1,10,18,10,10
    ]
    if(rowSizes.reduce((a,b) => a + b,0) !== 100){alert("grid error, row sizes = " + rowSizes.reduce((a,b) => a + b,0))}
    
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    let {loggedInUser, setLoggedInUser} = useContext(LoggedInUserStore);

    useEffect(() =>{
        if(registered){
            alert("Registration Successful")
        }
    },[registered])

    const authenticate = async () =>{
        let authResult = await _authenticate(usernameValue, passwordValue)
        if(authResult !== false){
            setLoggedInUser(authResult)
            history.push('/home');
        }else{
            alert("Incorrect username or password")
        }
    }

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
                    <Textinput value={usernameValue} setValue={setUsernameValue} placeholder={"Username"}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[4]}></Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={5} position={mid}>
                    <Textinput value={passwordValue} setValue={setPasswordValue} placeholder={"Password"}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[6]}></Row>
            
            <Row size={rowSizes[7]}>
                <Col size={1}></Col>
                <Col size={5} position={mid}>
                    <TouchableOpacity onPress={() => authenticate()} style={styles.loginButton}>
                        <Text style={{color:'white'}}>Login</Text>
                    </TouchableOpacity>
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
    },
    loginButton:{
        height:'100%',
        width:'100%',
        backgroundColor:colourScheme.LightTone,
        ...mid,
        borderRadius:5
    }
})

export default LoginPage