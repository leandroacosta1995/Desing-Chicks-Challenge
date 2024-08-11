import React from 'react'
import './footer.css'
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png'
import discord from '../../assets/discord.png'
import twitter from '../../assets/twitter.png'
import chicks from '../../assets/chicks.jpg'
import estrella from '../../assets/estrellaverde.png'

const Footer = () => {
    return(
        <div className="container_footer">
        <div className="footer">
            <div className="footer_links_div">
            <div className="social_media">
                        <a href=""><img src={facebook} alt="" /></a>
                        <a href=""><img src={instagram} alt="" /></a>
                        <a href=""><img src={twitter} alt="" /></a>
                        <a href=""><img src={discord} alt="" /></a>
                </div>
                </div>
                <hr></hr>
            <div className="la_footer section_padding">    
                <div className="footer_links">
                <div className="footer_links_div">
                    <img src={chicks} alt="" />
                    <p>support@chicksgold.com</p>
                    </div>
                    <div className="footer_links_div">
                        <h4>Chicks Gold</h4>
                        <a href="#"><p>Games</p></a>
                        <a href="#"><p>About Us</p></a>
                        <a href="#"><p>Blog</p></a>
                        <a href="#"><p>Sitemap</p></a>
                    </div>
                    <div className="footer_links_div">
                    <h4>Support</h4>
                        <a href="#"><p>Contact Us</p></a>
                        <a href="#"><p>FAQ</p></a>
                    </div>
                    <div className="footer_links_div">
                    <h4>Legal</h4>
                        <a href="#"><p>Privacy Policy</p></a>
                        <a href="#"><p>Terms of Service</p></a>
                        <a href="#"><p>Copyright Policy</p></a>
                    </div>
                    <div className="footer_links_div">
                    <div className="footer_links_div_start">
                        <img src={estrella} alt="" />
                        <img src={estrella} alt="" />
                        <img src={estrella} alt="" />
                        <img src={estrella} alt="" />
                        <img src={estrella} alt="" />
                        <a href="#"><p>Trustpilot Reviews</p></a>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="footer_copy">
            <div className="footer_copyright">
                <p>Copyright 2017 - 2020 Chicksgold.com All Rights Reserved</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Footer;