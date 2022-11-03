import React from "react";
import AllPokemons from "../AllPokemons/AllPokemons.jsx";
import Search from "../Search/Search.jsx";
import TypeFilter from "../TypeFilter/TypeFilter";
import Order from "../Order/Order.jsx";
import Pagination from "../Pagination/Pagination.jsx"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPokemons } from "../../Redux/actions";



export function Home (props){

    useEffect(()=>{
        props.getAllPokemons()},[])

    if (props.allpokemons.length>0){
        return (
            <div>
                <div>
                    <Search/>
                </div>
                <div>
                    <TypeFilter/>
                    <Order/>
                </div>
                <div>
                    <Link to="/pokemons">
                        <button>Create your pokemon</button>
                    </Link>
                </div>
                <div>
                    <AllPokemons pokemons ={props.allpokemons}/>
                </div>
                <div>
                    <Pagination/>
                </div>
            </div>
        )
    } else{
        return (
            <div>             
                <img src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif" alt="Loading" />
            </div>
        )
    }
    
   
}

function mapDispatchToProps (dispatch){
    return {
        getAllPokemons: () => dispatch(getAllPokemons())
    }
}

function mapStateToProps (state){
    return {
        allpokemons: state.allpokemons,
        change: state.change
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Home)