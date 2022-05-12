import GaugeChart from "react-gauge-chart";
import React,{useState} from "react";
import {ref,onValue} from "firebase/database";
import { db } from "../lib/firebase";
import { useEffect } from "react";
export default function chart(){

const [float,setdata]=useState(0);
useEffect(() =>{
const starCountRef = ref(db, 'test/');
onValue(starCountRef, (snapshot) => {
  const value =(snapshot.val());
  setdata(value.float);
});
},[]);
return(
  <>
    <div className="App">
      <h1>Air purity</h1>
      <GaugeChart
      id="gauge-chart"
      textColor="#333"
      nrOfLevels={3}
      arcsLength={[0.048828125, 0.1455078125, 0.8037109375]}
      colors={["#5BE12C", "#F5CD19", "#EA4228"]}
      percent={float}
      arcPadding={0.000005}
      text
    />
    <p>your data is {(float*1024).toFixed(1)}</p>
    {(() => {
        if ((float*1024)<=50) {
          return (
            <p id="green">You are in Green zone air quality is Satifactory</p>
          )
        } else if ((float*1024)>50&&(float*1024)<=200) {
          return (
            <p id="yellow">You are in Yellow zone air quality acceptable.However it will effect sensetive people</p>
          )
        } else {
          return (
            <p id ="red">You are in Red zone. Health warning</p>
          )
        }
      })()}
    </div>
    </>
);
}
