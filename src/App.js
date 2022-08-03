import React, {useState,useEffect} from "react";
import axios from "axios";
import { Coinss } from "./components/Coinss";
import { Navbar } from "./components/Navbar";
import  {Routes, Route} from 'react-router-dom'
import { Coin } from "./routes/Coin";

function App() {
  const [coin, setCoin]=useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
  useEffect(()=>{
    axios.get(url).then((res)=>{
      setCoin(res.data)
      console.log(res.data[0]);
    }).catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Coinss coin={coin}/> }/>
      <Route path="/coin" element={<Coin/>}>
        <Route path=":coinId" element={<Coin/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
