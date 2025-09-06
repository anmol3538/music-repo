import './App.css'
import Songs from './components/Song'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Artist from './components/Artist';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Songs/>}/>
        <Route path="/songs" element = {<Songs/>}/>
        <Route path="/artists" element = {<Artist/>}/>
      </Routes>
    </Router>
  )
}

export default App