import './App.css'
import Songs from './components/Song'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Artist from './components/Artist';
import Login from './components/Login';
import Admin from './components/Admin';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/songs" element = {<Songs/>}/>
        <Route path="/artists" element = {<Artist/>}/>
        <Route path="/admin" element = {<Admin/>}/>
      </Routes>
    </Router>
  )
}

export default App