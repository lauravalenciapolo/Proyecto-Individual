import React from "react";
// import image from "../../public/image/wp7789989.jpg";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"


export default function LandingPage (){
    return (
        <div className={styles.position}>
            <div style={{display:'flex', flexFlow:'column'}}>
            <Link to="/home">
                <img src="image/pokemon2.png" alt="Pokemon" width={"850px"}/>
            </Link>                
            </div>
            
        </div>
        
    )
}