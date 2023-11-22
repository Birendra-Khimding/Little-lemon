import React, {useState} from "react";
import { Link } from "react-router-dom";


function Reservation({availableTimes, setAvailableTimes, updateTimes}){
const [selected, setSelected] = useState("");
const [resTime, setResTime] = useState("");
const [nGuest, setNGuest] = useState(1);
const [occ, setOcc] = useState("");

    return(
        <>
<form>
   <label htmlFor="res-date">Choose date</label>
   <input type="date"
    id="res-date" 
    value={selected}
    onChange={e =>{setSelected(e.target.value)}}
    />
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time " 
   value= {resTime}
   onChange={e=>{setResTime(e.target.value)}}
   >
    {availableTimes.map(times => {
      return  <option key={times} value={times}>{times}</option>
    })}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests"
   value={nGuest}
   onChange={e=>{setNGuest(e.target.value)}}
   />
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion"
   value={occ}
   onChange={e=>setOcc(e.target.value)}
   >
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <Link to="/confirmed">
    <button type="button">Make Your Reservation</button>
   </Link>
</form>
<h1>{selected}</h1>
<h1>{resTime}</h1>
<h1>{nGuest}</h1>
<h1>{occ}</h1>
</>
    );
}

export default Reservation;