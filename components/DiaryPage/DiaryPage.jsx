import React,{useContext, useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
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


const filters = ["Date","Mood","People"];

let date = new Date(Date.now()).toDateString();


const DiaryPage = ({entryAdded}) =>{

    let {
        _getAllFromCollectionWhere
    } = useDataSource()

    const rowSizes = [
        12,2,7,7,7,1,20,6,34,4
    ]
    if(rowSizes.reduce((a,b) => a + b) !== 100){console.log("grid error, row sizes = " + rowSizes.reduce((a,b) => a + b))}

    const [selectedFilter, setSelectedFilter] = useState(filters[0]);

    const [selectedPeople, setSelectedPeople] = useState([])
    const [mood, setMood] = useState(0)
    const [sleep, setSleep] = useState(0)
    const [day,setDay] = useState(0)
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)
    const {loggedInUser, setLoggedInUser} = useContext(LoggedInUserStore)
    const [entries, setEntries] = useState([])
    const [filteredEntires, setFilteredEntries] = useState([])

    if(entryAdded){
        alert("New Diary Entry Added")
    }

    useEffect(() =>{
        let didCancel = false;

        const loadEntries = async () =>{
            let res = await _getAllFromCollectionWhere('diaryentries', 'user', '==', loggedInUser.username)
            if(!didCancel){
                setEntries(res)
                setFilteredEntries(res)
            }
        }

        loadEntries()

        return(() =>{
            didCancel = true
        })
    },[])

    //filter handlers
    //////////////////////////////////
    const setMoodHandler = (value) =>{
        setMood(value)
    }
    useEffect(() =>{
        if(selectedFilter === 'Mood'){
            let res = entries.filter(entry => entry.stateOfMind == mood)
            setFilteredEntries(res)
        }
    },[mood])

    useEffect(() =>{
        if(selectedFilter === 'People'){
            let res = []
            selectedPeople.forEach(person =>{
                let ents = entries.filter(entry => entry.names.includes(person))
                res = [...res, ...ents]
            })
            setFilteredEntries(res)
        }
    },[selectedPeople])

    const setDateFilter=(dateObject) =>{
        if(selectedFilter === 'Date'){
            let res = entries.filter(entry => entry.date.day == dateObject.day && entry.date.month == dateObject.month && entry.date.year == dateObject.year)
            setFilteredEntries(res)
        }
    }

    //////////////////////////////////

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
                    <Dropdown options={filters} setSelected={setSelectedFilter} selected={selectedFilter}/>
                </Col>
                <Col size={1}></Col>
                <Col size={3}>
                    <FunctionButton text={"clear"} color={colourScheme.Abstract} funct={setFilteredEntries} value={entries}/>
                </Col>
                <Col size={1}></Col>
            </Row>

            <Row size={rowSizes[5]}></Row>
            <Row size={rowSizes[6]}>
                <Col size={1}></Col>
                <Col size={10} position={flex.mid}>
                    <FilterComponent 
                        type={selectedFilter} 
                        selectedPeople={selectedPeople}
                        setSelectedPeople={setSelectedPeople}
                        mood={mood}
                        setMood={setMoodHandler}
                        setDateFilter={setDateFilter}
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
                                <ScrollableList type={DiaryEntryListItem} list={filteredEntires}/>
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
    },
    listContainer:{
        borderStyle:'solid',
        borderColor:'grey',
        borderWidth:1,
        borderRadius:5
    }
})    


const FilterComponent = ({type, selectedPeople, setSelectedPeople, mood, setMood, setDateFilter}) =>{

    if(type==="Mood"){
        return(
            <MoodFilter setSelected={setMood} selected={mood}/>
        )
    }

    if(type==="People"){
        return(
            <PeopleFilter selectedPeople={selectedPeople} setSelectedPeople={setSelectedPeople}/>
        )
    }
    
    if(type==="Date"){
        return(
            <DateFilter setDateFilter={setDateFilter}/>
        )
    }
}

const MoodFilter = ({selected, setSelected}) =>{

    return(
        <View style={{...styles.body,...flex.midLeft}}>
            <Text>Select your mood rating:</Text>
            <Slider selected={selected} setSelected={setSelected}/>
        </View>
    )
}

const PeopleFilter = ({selectedPeople, setSelectedPeople}) =>{

    const [name, setName] = useState('')

    const removeName = (value) =>{
        let result = selectedPeople.filter(name => name !== value)
        setSelectedPeople(result)
    }

    return(
        <View style={{...styles.body,...flex.mid}}>
            <Row size={1}>
                <Col position={flex.midLeft}>
                    <Text>Select the filter by person:</Text>
                </Col>
            </Row>
            <Row size={3}>
                <Col>
                    <Row>
                        <Col>
                            <TextInput value={name} setValue={setName} placeholder={"input name"}/>
                        </Col>    
                    </Row>
                    <Row>
                        <Col>
                            <FunctionButton value={name} text={"Add person"} funct={() => {
                                if(name !== ''){
                                    setSelectedPeople([...selectedPeople, name])
                                    setName('')
                                }
                            }}/>
                        </Col>
                    </Row>
                </Col>
                <Col style={styles.listContainer} position={flex.mid}>
                    <ScrollView contentContainerStyle={{width:'100%'}}>
                        {
                            selectedPeople.map((name, index) =>{
                                return (
                                    <Row style={{marginTop:3, height:30}}>
                                        <Col size={5}>
                                            <Text key={'name'+index} style={{textAlign:'center'}}>{name}</Text>
                                        </Col>
                                        <Col size={5} position={flex.mid}>
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
                        <FunctionButton value={{day:day,month:month,year:year}} funct={setDateFilter} text={"Set Date"}/>
                    </View>
                </Col>
            </Row>
        </View>
    )
}

export default DiaryPage