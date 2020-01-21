import React from "react";
import "./style.css";
import menu from "../../menu.json";

export default function Menu() {
    return(
        <div class="page">
        <div className="coming-soon">
            <h1>This is my Menu page</h1>
            <p>This page is under construction. Please come back later to see the finished product.</p>
            <h2>In the mean time please click on the "Evil Plans" link to see my homework.</h2>
        </div>
        <section>
            <h2>Chum Bucket</h2>
            <ul>
                {menu.map(o=>(
                    <React.Fragment key={o.id}>
                        <li>{o.name}</li>
                    </React.Fragment>
                ))}
            </ul>
        </section>
        </div>
    )
}