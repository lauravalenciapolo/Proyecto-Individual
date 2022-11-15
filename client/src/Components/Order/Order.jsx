import React, { useEffect } from "react";
import { connect } from "react-redux";
import {sortPokemonsName, sortPokemonsAttack} from "../../Redux/actions"
import styles from "./Order.module.css"

export function Order (props){

    function handleOnChangeName (e){
        e.preventDefault();
        props.sortPokemonsName(e.target.value)
        props.setActualPage(1)
    }

    function handleOnChangeAttack (e){
        e.preventDefault();
        props.sortPokemonsAttack(e.target.value)
        props.setActualPage(1)
    }

    return (
        <div className={styles.container}>
            <div>
                <p>Sort name: 
                <select onChange={(e)=> handleOnChangeName(e)}>
                    <option value="ascending" >A-Z </option>
                    <option value="descending">Z-A</option>
                </select> 
                </p>
            </div>
            <div>
            <p>Sort attack: 
            <select onChange={(e)=> handleOnChangeAttack(e)}>
                <option value="ascendingAttack">- Attack </option>
                <option value="descendingAttack">+ Attack</option>
            </select> 
            </p>    
            </div>

        </div>
    )
}

function mapDispatchToProps (dispatch){
    return {
        sortPokemonsName: (order)=> dispatch (sortPokemonsName(order)),
        sortPokemonsAttack: (orderAttack) => dispatch(sortPokemonsAttack(orderAttack))
    }
}

function mapStateToProps(state){
    return {
        change: state.change
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Order)