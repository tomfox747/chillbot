import React,{useState, useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useHistory} from 'react-router-native'
import {NewDiaryEntryStore} from '../../data/GlobalStore'
import colourScheme from '../../assets/styling/colourScheme'

import Header from '../Shared/Header'
import Col from '../Shared/Col'
import Row from '../Shared/Row'
import FunctionButton from '../Shared/FunctionButton'
import RouteButton from '../Shared/RouteButton'
import TextInput from '../Shared/TextInput'
import SelectMultiple from '../Shared/SelectMultiple'
import * as flex from '../../assets/styling/flexPositions'
import { ScrollView } from 'react-native'

const actsStore = [
    "Nothing Much",
    "Working",
    "Doing Chores",
    "Chillin Alone",
    "Socialising",
    "Listening To Music",
    "Watching TV",
    "Watching Youtube",
    "Playing Games",
    "On Your Phone",
    "Exercising",
    "Other",
]

const DiaryEntryForm2 = () =>{
    const history = useHistory()
    let {newDiaryEntry, setNewDiaryEntry} = useContext(NewDiaryEntryStore)
    const rowSizes = [
        12,6,5,10,6,5,10,3,25,4,10,4
    ]
    if (rowSizes.reduce((a,b) => a + b) !== 100){console.log(rowSizes.reduce((a,b) => a + b))}

    const [location, setLocation] = useState(null)
    const [activities, setActivities] = useState([])

    const getLocation = (loc) =>{
        setLocation(loc)
    }

    const setActivitiesFunc = (act) =>{
        if(activities.includes(act)){
            //remove the item from the array
            setActivities(activities.filter(activity => activity !== act));
        }

        if(!activities.includes(act)){
            //add the item to the array
            setActivities([...activities, act]);
        }
    }

    const next = () =>{
        setNewDiaryEntry({
            ...newDiaryEntry,
            activities:activities,
            location:location
        })
        history.push('/diaryEntryForm3')
    }

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header BackButton={{Route:'/diaryPage'}} HeaderText={"Your mental health diary, new entry"}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={20}>
                    <Text>Where are you at the moment?</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}>
                <Col size={1}></Col>
                <Col size={20}>
                    <FunctionButton text={"Get Location"} value={{x:0,y:0}} funct={getLocation}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[4]}></Row>
            <Row size={rowSizes[5]}>
                <Col size={1}></Col>
                <Col size={20}>
                    <Text>What are you up to? (select multiple)</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[6]}>
                <Col size={1}></Col>
                <Col size={20}>
                    <Row>
                        <Col>
                            <SelectMultiple selected={activities} setSelected={setActivitiesFunc} options={actsStore}/>
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[7]}></Row>
            <Row size={rowSizes[8]}>
                <Col size={1}></Col>
                <Col size={20} position={flex.mid} style={styles.listContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        {
                            activities.map((element,index) =>{
                                return(
                                    <Text key={element+index} style={styles.text}>
                                        {element}
                                    </Text>
                                )
                            })
                        }
                    </ScrollView>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[9]}></Row>
            <Row size={rowSizes[10]}>
                <Col size={1}></Col>
                <Col size={5}>
                    <Row>
                        <Col size={12}>
                            <RouteButton path={"/diaryEntryForm1"} text={"Prev"} colour={colourScheme.Abstract}/>
                        </Col>
                        <Col size={1}></Col>
                        <Col size={12}>
                            <FunctionButton funct={next} text={"Next"} color={colourScheme.Abstract}/>
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[11]}></Row>
        </View>
    )
}

const styles= StyleSheet.create({
    body:{
        height:'100%'
    },
    text:{
        fontSize:20
    },
    scrollContainer:{
        ...flex.mid,
        width:'100%'
    },
    listContainer:{
        borderColor:'grey',
        borderStyle:'solid',
        borderWidth:1, 
        borderRadius:5
    }
})

export default DiaryEntryForm2