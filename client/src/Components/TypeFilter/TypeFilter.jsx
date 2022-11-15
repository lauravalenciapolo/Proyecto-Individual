import { connect } from "react-redux";
import React from "react";
import {filterPokemons, getTypes, filterPokemonsType, filterPokemonsType2} from "../../Redux/actions"
import { useEffect } from "react";
import styles from "./TypeFilter.module.css"

export function TypeFilter (props){

    useEffect (()=>{
        props.getTypes()
    },[])

    function handleOnChangeFilter (e){
        e.preventDefault();        
        props.filterPokemons(e.target.value);
        props.setActualPage(1)
    }

    function handleOnChangeFilterType (e){
        e.preventDefault();
        props.filterPokemonsType(e.target.value);
        props.setActualPage(1)
    }

    function handleOnChangeFilterType2 (e){
        e.preventDefault();
        props.filterPokemonsType2(e.target.value);
        props.setActualPage(1)
    }
    
    

    return (
        <div className={styles.container}>
            <div>
            <p>Filter type1: 
                <select onChange={(e)=> handleOnChangeFilterType(e)}>
                    {props.types.map(type =>
                        <option value={type.name} >{type.name} </option>
                        )}
                </select>
                </p>
            
            <p>Filter type2: 
                <select onChange={(e)=> handleOnChangeFilterType2(e)}>
                    {props.types.map(type =>
                        <option value={type.name} >{type.name} </option>
                        )}
                </select>
            </p>
            </div> 
            <div>
            <p>Filter Pokemons:
                <select onChange={(e)=>{handleOnChangeFilter(e)}}>
                    <option value="all" > All </option>
                    <option value="pokeApi">Poke Api</option>
                    <option value="yoursPokemons">Yours Pokemons</option>
                </select>
                </p>
            </div> 
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        filterPokemons: (filter)=>dispatch(filterPokemons(filter)),
        getTypes: ()=> dispatch (getTypes()),
        filterPokemonsType: (type)=> dispatch(filterPokemonsType(type)),
        filterPokemonsType2: (type)=>dispatch(filterPokemonsType2(type))
    }
}

function mapStateToProps (state){
    return {
        types: state.types
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (TypeFilter)