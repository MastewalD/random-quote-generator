import classnames from "classnames"
import { ReactComponent as Button } from "../src/assets/icons/button.svg"
import { ReactComponent as Quotation } from "../src/assets/icons/quotation.svg"
import { ReactComponent as Twitter } from "../src/assets/icons/twitter.svg"
import { ReactComponent as Whatsapp } from "../src/assets/icons/whatsapp.svg"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"


function App() {
  const [quotes,setQuotes]=useState<any[]>([])
  const [currentInex,setCurrentIndex]=useState(0)
useEffect(()=>{
 axios.get("http://localhost:8000/quotes").then((res)=>{
  
setQuotes(res.data)
 
 })
 
  
},[])
let currentelement={quote:"Loading…",author:"maste"}
if(currentInex>0){
   currentelement=quotes[currentInex]
}
 



const handldeNext=(e:any)=>{
  setCurrentIndex((prev)=>(prev+1)%quotes.length)
}
const handldePrev=(e:any)=>{
setCurrentIndex((prev)=>(prev-1)%quotes.length)
  }
  console.log(currentInex)
  return (
    <>
      <header>
        <div className="top-strip" />
      </header>
      <div className="container">
        <div className="quotation-box ">
          <Quotation />
          <div className="quote">
            <p>
             {currentelement?.quote}
            </p>
            <span>{currentelement?.author}</span>
          </div>
          <div className="bottom-navigation">
            <div>
              <Button className={classnames("rotate cp")}  onClick={handldePrev} />
              <Button className="cp" onClick={handldeNext} />
            </div>
            <div className="share">
              <span>Share At:</span>
              <Twitter title="Post this quote on twitter!" className="cp" />
              <Whatsapp title="Post this quote on WhatsApp!" className="cp" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-strip" />
    </>
  )
}

export default App
