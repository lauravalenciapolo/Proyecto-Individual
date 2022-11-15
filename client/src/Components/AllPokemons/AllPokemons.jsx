import React from "react";
import Pokemon from "../Pokemon/Pokemon.jsx";
import styles from "./AllPokemon.module.css"

export default function AllPokemons (props){

    return (
        <div className={styles.back}>
            {props.pokemons.map(poke => {
                    return (
                        <div>
                        <Pokemon 
                        key= {poke.id}
                        id= {poke.id}
                        name= {poke.name}
                        img= {poke.img}
                        types= {poke.types.map(el=>(el.name))}
                        />
                    </div>
                    )                 
            })}
        </div>
    )
}
