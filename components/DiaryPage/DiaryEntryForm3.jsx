import React,{useState, useEffect, useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useHistory} from 'react-router-native'
import useDataSource from '../../hooks/useDataSource'
import {NewDiaryEntryStore, LoggedInUserStore} from '../../data/GlobalStore'
import colourScheme from '../../assets/styling/colourScheme'
import {flexRow, mid, midLeft} from '../../assets/styling/flexPositions'

import Header from '../Shared/Header'
import Row from '../Shared/Row'
import Col from '../Shared/Col'
import TextInput from '../Shared/TextInput'
import FunctionButton from '../Shared/FunctionButton'
import RouteButton from '../Shared/RouteButton'
import { ScrollView } from 'react-native'

const DiaryEntryForm3 = () =>{
    const history = useHistory();
    let{
        _createDocument
    } = useDataSource()
    const rowSizes=[
        12,5,4,15,3,4,10,3,26,3,10,5
    ]
    if(rowSizes.reduce((a,b) => a + b) !== 100){console.log(rowSizes.reduce((a,b) => a + b))}

    const [names, setNames] = useState(["tom","sam"])
    const [worryState, setWorryState] = useState(true)
    const [worryText, setWorryText] = useState('')
    const {newDiaryEntry, setNewDiaryEntry} = useContext(NewDiaryEntryStore)
    const {loggedInUser, setLoggedInUser} = useContext(LoggedInUserStore)

    useEffect(() =>{
        if(worryState === false){
            setWorryText('')
        }
    },[worryState])

    const handleSetNames = (value) =>{
        setNames([...names, value])
    }

    const removeName = (value) =>{
        setNames(names.filter(name => name !== value))
    }

    const complete = async () =>{
        setNewDiaryEntry({
            ...newDiaryEntry,
            names:names,
            worries:worryText
        })
        let today = new Date()
        let day = today.getDate()
        let month = today.getMonth()+1
        let year = today.getFullYear()
        if(await _createDocument("diaryentries", {
            ...newDiaryEntry,
            names:names,
            worries:worryText,
            date:{
                day:day,
                month:month,
                year:year
            },
            user:loggedInUser.username
        }) === true){
            alert("Diary Entry Created")
            history.push('/diaryPage')
        }else{
            alert("There was a problem creating you diary entry")
        }
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
                        <Col size={10}>
                            <NamesComponent setNames={handleSetNames}/>
                        </Col>
                        <Col size={1}></Col>
                        <Col size={10} style={styles.listContainer} position={mid}>
                            <ScrollView contentContainerStyle={{width:'100%'}}>
                                {
                                    names.map((name, index) =>{
                                        return (
                                            <Row style={{marginTop:3, height:30}}>
                                                <Col size={5}>
                                                    <Text key={'name'+index} style={{textAlign:'center'}}>{name}</Text>
                                                </Col>
                                                <Col size={5} position={mid}>
                                                    <View style={{width:'90%'}}>
                                                        <FunctionButton funct={removeName} value={name} text={"Remove"}/>
                                                    </View>
                                                </Col>
                                            </Row>
                                            
                                        )
                                    })
                                }
                            </ScrollView>
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
                            <FunctionButton funct={complete} text={"Complete"} color={colourScheme.Abstract}/>
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
    },
    listContainer:{
        borderStyle:'solid',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:5
    }
})

const NamesComponent = ({size,setNames}) =>{
    const [name, setName] = useState('')

    return(
        <View style={{height:'100%'}}>
            <Row size={7}>
                <Col>
                    <TextInput value={name} setValue={setName} placeholder={"Name Input"}/>
                </Col>
            </Row>
            <Row size={1}></Row>
            <Row size={7}>
                <Col>
                    <FunctionButton text={"Add"} value={name} funct={() => {
                        if(name !== ''){
                            setNames(name)
                            setName('')
                        }
                    }}/>
                </Col>
            </Row>
        </View>
    )
}

export default DiaryEntryForm3