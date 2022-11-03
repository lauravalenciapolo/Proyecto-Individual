import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {connect} from "react-redux"
import {pagination} from "../../Redux/actions"

export function Pagination (props){

    const pokemonsPage= 12;
    const numberPage = Math.ceil((props.copiepokemon.length)/pokemonsPage);
    console.log(numberPage, "NUMERO DE PAGINAS")
    const array =[];

    for(let i=1; i<= numberPage; i++){
        array.push(i)
    }

    function handleOnClick (e){
        e.preventDefault()
        props.pagination(Number(e.target.value))
    }

    return (
                <div>
                    {array.map(el=>(
                        <button onClick={(e)=>handleOnClick(e)} value={el}>{el}</button>
                    ))}
        
                </div>
            )

}

function mapStateToProps(state){
    return {
        allpokemons: state.allpokemons,
        copiepokemon: state.copiepokemon
    }
}

function mapDispatchToProps (dispatch){
    return {
        pagination: (e)=>dispatch(pagination(e))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Pagination)