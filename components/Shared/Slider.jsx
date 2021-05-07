import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {topMidRow, midLeft} from '../../assets/styling/flexPositions' 
import colourScheme from '../../assets/styling/colourScheme'

const selectorOptions =[1,2,3,4,5,6,7,8,9,10]

const Selector = () =>{
    const [selected, setSelected] = useState(null)

    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

    return(
        <View style={styles.body}>
            {
                selectorOptions.map((element,index) =>{
                    return(
                        <SelectorButton key={generateKey(index)} value={element} setValue={setSelected} selected={selected}/>
                    )
                })
            }
        </View>
    )
}

const SelectorButton = ({value, setValue, selected}) =>{
    return(
        <View>
            <TouchableOpacity style={selected !== value ? styles.button : styles.buttonSelected} onPress={() => setValue(value)}>
            </TouchableOpacity>
            {value === 1 
                ?<Text>{value}</Text>
                : value === 10 && <Text>{value}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        marginTop:10,
        flexDirection:'row',
        height:40,
        width:'100%',
        ...topMidRow,
        justifyContent:'space-between'
    },
    button:{
        width:15,
        height:15,
        backgroundColor:colourScheme.LightTone,
        borderRadius:15
    },
    buttonSelected:{
        width:15,
        height:15,
        backgroundColor:colourScheme.Abstract,
        borderRadius:15
    }
})

export default Selector