import React,{useContext, useState, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colourScheme from '../../assets/styling/colourScheme'
import * as flex from '../../assets/styling/flexPositions'
import RouteButton from '../Shared/RouteButton'
import useDataSource from '../../hooks/useDataSource'
import {LoggedInUserStore} from '../../data/GlobalStore'

import Header from '../Shared/Header'
import Row from '../Shared/Row'
import Col from '../Shared/Col'
import Dropdown from '../Shared/DropDown'
import ScrollableList from '../Shared/ScollableList'
import DiaryEntryListItem from '../Shared/DiaryEntryListItem'
import Slider from '../Shared/Slider'
import TextInput from '../Shared/TextInput'
import DropDown from '../Shared/DropDown'
import FunctionButton from '../Shared/FunctionButton'


const testOptions = ["Date","Mood","Location","People","Sleep"];
const testLocations = ["Home","Gym","Work","Shopping","Restaurant"]
const testPeople = ["james","sam","mille","rob"]

let date = new Date(Date.now()).toDateString();


const DiaryPage = ({entryAdded}) =>{

    let {
        _getAllFromCollectionWhere
    } = useDataSource()

    const rowSizes = [
        12,2,7,7,7,1,17,9,34,4
    ]
    if(rowSizes.reduce((a,b) => a + b) !== 100){console.log("grid error, row sizes = " + rowSizes.reduce((a,b) => a + b))}

    const [selected, setSelected] = useState(testOptions[0]);

    const [selectedPerson, setSelectedPerson] = useState(testPeople[0])
    const [selectedLocation, setSelectedLocation] = useState(testLocations[0])
    const {loggedInUser, setLoggedInUser} = useContext(LoggedInUserStore)
    const [entries, setEntries] = useState([])

    if(entryAdded){
        alert("New Diary Entry Added")
    }

    useEffect(() =>{
        let didCancel = false;

        const loadEntries = async () =>{
            let res = await _getAllFromCollectionWhere('diaryentries', 'user', '==', loggedInUser.username)
            if(!didCancel){
                setEntries(res)
            }
        }

        loadEntries()

        return(() =>{
            didCancel = true
        })
    },[])

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={'Your Mental Health Diary'} BackButton={{Route:'/home'}}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
            
            
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={10}>
                    <RouteButton path={"diaryEntryForm1"} text={"New Entry"}/>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}></Row>


            <Row size={rowSizes[4]}>
                <Col size={1}></Col>
                <Col size={3} style={flex.mid}>
                    <Text>Filter by :</Text>
                </Col>
                <Col size={7}>
                    <Dropdown options={testOptions} setSelected={setSelected} selected={selected}/>
                </Col>
                <Col size={1}></Col>
            </Row>

            <Row size={rowSizes[5]}></Row>
            <Row size={rowSizes[6]}>
                <Col size={1}></Col>
                <Col size={10} position={flex.mid}>
                    <FilterComponent 
                        type={selected} 
                        selectedPerson={selectedPerson}
                        setSelectedPerson={setSelectedPerson}
                        selectedLocation={selectedLocation}
                        setSelectedLocation={setSelectedLocation}
                    />
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[7]}></Row>

            <Row size={rowSizes[8]}>
                <Col size={1}></Col>
                <Col size={10}>
                    <View>
                        <Text>Your Entries</Text>
                        {entries.length === 0
                            ?(
                                <View>
                                    <Text>No Entries to Display</Text>        
                                </View>
                            )
                            :(
                                <ScrollableList type={DiaryEntryListItem} list={entries}/>
                            )
                        }
                        
                    </View>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[9]}></Row>
        </View>
    )
}

const styles= StyleSheet.create({
    body:{
        flex:1
    }
})


const FilterComponent = ({type, selectedPerson, setSelectedPerson, selectedLocation, setSelectedLocation}) =>{

    if(type==="Mood"){
        return(
            <MoodFilter/>
        )
    }
    
    if(type === "Sleep"){
        return(
            <SleepFilter/>
        )
    }

    if(type==="People"){
        return(
            <PeopleFilter selectedPerson={selectedPerson} setSelectedPerson={setSelectedPerson}/>
        )
    }
    
    if(type==="Location"){
        return(
            <LocationFilter selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>
        )
    }
    
    if(type==="Date"){
        return(
            <DateFilter/>
        )
    }
    
}

const MoodFilter = () =>{

    return(
        <View style={{...styles.body,...flex.midLeft}}>
            <Text>Select your mood rating:</Text>
            <Slider/>
        </View>
    )
}

const SleepFilter = () =>{

    return(
        <View style={{...styles.body,...flex.midLeft}}>
            <Text>Select your sleep rating:</Text>
            <Slider/>            
        </View>
    )
}

const PeopleFilter = ({selectedPerson, setSelectedPerson}) =>{

    return(
        <View style={{...styles.body,...flex.mid}}>
            <Row>
                <Col position={flex.midLeft}>
                    <Text>Select the filter by person:</Text>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DropDown options={testPeople} selected={selectedPerson} setSelected={setSelectedPerson}/>
                </Col>
            </Row>
        </View>
    )
}

const LocationFilter = ({selectedLocation, setSelectedLocation}) =>{

    return(
        <View style={{...styles.body,...flex.mid}}>
            <Row>
                <Col position={flex.midLeft}>
                    <Text>Select the filter location:</Text>    
                </Col>
            </Row>
            <Row>
                <Col>
                    <DropDown options={testLocations} selected={selectedLocation} setSelected={setSelectedLocation}/>
                </Col>
            </Row>
        </View>
    )
}

const DateFilter = ({setDateFilter}) =>{
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    return(
        <View style={{...styles.body,...flex.mid}}>
            <Row size={10}>
                <Col size={3} position={flex.mid}>
                    <Text>Day</Text>
                </Col>
                <Col size={1}></Col>
                <Col size={3} position={flex.mid}>
                    <Text>Month</Text>
                </Col>
                <Col size={1}></Col>
                <Col size={3} position={flex.mid}>
                    <Text>Year</Text>
                </Col>
            </Row>
            <Row size={10}>
                <Col size={3}>
                    <TextInput value={day} setValue={setDay}/>
                </Col>
                <Col size={1}></Col>
                <Col size={3}>
                    <TextInput value={month} setValue={setMonth}/>
                </Col>
                <Col size={1}></Col>
                <Col size={3}>
                    <TextInput value={year} setValue={setYear}/>
                </Col>
            </Row>
            <Row size={2}></Row>
            <Row size={10}>
                <Col>
                    <View>
                        <FunctionButton value={day+"/"+month+"/"+year} funct={setDateFilter} text={"Set Date"}/>
                    </View>
                </Col>
            </Row>
        </View>
    )
}

export default DiaryPage