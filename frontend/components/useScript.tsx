import { useState, useEffect } from 'react'
declare global {
    interface Window {
        [name: string]: any;
    }
}
export const useScript = (url:string , name:string) => {

    const [lib, setLib] = useState<any>({});

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