import React from "react";
import Navbar from "../Navbar";
import "./style.css";
// import PlanktonKaren from "../SVG/PlanktonKaren";

export default function Header() {
    return (
        <header className="App-header clearfix">
            {/* <PlanktonKaren /> */}
            <a href="/"><img src="images/logo_1.png" alt="Chum Bucket logo" /></a>
            <Navbar />
        </header>
    )
};