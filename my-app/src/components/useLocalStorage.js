/*imports*/
import React, {useState, useEffect} from "react";

/*function that gets the name from local storage and returns it*/
function getSavedValue(key,initialValue){
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue){
        return savedValue
    }else{
        return initialValue;
    }
}

/*function that sets the name in local storage once it is entered in the sign up or login page*/
export default function useLocalStorage(key, initialValue){
    let [value, setValue] = useState(() => {
        return getSavedValue(key,initialValue)
    });

    useEffect(() =>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value,key]);

    return [value, setValue];
}