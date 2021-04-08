import React,{useState} from 'react'
import {View,Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import {midLeft} from '../../assets/styling/flexPositions'
import Row from '../Shared/Row'
import Col from '../Shared/Col'
import RouteButton from '../Shared/RouteButton'
import Header from '../Shared/Header'
import TextInput from '../Shared/TextInput'

const RegistrationPageOne = () =>{
    const rowSizes = [
        12,6,4,10,1,10,10,4,10,1,10,8,7,7
    ]
    if(rowSizes.reduce((a,b) => a + b,0) !== 100){alert("grid error, row sizes = " + rowSizes.reduce((a,b) => a + b,0))}

    const [email, setEmail] = useState('Email')
    const [name, setName] = useState('Nick Name')
    const [password, setPassword] = useState('Password')
    const [confirmPassword, setConfirmPassword] = useState('Confirm Password')

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={"Register"}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={5} position={midLeft}>
                    <Text>Tell us a bit about yourself</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <TextInput value={email} setValue={setEmail}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[4]}></Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <TextInput value={name} setValue={setName}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[6]}></Row>
            <Row size={rowSizes[7]}>
                <Col size={1}></Col>
                <Col size={5} position={midLeft}>
                    <Text>Please choose a password</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[8]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <TextInput value={password} setValue={setPassword}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[9]}></Row>
            <Row size={rowSizes[10]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <TextInput value={confirmPassword} setValue={setConfirmPassword}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[11]}></Row>
            <Row size={rowSizes[12]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Row>
                        <Col size={15}>
                            <RouteButton path={"/"} text={"Back"} colour={colourScheme.Abstract}/>
                        </Col>
                        <Col size={1}></Col>
                        <Col size={15}>
                            <RouteButton path={"/registerPage2"} text={"Next"} colour={colourScheme.Abstract}/>
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
                
            </Row>
            <Row size={rowSizes[13]}></Row>
        </View>
    )
}

const styles= StyleSheet.create({
    body:{
        flex:1
    }
})

export default RegistrationPageOne