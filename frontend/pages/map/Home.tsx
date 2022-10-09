import { Grid } from "@mui/material"
import styled from '@emotion/styled';
import Login from "../Login";
import Map from "../../components/Map";
import { useEffect } from "react";

const Item = styled.div`
    
`

export default function Home() {
    useEffect(()=>{
        let handleMousemove = (event:any) => {
          //console.log(`mouse position: ${event.x}:${event.y}`);
        };
        document.addEventListener('mousemove', handleMousemove);
        return ()=>{
          document.addEventListener('mousemove', handleMousemove);
        }
    })
  
  return (
      <Grid container >
      <Grid item xs={4}>
          <Login/>
      </Grid>
      <Grid  item xs={8}>
          <div
              style={{
                  display: "flex",
              }}
            >
            <div id="dragBar" onDrag={()=>(console.log(1))} onDragEnd={()=>(console.log(1))}>a</div>
            <Map/>
          </div>
      </Grid>
      </Grid>
  )
}