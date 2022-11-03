import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {getDetailsPokemon} from "../../Redux/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export function DetailsPokemon (props){
  
    const params = useParams()
    console.log (params)
    useEffect (()=>{
        props.getDetailsPokemon(params.id)},[])
   
    return (
        <div>
            <div>
                <Link to={"/home"}>
                    <button>Back</button>
                </Link>
            </div>
            
            <h1>id: {props.id}</h1>
            <h1>Name: {props.detailpokemon.name}</h1>
           <img src={props.detailpokemon.img}alt="" />
           <p>Type: {props.detailpokemon.type}</p>
           <p>Life: {props.detailpokemon.life} </p>
           <p>Height: {props.detailpokemon.height}</p>
           <p>Weight{props.detailpokemon.weight}</p>
           <p>Attack: {props.detailpokemon.attack}</p>
           <p>Defense: {props.detailpokemon.defense}</p>
           <p>Speed: {props.detailpokemon.speed}</p>
        </div>
    )
}

function mapStateToProps (state){
    return {
        detailpokemon: state.detailpokemon,
        allpokemons: state.allpokemons
    }
}

function mapDispatchToProps (dispatch){
    return {
        getDetailsPokemon: (id)=> dispatch (getDetailsPokemon(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (DetailsPokemon)