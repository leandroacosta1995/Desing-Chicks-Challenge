import React, { useState } from "react";
import MenuConent from "./menuContent.jsx";
import "./navigation.css";
import chicks from "../../assets/chicks.jpg"
import MenuContent2 from "./menuContent2.jsx";




 const Navigation = () => {
      const [isOpen, setIsOpen] = useState(false)
    return(

      <div className="navbar">
            <div className="navbar-logo"> <img src={chicks}/> </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a className="a" href="#">CURRENCY</a>
                <a className="a" href="#">ITEMS</a>
                <a className="a" href="#">ACCOUNTS</a>
                <a className="a" href="#">SERVICES</a>
                <a className="a" href="#">SWAP</a>
                <a className="a" href="#">SELL</a>
                
            </div>
            <div className={`nav_items2 ${isOpen && "open"}`}>
                <a className="a" href="#"> USD</a>
                <a className="a" href="#"> CART</a>
                <button className="buttonNav">SING IN</button>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>


      /*
         <nav className="navbar">
            <div  className="navbar-logo">
                <img src={chicks} alt="" />
                </div>
               <ul className={active ? 'nav-menu' : 'nav-menu'}>
                     {MenuConent.map((item, index) => {
                           return(
                                 <li key={index}>
                                       <a href={item.url} className={item.cName}>
                                             {item.title}
                                       </a>
                                 </li>
                           )
                     })}
               </ul>
               <div>
                <ul className={active ? 'nav-menu2' : 'nav-menu2'} >
                {MenuContent2.map((item, index) => {
                           return(
                                 <li key={index}>
                                       <a href={item.url} className={item.cName}>
                                             {item.title}
                                       </a>
                                 </li>
                           )
                     })}
                </ul>
               </div>
               <div div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
            </div>
               <button className="buttonNav">SING IN</button>
         </nav>
         */
    )
 }

 
export default Navigation;