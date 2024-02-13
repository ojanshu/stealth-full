import "bootstrap/dist/css/bootstrap.min.css"
import Footer from '../Components/Footer'
import Page1 from '../Components/Page1'
import './App.css'
import Page2 from "../Components/Page2"
import Page3 from "../Components/Page3"
import Partner from "../Components/Partner"
import Reach from "../Components/Reach"
import { useState } from "react"
import Log from "../Components/Log"

function App() {

  const[Tab,setTab] =useState("");


  return (
    <>
    <Page1>
      
    </Page1>
    <Page2></Page2>
    <Page3></Page3>
    
      <Log></Log>
    
    <Reach></Reach>
    <Footer></Footer>

    </>
  )
}

export default App
