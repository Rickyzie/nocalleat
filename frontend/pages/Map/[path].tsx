import { Grid, Button } from "@mui/material"
import styled from '@emotion/styled';
import Login from "../Login";
import Map from "../../components/Map";
import { useEffect, useRef, useState } from "react";
import { DefaultTheme } from "../../theme/themeOptions";
import { useRouter } from "next/router";
import SignUp from "../SignUp";
import Link from 'next/link';
import Entry from "../Entry";

const DragBar = styled.div`
    display: flex;
    align-items: center;
    letter-spacing: 0px;
    text-indent:-2px;
    user-select: none;
    height: 100vh; 
    background-color: ${DefaultTheme.palette.primary.dark};
    cursor: e-resize;
`
export default function Home() {
    const [gridNum, setGridNum] = useState(4);
    const [page, setPage] = useState(1);
    const router = useRouter()
    const pathObject = {
        Login: <Login />,
        SignUp: <SignUp />,
        Entry: <Entry />
        };
    const path = typeof router.query.path === "string" && pathObject[router.query.path as keyof typeof pathObject]?router.query.path:"Entry";
    
    
    const dragBarRef = useRef<HTMLDivElement>(null);

    // handle dragbar resizable 
    useEffect(()=>{
        const handleMousemove = (event:any)=>{
            setGridNum(Math.round(event.clientX/window.innerWidth*12));
        };
        const handleMouseup = ()=>{
            document.removeEventListener('mousemove',handleMousemove);
        };
        const DragBarOnMouseDown = ()=>{
            document.addEventListener('mousemove', handleMousemove);
        };
        dragBarRef.current?.addEventListener("mousedown", DragBarOnMouseDown);
        document.addEventListener('mouseup', handleMouseup);
        return ()=>{
            dragBarRef.current?.removeEventListener("mousedown", DragBarOnMouseDown);
            document.removeEventListener('mouseup', handleMouseup);
            
        }
    },[])

    return (
            <Grid container >
            <Grid item xs={gridNum}>
                {pathObject[path as keyof typeof pathObject]}
            </Grid>
            <Grid  item xs={12 - gridNum}>
                <div
                    style={{
                        display: "flex",
                    }}
                    >
                    <DragBar ref={dragBarRef}>II</DragBar>
                    <Map/>
                </div>
            </Grid>
            </Grid>
    )
}