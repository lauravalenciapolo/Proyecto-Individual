import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {connect, useStore} from "react-redux"
import {pagination} from "../../Redux/actions"
import styles from "./Pagination.module.css"

export function Pagination (props){

    //console.log(props,"PROPSSSS")

    const pokemonsPage= 12;
    const numberPage = Math.ceil((props.allpokemons.length)/pokemonsPage);
    // console.log(numberPage, "NUMERO DE PAGINAS")
    // const array =[];

    // for(let i=1; i<= numberPage; i++){
    //     array.push(i)
    // }

    return (
                <div className={styles.pagination}>
                    {/* <p>Page N° {props.actualPage}</p> */}
                    <div className={styles.pagination1}>
                    <button onClick={props.prev}>Prev</button>
                    <button onClick={()=>props.paginado(props.actualPage)}>{props.actualPage}</button>
                    {/* {array.map(el=>(
                        <button onClick={()=>props.paginado(el)} value={el} >{el}</button>
                    ))} */}
                    <button onClick={props.next}>Next</button>
                    </div>
                </div>
            )

}

function mapStateToProps(state){
    return {
        allpokemons: state.allpokemons,
        copiepokemon: state.copiepokemon
    }
}

export default connect (mapStateToProps, null) (Pagination)