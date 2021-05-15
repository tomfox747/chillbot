import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Header from '../Shared/Header'
import Row from '../Shared/Row'
import Col from '../Shared/Col'

const CalmZoneSetupPage = () =>{
    const rowSizes=[12,88]

    return(
        <View style={styles.body}>
            <Row size={rowSizes[0]}>
                <Col>
                    <Header HeaderText={"Calm Zone - Coming Soon"} BackButton={{Route:'/home'}}/>
                </Col>
            </Row>
            <Row size={rowSizes[1]}></Row>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex:1
    }
})

export default CalmZoneSetupPage