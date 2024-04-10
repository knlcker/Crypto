import '../../App.scss'
import React from "react";
import { Link } from 'react-router-dom';

const Coin = (props) => {
    return(

<Link to={"/coin/" + props.id}>
    <div className='coinsLineContainer'>
        <div className='coins'> 
            <div className='coinPriceSymbol'>
                <div className='index'>{props.rank}</div>
                <div className='coinName'>{props.name}</div>
                <div className='coinSymbol'>{props.symbol}</div>
            </div>
        </div>
        <div className='coinPricingHour'>
            <div className='coinPrice'> {props.price ? Number(props.price).toFixed(3) : 'Loading...'}</div>
            <div className='coinPrice'>
  {props.price24Hr !== undefined ? (
    <span
      style={{
        color:
          Number(props.price24Hr) < 0
            ? 'red'
            : Number(props.price24Hr) > 0
            ? 'green'
            : 'inherit', // Default color (optional)
      }}
    >
      {Number(props.price24Hr).toFixed(2)}
    </span>
  ) : (
    'Loading...'
  )}
</div>

            <div className='coinPrice'>{props.marketCapUsd ? Number(props.marketCapUsd).toFixed(6) : 'Loading...'}</div>
        </div>
    </div>
</Link>

    )
}

export default Coin