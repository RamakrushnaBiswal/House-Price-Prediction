import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import { Login,Signup } from './Auth';
import Form from './Components/Form';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/started' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;