import React,{useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import {mid} from '../../assets/styling/flexPositions'

import Header from '../Shared/Header'
import Row from '../Shared/Row'
import Col from '../Shared/Col'
import TextInput from '../Shared/TextInput'
import FunctionButton from '../Shared/FunctionButton'
import RouteButton from '../Shared/RouteButton'

const DiaryEntryForm3 = () =>{
    const rowSizes=[
        12,5,4,15,3,4,10,3,26,3,10,5
    ]
    if(rowSizes.reduce((a,b) => a + b) !== 100){console.log(rowSizes.reduce((a,b) => a + b))}

    const [names, setNames] = useState(["tom","sam"])
    const [worryState, setWorryState] = useState(true)
    const [worryText, setWorryText] = useState('')

    useEffect(() =>{
        if(worryState === false){
            setWorryText('')
        }
    },[worryState])

    const handleSetNames = (value) =>{
        setNames([...names, value])
    }

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={"Your Mental Health Diary Log, new entry"}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={12}>
                    <Text>
                        Who are you with?
                    </Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}>
                <Col size={1}></Col>
                <Col size={12}>
                    <Row>
                        <Col>
                            <NamesComponent setNames={handleSetNames}/>
                        </Col>
                        <Col>
                            {
                                names.map((name, index) =>{
                                    return <Text key={'name'+index} style={{textAlign:'center'}}>{name}</Text>
                                })
                            }
                        </Col>    
                    </Row>    
                </Col>
                <Col size={1}></Col>
                
            </Row>
            <Row size={rowSizes[4]}></Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={12}>
                    <Text>Is anything worrying you?</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[6]}>
                <Col size={1}></Col>
                <Col size={12}>
                    <Row>
                        <Col size={20}>
                            <FunctionButton value={true} text={"Yes"} funct={setWorryState}/>
                        </Col>
                        <Col size={1}></Col>
                        <Col size={20}>
                            <FunctionButton value={false} text={"No"} funct={setWorryState}/>
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[7]}></Row>
            <Row size={rowSizes[8]}>
                <Col size={1}></Col>
                <Col size={12}>
                    { worryState
                        ?(
                            <View style={{height:'100%'}}>
                                <Row size={1}>
                                    <Col><Text>Tell us what's worrying you</Text></Col>
                                </Row>
                                <Row size={5}>
                                    <Col>
                                        <TextInput value={worryText} setValue={setWorryText}/>
                                    </Col>
                                </Row>
                            </View>
                        )
                        :(
                            <View style={{height:'100%'}}>
                                <Row size={1}>
                                    <Col><Text>Tell us what's worrying you</Text></Col>
                                </Row>
                                <Row size={5}>
                                    <Col>
                                        <TextInput disabled={true} value={worryText}/>
                                    </Col>
                                </Row>
                            </View>
                        )
                    }
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[9]}></Row>
            <Row size={rowSizes[10]}>
                <Col size={1}></Col>
                <Col size={12}>
                    <Row>
                        <Col size={20}>
                            <RouteButton path={"/diaryEntryForm2"} text={"Previous"} colour={colourScheme.Abstract}/>
                        </Col>
                        <Col size={1}></Col>
                        <Col size={20}>
                            <RouteButton path={"/diaryEntrySubmitted"} text={"Complete"} colour={colourScheme.Abstract}/>
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[11]}></Row>
        </View>
    )
}

const styles=StyleSheet.create({
    body:{
        height:'100%'
    }
})

const NamesComponent = ({size,setNames}) =>{
    const [name, setName] = useState('Name input')

    return(
        <View style={{height:'100%'}}>
            <Row>
                <Col>
                    <TextInput value={name} setValue={setName}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FunctionButton text={"Add"} value={name} funct={() => {setNames(name);setName('')}}/>
                </Col>
            </Row>
        </View>
    )
}

export default DiaryEntryForm3