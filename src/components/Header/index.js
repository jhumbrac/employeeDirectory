import React from "react";
import Navbar from "../Navbar";
import "./style.css";
import PlanktonKaren from "../SVG/PlanktonKaren";

export default function Header() {
    return (
        <header className="App-header">
            <PlanktonKaren />
            <Navbar />
        </header>
    )
};