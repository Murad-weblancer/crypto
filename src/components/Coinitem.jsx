import React from 'react'
import './Coins.css'
export const Coinitem = ({item}) => {
  return (
    <div className='coin-row'>
        <p> {item.market_cap_rank} </p>
        <div>
            <img src={item.image} alt="" />
            <p> {item.symbol.toUpperCase()} </p>
        </div>
        <p> ${item.current_price.toLocaleString()} </p>
        <p> {item.price_change_percentage_24h.toFixed(2)}% </p>
        <p className='hide-mobile'> ${item.total_volume.toLocaleString()} </p>
        <p className='hide-mobile'> ${item.market_cap.toLocaleString()} </p>
        
    </div>
  )
}
