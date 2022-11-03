import { connect } from "react-redux";
import React from "react";
import {filterPokemons, getTypes, filterPokemonsType} from "../../Redux/actions"
import { useEffect } from "react";

export function TypeFilter (props){

    useEffect (()=>{
        props.getTypes()
    },[])

    function handleOnChangeFilter (e){
        e.preventDefault();
        props.filterPokemons(e.target.value)
        console.log(e.target.value)
    }

    function handleOnChangeFilterType (e){
        e.preventDefault();
        props.filterPokemonsType(e.target.value)
    }

    return (
        <div>
            <div>
            <p>Filter type: </p>
                <select onChange={(e)=> handleOnChangeFilterType(e)}>
                    {props.types.map(type =>
                        <option value={type.name} >{type.name} </option>
                        )}
                </select>
            </div> 
            <div>
            <p>Filter Pokemons: </p>
                <select onChange={(e)=>{handleOnChangeFilter(e)}}>
                    <option value="all" > All </option>
                    <option value="pokeApi">Poke Api</option>
                    <option value="yoursPokemons">Yours Pokemons</option>
                </select>
            </div> 
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        filterPokemons: (filter)=>dispatch(filterPokemons(filter)),
        getTypes: ()=> dispatch (getTypes()),
        filterPokemonsType: (type)=> dispatch(filterPokemonsType(type))
    }
}

function mapStateToProps (state){
    return {
        types: state.types
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (TypeFilter)