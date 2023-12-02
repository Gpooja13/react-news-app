import React, { useState } from 'react'

const Time=()=> {
const [time,setTime]=useState("");
const [date,setDate]=useState("");

setInterval(()=>{
 const d= new Date().toDateString();
 const t=  new Date().toLocaleTimeString();
 setDate(d);
setTime(t)
},1000);

  return (
    <div className="text-center" style={{fontSize:"2vh"}}>
    <div >{date}</div>
    <div>{time}</div>
    </div>
  )
}

export default Time