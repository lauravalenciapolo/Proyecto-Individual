import React from "react";
import { Link } from "react-router-dom";

export default function Pokemon (props){
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <Link to={`/pokemons/${props.id}`}>
            <img src={`${props.img}`} alt="" />
            </Link>
            <p>Type: {props.types}</p>
        </div>
    )
}