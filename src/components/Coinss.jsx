import React from 'react'
import { Coinitem } from './Coinitem'
import './Coins.css'
import {Link} from 'react-router-dom'
import { Coin } from '../routes/Coin'

export const Coinss = ({coin}) => {
  return (
    <div className='container'>
      <div>

        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>
        </div>

          {coin.map((item,index)=>(
            <Link to={`/coin/${item.id}`} element={<Coin/>} key={index}>            
              <Coinitem item={item}  />
            </Link>
          ))}
       </div>
    </div>
  )
}
