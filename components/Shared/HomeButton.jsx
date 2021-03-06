import React from 'react'
import {View, Text} from 'react-native'

import {Link} from 'react-router-native'

const HomeButton = () =>{
    return(
        <View>
            <Link to="/"><View><Text>Home</Text></View></Link>
        </View>
    )
}

export default HomeButton