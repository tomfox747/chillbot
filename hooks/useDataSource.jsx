import React,{useEffect,useState} from 'react'

import * as firebase from 'firebase';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBnZsDQnQ6rbQHQHzfLwhFVIdxqkhoTn8E",
    authDomain: "chillbot-20991.firebaseapp.com",
    databaseURL: "https://chillbot-20991-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chillbot-20991",
    storageBucket: "chillbot-20991.appspot.com",
    messagingSenderId: "392749758201",
    appId: "1:392749758201:web:872fc1aa49f1d142261428"
};

const useDataSource = () =>{

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }else {
        firebase.app(); // if already initialized, use that one
    }
    const dbh = firebase.firestore();  
    
    const _authenticate = async (username, password) =>{
        let userRef = await dbh.collection("users")
        let users = toDataArray(await userRef.where('username', '==', username).get())
        users = users.filter(user => user.password === password)
        if(users.length === 0){
            return false
        }
        return users[0]
    }

    const _getAllFromCollection = async (collection) =>{
        let responseRef = await dbh.collection(collection);
        let response = await userRef.where('username', '==', 'tomfox747').get();
        response = toDataArray(response)
        return response
    }

    const _createDocument = async (collection, object) =>{
        return await dbh.collection(collection).add(object)
        .then(() => {
            return true
        })
        .catch((error) => {
            alert(error)
            return false
        });
    }

    const toDataArray = (input) =>{
        let output = []
        input.forEach(doc =>{
            output.push(doc.data())
        })
        return output
    }

    return({
        _authenticate,
        _getAllFromCollection,
        _createDocument,
    })
}

export default useDataSource