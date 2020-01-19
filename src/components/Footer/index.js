import React from "react";
import Navbar from "../Navbar";
import Gary from "../SVG/Gary";
import "./style.css";

export default function Footer() {
    return (
        <footer>
            <Navbar />
            <p className="copyright">
                &copy;1973 - {new Date().getYear() + 1900}
            </p>
            <Gary />
        </footer>
    )
}