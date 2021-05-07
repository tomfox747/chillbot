import React,{useState, useContext} from 'react'
import {View,Text, StyleSheet} from 'react-native'
import {useHistory} from 'react-router-native'
import colourScheme from '../../assets/styling/colourScheme'
import {midLeft} from '../../assets/styling/flexPositions'
import Row from '../Shared/Row'
import Col from '../Shared/Col'
import RouteButton from '../Shared/RouteButton'
import Header from '../Shared/Header'
import TextInput from '../Shared/TextInput'
import {RegistrationStore} from '../../data/GlobalStore'
import FunctionButton from '../Shared/FunctionButton'

const RegistrationPageOne = () =>{
    const history = useHistory();
    const rowSizes = [
        12,6,4,11,2,11,11,5,11,2,9,8,8
    ]
    if(rowSizes.reduce((a,b) => a + b,0) !== 100){alert("grid error, row sizes = " + rowSizes.reduce((a,b) => a + b,0))}

    const [username, setUsername] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    let {newUser, setNewUser} = useContext(RegistrationStore)

    const next = () =>{
        if(username === '' || nickname === '' || password === ''){
            alert("Please fill in all required sections")
            return
        }
        setNewUser({
            ...newUser,
            username:username,
            nickname:nickname,
            password:password
        })
        history.push('/registerPage2')
    }

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
                    <TextInput value={username} setValue={setUsername} placeholder={"Username"}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[4]}></Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <TextInput value={nickname} setValue={setNickname} placeholder={"Nick Name"}/>
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
                    <TextInput value={password} setValue={setPassword} placeholder={"Password"}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[9]}></Row>
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
                            <FunctionButton funct={next} text={"Next"} color={colourScheme.Abstract}/>
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