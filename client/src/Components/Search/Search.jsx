import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {getPokemonName} from "../../Redux/actions"

export function Search (props){

    const [name, setName] = useState("")

    function handleOnChange (e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleOnSubmit (e){
        e.preventDefault()
        console.log(name)
        props.getPokemonName(name)
    }

    return (
        <div>
              <input type="text"
                    placeholder="Pokemon´s name..."
                    onChange={(e)=> handleOnChange(e)}
                    />
                <button type="submit"
                onClick={(e)=> handleOnSubmit(e)}>Search</button>
        </div>
    )
}



function mapDispatchToProps (dispatch){
    return {
        getPokemonName: (name)=> dispatch(getPokemonName(name))
    }
}


export default connect (null, mapDispatchToProps) (Search)