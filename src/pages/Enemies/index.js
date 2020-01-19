import React, {useState} from "react";
import "./style.css";
import enemies from "../../employees.json";

export default function Enemies() {
    const [enemiesList, setEnemiesList] = useState({
        enemies
    });
    const sortStatus = () => {
        let filtered = enemies.sort( (a,b)=> {
            if (a.status > b.status ){
                return 1;
            }
            return -1;
        });
        setEnemiesList({filtered});
    };
    const sortName = () => {
        let filtered = enemies.sort( (a,b)=> {
            if (a.name > b.name ){
                return 1;
            }
            return -1;
        });
        setEnemiesList({filtered});
    };
    const sortOccupation = () => {
        let filtered = enemies.sort( (a,b)=> {
            if (a.occupation > b.occupation ){
                return 1;
            }
            return -1;
        });
        setEnemiesList({filtered});
    };
    return (
        <div className="enemyList">
            <h1>This is my Enemies page</h1>
            <div className="table">
                <button className="tableBtn" onClick={()=> sortName()}>Name</button>
                <button className="tableBtn" onClick={()=>sortOccupation()}>Occupation</button>
                <button className="tableBtn" onClick={()=>sortStatus()}>Status</button>
                {enemies.map( o => (
                    <React.Fragment key={o.id}>
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
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}