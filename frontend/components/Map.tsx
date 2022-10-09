import { useEffect, useRef } from 'react';
import { useScript } from './useScript';
import styled from '@emotion/styled';
const MapElement = styled.div`
    width:100%;
    height: 100vh;
`
declare global {
    interface Window {
        initMap: () => void;
    }
}
//zaSyAnndmEQUpb7OFdBpQTAvbOKxLfzm_Us2Q
export default function Map(){
    const mapRef:{current:HTMLElement} = useRef<any>(null);
    let  google  = useScript('https://maps.googleapis.com/maps/api/js?key=AI&v=weekly', 'google');
    useEffect(()=>{
        window.initMap = function(){
            const map = new google.maps.Map(mapRef.current as HTMLElement, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
                });
                console.log(map)
        };
        google.maps?window.initMap():void 0;
    },[google])
    return (
        <MapElement ref={mapRef}></MapElement>
    )
}