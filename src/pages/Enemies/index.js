import React, {useState} from "react";
import "./style.css";
import enemies from "../../employees.json";

export default function Enemies() {
    const [enemiesList] = useState({
        enemies
    })
    function sortBy(param) {
        switch (param) {
            case "name":
                console.log(param);
                break;
            case "occupation":
                console.log(param)
                break;
            case "status":
                console.log(param)
                break;
            default:
                break;
        }
    }
    return (
        <div className="enemyList">
            <h1>This is my Enemies page</h1>
            <div className="table">
                <button className="tableBtn" onClick={()=> sortBy('name')}>Name</button>
                <button className="tableBtn" onClick={()=>sortBy('occupation')}>Occupation</button>
                <button className="tableBtn" onClick={()=>sortBy('status')}>Status</button>
                {enemiesList.enemies.map( o => (
                    <div className="enemy">
                        <img 
                            src={o.image}
                            alt={o.name}
                            />
                        <div>
                            <h2>{o.name}</h2>
                            <p>{o.occupation}</p>
                        </div>
                        <h3 className={o.status}>{o.status}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}