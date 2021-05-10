import React,{useContext, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MapView,{Marker} from 'react-native-maps'
import {SelectedEntryStore} from '../../data/GlobalStore'
import Header from '../Shared/Header'
import Row from '../Shared/Row'
import Col from '../Shared/Col'
import { midLeft, midRight, mid } from '../../assets/styling/flexPositions'
import FunctionButton from '../Shared/FunctionButton'
import { ScrollView } from 'react-native'


const ViewEntriesPage = () =>{
    const rowSizes=[12,1,5,7,15,3,7,15,3,5,29,3]
    const {selectedEntry, setSelectedEntry} = useContext(SelectedEntryStore)
    const [dataBox1, setDataBox1] = useState('mood')
    const [dataBox2, setDataBox2] = useState('activities')

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header BackButton={{Route:'/diaryPage'}} HeaderText={selectedEntry.date.day + "/" + selectedEntry.date.month + "/" + selectedEntry.date.year}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}>

            </Row>
            <Row size={rowSizes[2]}>
                <Col size={1}></Col>
                <Col size={4} position={midLeft}>
                    <Text>State Of Mind:</Text> 
                </Col>
                <Col size={6} position={midLeft}>
                    <Text>{selectedEntry.stateOfMind} / 10</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[3]}>
                <Col size={2}></Col>
                <Col size={9}>
                    <FunctionButton funct={setDataBox1} value={'mood'} text={"Mood Description"}/>
                </Col>
                <Col size={2}></Col>
                <Col size={9}>
                    <FunctionButton funct={setDataBox1} value={'worries'} text={"Worries"}/>
                </Col>
                <Col size={2}></Col>
            </Row>
            <Row size={rowSizes[4]}>
                <Col size={1}></Col>
                <Col size={10}>
                    <Row size={1}></Row>
                    <Row size={20}>
                        <Col>
                            <View style={styles.textBody}>
                                <Text>
                                    {dataBox1 === 'mood'
                                        ?(
                                            <Text>{selectedEntry.moodDescription}</Text>
                                        ):(
                                            <Text>{selectedEntry.worries}</Text>
                                        )
                                    }
                                </Text>
                            </View>
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[5]}></Row>
            <Row size={rowSizes[6]}>
                <Col size={2}></Col>
                <Col size={9}>
                    <FunctionButton funct={setDataBox2} value={'activities'} text={"Activities"}/>
                </Col>
                <Col size={2}></Col>
                <Col size={9}>
                    <FunctionButton funct={setDataBox2} value={'people'} text={"People"}/>
                </Col>
                <Col size={2}></Col>
            </Row>
            <Row size={rowSizes[7]}>
                <Col size={1}></Col>
                <Col size={10}>
                    <Row size={1}></Row>
                    <Row size={20}>
                        <Col>
                            <View style={styles.textBody}>
                                <ScrollView contentContainerStyle={{...mid,width:'100%',}}>
                                    <Text>
                                        {dataBox2 === 'activities'
                                            ?(
                                                selectedEntry.activities.map(element =>{
                                                    return(
                                                        <Text>{element + '\n'}</Text>
                                                    )
                                                })
                                            ):(
                                                selectedEntry.names.map(element =>{
                                                    return(
                                                        <Text>{element + '\n'}</Text>
                                                    )
                                                })
                                            )
                                        }
                                    </Text>
                                </ScrollView>
                            </View>
                        </Col>
                    </Row>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[8]}>
                
            </Row>
            <Row size={rowSizes[9]}>
                <Col size={1}></Col>
                <Col size={10}>
                    <Text>Location of Diary Entry:</Text>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[10]}>
                <Col size={1}></Col>
                <Col size={10}>
                    <MapView 
                        style={styles.map} 
                        initialRegion={{
                            latitude:selectedEntry.location.latitude, 
                            longitude:selectedEntry.location.longitude,
                            latitudeDelta:0.01,
                            longitudeDelta:0.01
                        }}
                    >
                        <Marker
                          key={'pin'}
                          coordinate={selectedEntry.location}
                       />
                    </MapView>
                </Col>
                <Col size={1}></Col>
            </Row>
            <Row size={rowSizes[11]}></Row>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1
    },
    textBody:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        borderRadius:5,
        ...mid
    },
    map:{
        width:'100%',
        height:'100%',
    }
})

export default ViewEntriesPage