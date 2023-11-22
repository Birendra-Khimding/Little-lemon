
import './App.css';
import Navigaion from './component/nav';
import Footer from './component/footer';
import { Routes, Route, Link} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Menu from './component/menu';
import Reservation from './component/reservation';
import React, {Reducer, useReducer} from 'react';
import Confirmend from './component/confirmed';



function reducer(state, action) {
switch(action.type){
  case "update_times":
   return initializeTimes();
   default:
   return state;
}
}

export const initializeTimes = () =>{
  return ["10:00 Am", "12:00 Am", "2:00 Pm"];
}

export const updateTimes = (dispatch, selectedDate) => {
  dispatch({type: "update_times", payload: {selectedDate}})
}





function App() {
const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());



  return (
    <>
    <div className="bdy">
    <Navigaion />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reservation" element={<Reservation availableTimes={availableTimes} 
        setAvailableTimes={(newTimes)=>
        dispatch({type: "update_times", payload: {newTimes}})
        }/>}
        updateTimes = {(selectedDate)=> updateTimes(dispatch,selectedDate)}
        />
        <Route path="/confirmed" element={<Confirmend />} />
        </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;
