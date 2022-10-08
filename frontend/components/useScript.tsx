import { useState, useEffect } from 'react'

export const useScript = (url:string , name:string) => {

    const [lib, setLib] = useState({});

    useEffect(() => {
        const script = document.createElement('script') as HTMLScriptElement;

        script.src = url;
        script.async = true;
        script.onload = () => setLib(window[name]);

        document.body.appendChild(script);

        return () => {
        document.body.removeChild(script);
        }
    }, [url])

    return lib;

}