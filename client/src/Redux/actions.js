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
    return async function (dispatch){
        const result2 = await axios.get(`http://localhost:3001/pokemons/${id}`)
        return dispatch({
            type: "GET_DETAILS_POKEMON",
            payload: result2.data
        })
    }
}

export function getTypes (){
    return async function(dispatch){
        const result3 = await axios.get("http://localhost:3001/types")
        console.log(result3)
        return dispatch({
            type: "GET_TYPES",
            payload: result3.data
        })
    }
}

export function postCreatePokemon (payload){ // lo que llega del front
    try {
        return async function(dispatch){
            const result4 = await axios.post("http://localhost:3001/pokemons", payload) //asi llega por body 
            return dispatch({
                type: "POST_CREATE_POKEMONS",
                payload: result4.data
            })
        }
    } catch (error) {
        throw new Error ("Your pokemon was not create")
    }
}
//REVISAR ESTA ACCION DEL POST 

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
        payload: order // ascending o descending
    }
}

export function sortPokemonsAttack (attack){
    return {
        type: "SORT_POKEMONS_ATTACK",
        payload: attack // ascending o descending el ataque
    }
}

export function filterPokemons (filter){
    return {
        type: "FILTER_POKEMONS",
        payload: filter // All, Poke Api, Yours Pokemons 
    }
}

export function filterPokemonsType (type){
    return {
        type: "FILTER_POKEMONS_TYPE",
        payload: type
    }
}

export function pagination (payload){
    return {
        type: "PAGINATION",
        payload:payload
    }
}
