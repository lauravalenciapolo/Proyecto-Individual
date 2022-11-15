import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {getDetailsPokemon} from "../../Redux/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./DetailsPokemon.module.css"


export function DetailsPokemon (props){
  
    const params = useParams()
    //console.log (props)
    useEffect (()=>{
        props.getDetailsPokemon(params.id)},[])
   
    return (
        <div className={styles.flex}>
            <div>
                <Link to={"/home"}>
                    <button className={styles.back}>Back</button>
                </Link>
            </div >
            <div className={styles.pokemondetail}>
            <h1>{props.detailpokemon.name}</h1>
           <img src={props.detailpokemon.img}alt="" />
           <div className={styles.info}>
            
                <p><strong>Type</strong> <br /> {props.detailpokemon.types?.map(e=>(`${e.name} `))}</p>
                <p><strong>Life</strong> {props.detailpokemon.life} </p>
                <p><strong>Height</strong> {props.detailpokemon.height}</p>
                <p><strong>Weight</strong> {props.detailpokemon.weight}</p>
                <p><strong>Attack</strong> {props.detailpokemon.attack}</p>
                <p><strong>Defense</strong> {props.detailpokemon.defense}</p>
                <p><strong>Speed</strong> {props.detailpokemon.speed}</p>
                
           </div>
            </div>
            
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