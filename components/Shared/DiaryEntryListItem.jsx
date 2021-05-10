import React,{useContext} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {useHistory} from 'react-router-native'
import Row from '../Shared/Row'
import Col from '../Shared/Col'
import RouteButton from '../Shared/RouteButton'
import colourScheme from '../../assets/styling/colourScheme';
import * as flex from '../../assets/styling/flexPositions';
import {SelectedEntryStore} from '../../data/GlobalStore'

const DiaryEntryListItem = ({props}) =>{
    const {selectedEntry, setSelectedEntry} = useContext(SelectedEntryStore)
    const history = useHistory()

    const setEntryToView = async () =>{
        await setSelectedEntry(props)
        history.push('/viewEntryPage')
    }

    return(
        <View style={styles.body}>
            <Row>
                <Col size={7} position={flex.mid}>
                    <Text style={styles.text}>{props.stateOfMind} / 10</Text>
                    <Text style={styles.text}>{props.date.day + "/" + props.date.month + "/" + props.date.year}</Text>
                </Col>
                <Col size={3} position={flex.midRight}>
                    <TouchableOpacity style={styles.routeButton} onPress={() => setEntryToView()}>
                        <Text>View</Text>
                    </TouchableOpacity>
                </Col>
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        marginTop:5,
        height:'auto',
        minHeight:60,
        width:'100%',
        backgroundColor:colourScheme.Primary,
        borderRadius:5,
        ...flex.mid
    },
    text:{
        color:'white'
    },
    routeButton:{
        backgroundColor: colourScheme.LightTone,
        borderRadius:5,
        width:'100%',
        height:'100%',
        ...flex.mid
    }
})

export default DiaryEntryListItem