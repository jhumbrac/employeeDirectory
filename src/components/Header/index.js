import React from "react";
import Navbar from "../Navbar";
import "./style.css";
// import PlanktonKaren from "../SVG/PlanktonKaren";

export default function Header({setPage}) {
    const getPage = e => {
        setPage("/");
    }
    return (
        <header className="App-header clearfix">
            {/* <PlanktonKaren /> */}
            <a href="#home" onClick={getPage}><img src="images/logo_1.png" alt="Chum Bucket logo" /></a>
            <Navbar setPage={setPage} />
        </header>
    )
};