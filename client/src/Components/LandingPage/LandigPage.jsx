import React from "react";
// import image from "../../public/image/wp7789989.jpg";
import { Link } from "react-router-dom";

export default function LandingPage (){
    return (
        <div>
            <img src="https://external-preview.redd.it/NXrR_qnMRHrwUoE8pbeiX26fq4mNctFsmdEghRVApSQ.jpg?auto=webp&s=b18e1b0df84f417036d4e1ac0affb6245a071ebf" alt="Pokemons" />
            <Link to="/home">
            <button>GO!</button>
            </Link>
        </div>
    )
}