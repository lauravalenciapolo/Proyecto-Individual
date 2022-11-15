import axios from "axios";

export function getAllPokemons (){
    try {
        return async function (dispatch) {
            const result = await axios.get("http://localhost:3001/pokemons")
            return dispatch({
                        type: "GET_POKEMONS",
                        payload: result.data
                    })
        }
    } catch (error) {
        throw new Error (error.message)
    }
    
}

export function getDetailsPokemon (id){
    try {
        return async function (dispatch){
            const result2 = await axios.get(`http://localhost:3001/pokemons/${id}`)
            return dispatch({
                type: "GET_DETAILS_POKEMON",
                payload: result2.data
            })
        }
    } catch (error) {
        throw new Error (error.message)
    }
    
}

export function getTypes (){
    try {
        return async function(dispatch){
            const result3 = await axios.get("http://localhost:3001/types")
            return dispatch({
                type: "GET_TYPES",
                payload: result3.data
            })
        }
    } catch (error) {
        throw new Error (error.message)
    }
   
}

export function postCreatePokemon (payload){ 
    try {
        return async function(dispatch){
            const result4 = await axios.post("http://localhost:3001/pokemons",payload)
            return dispatch({
                type: "POST_CREATE_POKEMONS",
                payload: result4.data
            })
        }
    } catch (error) {
        throw new Error ("Your pokemon was not create")
    }
}

export function getPokemonName (name){
    try {
        return async function (dispatch){
            const result5 = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            return dispatch({
                type: "GET_POKEMON_NAME",
                payload:result5.data
            })
        } 
    } catch (error) {
       throw new Error (error.message) 
    }
    
}

export function sortPokemonsName (order){
    return {
        type: "SORT_POKEMONS_NAME",
        payload: order 
    }
}

export function sortPokemonsAttack (attack){
    return {
        type: "SORT_POKEMONS_ATTACK",
        payload: attack 
    }
}

export function filterPokemons (filter){
    return {
        type: "FILTER_POKEMONS",
        payload: filter
    }
}

export function filterPokemonsType (type){
    return {
        type: "FILTER_POKEMONS_TYPE",
        payload: type
    }
}

export function filterPokemonsType2(type){
    return {
        type: "FILTER_POKEMONS_TYPE2",
        payload: type
    }
}