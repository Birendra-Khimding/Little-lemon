import React, {useState} from "react";
import { Link } from "react-router-dom";
import Confirmend from "./confirmed";


function Reservation({availableTimes, setAvailableTimes, updateTimes}){
const [selected, setSelected] = useState(" ");
const [resTime, setResTime] = useState(" ");
const [nGuest, setNGuest] = useState(0);
const [occ, setOcc] = useState(" ");

const isFormValid = ()=>{
  return selected !== ""  && resTime !== ""  &&  occ !== "" && nGuest >= 1;
}



    return(
        <>
<form >
   <label htmlFor="res-date">Choose date</label>
   <input type="date"
    id="res-date"
    value={selected}
    onChange={e =>{setSelected(e.target.value)}}
    required
    />
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time "
   value= {resTime}
   onChange={e=>{setResTime(e.target.value)}}
   required
   >
    <option value=" " disabled> </option>
    {availableTimes.map(times => {
      return  <option key={times} value={times}>{times}</option>
    })}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number"  min="1" max="10" id="guests"
   value={nGuest}
   onChange={e=>{setNGuest(e.target.value)}}
   required
   />
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion"
   value={occ}
   onChange={e=>setOcc(e.target.value)}
   required
   >
      <option value=" " disabled></option>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <Link to="/confirmed">
    <button type="button" disabled={!isFormValid()} aria-label="On click"
    >Make Your Reservation</button>
   </Link>
</form>

</>
    );
}

export default Reservation;