import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {NativeRouter, Route} from 'react-router-native'

import LoginPage from '../LoginPage/LoginPage'
import RegistrationPageOne from '../RegisterPage/RegistrationPageOne'
import RegistrationPageTwo from '../RegisterPage/RegistrationPageTwo'
import HomePage from '../HomePage/HomePage'
import DiaryPage from '../DiaryPage/DiaryPage'
import DailyEntryForm from '../DiaryPage/DailyEntryForm'
import DiaryEntryForm1 from '../DiaryPage/DiaryEntryForm1'
import DiaryEntryForm2 from '../DiaryPage/DiaryEntryForm2'
import DiaryEntryForm3 from '../DiaryPage/DiaryEntryForm3'
import ViewEntriesPage from '../DiaryPage/ViewEntryPage'
import NeedAChatPage from '../NeedAChatPage/NeedAChagePage'
import HelpSomeoneOutPage from '../HelpSomeoneOutPage/HelpSomeoneOutPage'
import CheerMeUpPage from '../CheerMeUpPage/CheerMeUpPage'
import CalmZoneSetupPage from '../CalmZonePage/CalmZoneSetupPage'
import CalmZonePage from '../CalmZonePage/CalmZonePage'
import SettingsPage from '../Settings/SettingsPage'

const LoginRouter = () =>{

    return (
        <View style={styles.body}>
            <NativeRouter>
                <Route exact path="/" component={LoginPage}/>
                <Route path="/registerPage1" component={RegistrationPageOne}/>
                <Route path="/registerPage2" component={RegistrationPageTwo}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/diaryPage" component={DiaryPage}/>
                <Route path="/dailyEntryForm"component={DailyEntryForm}/>
                <Route path="/diaryEntryForm1"component={DiaryEntryForm1}/>
                <Route path="/diaryEntryForm2"component={DiaryEntryForm2}/>
                <Route path="/diaryEntryForm3"component={DiaryEntryForm3}/>
                <Route path="/viewEntryPage" component={ViewEntriesPage}/>
                <Route path="/needAChatPage"component={NeedAChatPage}/>
                <Route path="/helpSomeoneOutPage"component={HelpSomeoneOutPage}/>
                <Route path="/cheerMeUpPage" component={CheerMeUpPage}/>
                <Route path="/calmZoneSetupPage"component={CalmZoneSetupPage}/>
                <Route path="/calmZonePage"component={CalmZonePage}/>
                <Route path="/settingsPage"component={SettingsPage}/>
            </NativeRouter>
        </View>
    )
}

const styles= StyleSheet.create({
    body:{
        width:"100%",
        height:'100%',
    }
})

export default LoginRouter