import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/login"
import Signup from "../pages/Signup"


export default function Allrouts(){
    return(<>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    </>)
}