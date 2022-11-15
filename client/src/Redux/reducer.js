

const initialState = {
    allpokemons:[],
    detailpokemon:[],
    copiepokemon:[], //Para los filtrados para hacer una copia
    types:[],
    pokemonsDB:[],
    change:false
}

export default function reducer (state=initialState, action){
    switch(action.type){
        case "GET_POKEMONS":
            return {
                ...state,
                allpokemons: action.payload,
                copiepokemon: action.payload 
            }
        case "GET_DETAILS_POKEMON":
            return {
                ...state,
                detailpokemon: action.payload
            }
        case "GET_TYPES":
            return {
                ...state,
                types: action.payload
            }
        case "POST_CREATE_POKEMONS":
            return {
                ...state,
                pokemonsDB: [...state.pokemonsDB, {...action.payload}]
            }
        case "GET_POKEMON_NAME":
            return {
                ...state,
                allpokemons:action.payload
            }
        case "SORT_POKEMONS_NAME":
            const copy= state.copiepokemon;
            const order = action.payload === "ascending"?
                copy.sort(function(a,b){
                    if(a.name < b.name) {
                        return -1
                    }
                    if(a.name > b.name){
                        return 1
                    }
                    return 0;
                }) :
                copy.sort(function(a,b){
                    if(a.name < b.name) {
                        return 1
                    }
                    if(a.name > b.name){
                        return -1
                    }
                    return 0;
                })
                const changestate1 = state.change? false:true

            return {
                ...state,
                change:changestate1,
                allpokemons: order
            }

        case "SORT_POKEMONS_ATTACK":
            const copy1 = state.copiepokemon
            const orderattack = action.payload === "ascendingAttack"?
                copy1.sort(function(a,b){
                    if(a.attack < b.attack) {
                        return -1
                    }
                    if(a.attack > b.attack){
                        return 1
                    }
                    return 0;
                }) :
                copy1.sort(function(a,b){
                    if(a.attack < b.attack) {
                        return 1
                    }
                    if(a.attack > b.attack){
                        return -1
                    }
                    return 0;
                })
                const changestate = state.change? false:true
            return {
                ...state,
                change:changestate,
                allpokemons: orderattack
            }
        case "FILTER_POKEMONS":
            if (action.payload === "pokeApi"){
                const allpokemons = state.copiepokemon
                const pokeapi= allpokemons.filter(poke => poke.id > 0 && poke.id < 41 )
                return {
                    ...state,
                    allpokemons: pokeapi
                }
            }
            else if (action.payload === "all"){
                const allpokemons = state.copiepokemon
                return {
                    ...state,
                    allpokemons: allpokemons
                }
            } else{
                const allpokemons = state.copiepokemon
                const pokedb= allpokemons.filter(poke => typeof poke.id !== "number")
                return {
                    ...state,
                    allpokemons: pokedb
                }
            }
        case "FILTER_POKEMONS_TYPE":{
            const allpokemons = state.copiepokemon
            const arrpokemonstypes = [];
            allpokemons.forEach(poke =>{
                //console.log(poke)
                //console.log(poke.types)
                poke.types.forEach(el=>{
                    if (el.name === action.payload){
                        arrpokemonstypes.push(poke)
                    }
                })
            })
            return {
                ...state,
                allpokemons: arrpokemonstypes
            }
        } 
        case "FILTER_POKEMONS_TYPE2":{
            const allpokemons = state.allpokemons
            const arrpokemonstypes = [];
            allpokemons.forEach(poke =>{
                //console.log(poke)
                //console.log(poke.types)
                poke.types.forEach(el=>{
                    if (el.name === action.payload){
                        arrpokemonstypes.push(poke)
                    }
                })
            })
            return {
                ...state,
                allpokemons: arrpokemonstypes
            }
        }

        default: 
        return {...state}
    }

}