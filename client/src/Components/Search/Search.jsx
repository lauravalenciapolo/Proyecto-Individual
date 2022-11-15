import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {getPokemonName, getAllPokemons} from "../../Redux/actions"
import style from "./Search.module.css"

export function Search (props){

    const [name, setName] = useState("")

    function handleOnChange (e){
        e.preventDefault()
        setName(e.target.value)
        //console.log(name)
    }

    function handleOnSubmit (e){
        e.preventDefault()
        //console.log(name)
        setName("")
        props.setActualPage(1)
        props.getPokemonName(name);
    }

    function handleHome(e){
        e.preventDefault()
        props.getAllPokemons()
    }

    return (
        <div className={style.search}>
              <input type="text"
                    placeholder="Pokemon´s name..."
                    onChange={(e)=> handleOnChange(e)}
                    />
                <button type="submit"
                onClick={(e)=> handleOnSubmit(e)}>Search</button>
                
                <button onClick={(e)=> handleHome(e)}>Home</button>
                
        </div>
    )
}



function mapDispatchToProps (dispatch){
    return {
        getPokemonName: (name)=> dispatch(getPokemonName(name)),
        getAllPokemons: ()=> dispatch(getAllPokemons())
    }
}


export default connect (null, mapDispatchToProps) (Search)