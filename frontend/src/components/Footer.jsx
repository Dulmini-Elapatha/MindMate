import React from "react";
import "./Footer.css";
import facebook from '../assets/Facebook.jpg';
import twitter from '../assets/Twitter.jpg';
import instergram from '../assets/Instagram.jpg';

const Footer = () => {
    return (
        
        <footer>
            <p>Follow Us On Our Social Networks</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/">
                        <img src={facebook} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/">
                        <img src={twitter} alt="twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/">
                        <img src={instergram} alt="instagram" />
                    </a>
                </li>
            </ul>
            <p className="editor">
                <a href="#">&#169; By Dilsha Devindi Perera</a>
            </p>
            <p className="editor">
                Project by Team MindMate
            </p>
            <p className="editor" id="copyright">
                &#169; Copyright 2024 - The Team MindMate
            </p>
        </footer>
    );
};

export default Footer;