import React from "react";
import "./style.css";

export default function Navbar({setPage}) {
    const getPage = page => {
        setPage(page);
    }
    return (
        <nav>
            <a href="#menu" onClick={()=> getPage("menu")}>Our Menu</a>
            <a href="#about" onClick={()=> getPage("about")}>About Us</a>
            <a href="#enemies" onClick={()=> getPage("enemies")}>Evil Plans</a>
            <a href="#catering" onClick={()=> getPage("catering")}>Catering</a>
            <a href="#contact" onClick={()=> getPage("contact")}>Get in touch</a>
        </nav>
    )
}