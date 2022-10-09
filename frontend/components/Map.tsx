import { useState,useEffect } from 'react';
import { useScript } from './useScript';
declare global {
    interface Window {
        initMap: () => void;
    }
}

export default function Map(){
    let  google  = useScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAnndmEQUpb7OFdBpQTAvbOKxLfzm_Us2Q&v=weekly', 'google');
    useEffect(()=>{
        window.initMap = function(): void {
            const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
                });
        };
        google.maps?window.initMap():void 0;
    },[google])
    return (
        <div style={{height:"100px"}} id="map"></div>
    )
}