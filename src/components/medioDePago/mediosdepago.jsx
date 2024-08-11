import React from 'react'
import '../medioDePago/mediosdepago.css'
import visa from '../../assets/visa.png'
import mastercard from '../../assets/mastercard.png'
import america from '../../assets/america.png'
import skrill from '../../assets/skrill.png'
import bitcoin from '../../assets/bitcoin.png'
import ethereum from '../../assets/ethereum.png'

const Mediosdepago = () => {
  return (
    <div className='mediosdePago'>
        <div className="card">
                        <a href=""><img src={visa} alt="" /></a>
                        <a href=""><img src={mastercard} alt="" /></a>
                        <a href=""><img src={america} alt="" /></a>
                        <a href=""><img src={skrill} alt="" /></a>
                </div>
                <div className='coin'> 
                        <a href=""><img src={bitcoin} alt="" /></a>
                        <a href=""><img src={ethereum} alt="" /></a>
                        <a href=""><img src={bitcoin} alt="" /></a>
                </div>
                <div className='text'>
                    <p>
                   and +50 more
                    </p>
                </div>
    </div>
  )
}

export default Mediosdepago;
