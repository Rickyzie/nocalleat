import { useState,useEffect } from 'react';
import { useScript } from './useScript';
export default function Map(){
    const  google  = useScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCWe1j3_0YCjWi1oTmsgtmiSVqDv5uD0Cg&v=weekly', 'google')
    useEffect(()=>{
        console.log(google) 
    },[google])
    return (
        <div id="map"></div>
    )
}