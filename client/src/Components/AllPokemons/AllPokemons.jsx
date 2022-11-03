import React from "react";
import Pokemon from "../Pokemon/Pokemon.jsx";
// import {connect} from "react-redux"
// import { useEffect } from "react";
// import {getAllPokemons} from "../../Redux/actions.js"
// import { useState } from "react";

export default function AllPokemons (props){


    // useEffect(()=>{
    //     props.getAllPokemons()},[])

    // useEffect(()=>{

    // })
    // al pasarle como dependencia props.allpokemons, props.copiepokemon se realizan muchos llamados


    return (
        <div>
            {props.pokemons.map(poke => {
                return (
                    <div>
                    <Pokemon 
                    key= {poke.id}
                    id= {poke.id}
                    name= {poke.name}
                    img= {poke.img}
                    // type= {poke.type}
                    types= {poke.types.map(el=>(el.name))}
                    />
                </div>
                )
            })}
        </div>
    )
}

// function mapStateToProps (state){
//     return {
//         allpokemons: state.allpokemons,
//         copiepokemon: state.copiepokemon
//     }
// }

// function mapDispatchToProps (dispatch){
//     return {
//         getAllPokemons: () => dispatch(getAllPokemons())
//     }
// }

// export default connect (mapStateToProps, mapDispatchToProps) (AllPokemons)