import React from 'react'
import './Contact.css'
import Crypto from '../assets/trade.png'
const Contact = () => {
  return (
    <div className='signup'>
    <div className='container'>
        {/* left */}
        <div className='left'>
            <img src={Crypto} alt='' />
        </div>

        {/* right */}
        <div className='right'>
            <h2>Earn passive income with crypto.</h2>
            <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
            <div className='input-container'>
                <input type='email' placeholder='Enter your email' />
                <button className='btn'>Learn More</button>
            </div>
        </div>

    </div>
</div>
  )
}

export default Contact