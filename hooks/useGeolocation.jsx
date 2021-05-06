import React,{useState, useEffect} from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const useGeoLocation = () =>{
    const [locationPermission, setLocationPersmission] = useState(false)
    const [location, setLocation] = useState({
        latitude:"",
        longitude:""
    })

    useEffect(() =>{
        const initLocation = async () => {
            Permissions.askAsync(Permissions.LOCATION)
            .then((res) =>{
                if(res.status === "granted"){
                    setLocationPersmission(true)
                    watchFunc();
                    //getLocation();
                }else{
                    setLocationPersmission(false)
                }
            })
        }

        const getLocation = async () =>{
            let locationResponse = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude:locationResponse.coords.latitude,
                longitude:locationResponse.coords.longitude
            });
        };
        
        const watchFunc = async () =>{
            const LOCATION_SETTINGS = {
                accuracy: Location.Accuracy.Balanced,
                timeInterval: 1000,
                distanceInterval: 1,
              };
            Location.watchPositionAsync(LOCATION_SETTINGS, (location) => {
                setLocation({
                    latitude:location.coords.latitude,
                    longitude:location.coords.longitude
                });
            });
        }
        
        initLocation();
        //watchLocation();
        
        /*const interval = setInterval(() => {
            if(locationPermission === true){
                getLocation();
            }
        }, 1000);*/
        //return () => clearInterval(interval);
    },[])

    return location;
}

export default useGeoLocation;