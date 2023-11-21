import logo from './logo.svg';
import './App.css';
import Navigaion from './component/nav';
import Footer from './component/footer';
import { Routes, Route, Link} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Menu from './component/menu';
import Reservation from './component/reservation';


function App() {
  return (
    <>
    <div className="bdy">
    <Navigaion />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reservation" element={<Reservation/>} />
        </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;
