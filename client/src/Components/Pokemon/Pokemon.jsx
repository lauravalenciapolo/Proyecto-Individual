import React from "react";
import { Link } from "react-router-dom";
import styles from "./Pokemon.module.css"

export default function Pokemon (props){
    return (
        <div>
             <div className={styles.pokemon}>
            <h1>{props.name}</h1>
            <Link to={`/pokemons/${props.id}`}>
            <img src={`${props.img}`} alt="" />
            </Link>
            <p>Type: {props.types.map(e=>(`${e} `))}  </p>
            </div>
        </div>
       
    )
}