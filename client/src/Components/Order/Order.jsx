import React from "react";
import { connect } from "react-redux";
import {sortPokemonsName, sortPokemonsAttack} from "../../Redux/actions"

export function Order (props){

    function handleOnChangeName (e){
        e.preventDefault();
        props.sortPokemonsName(e.target.value)
    }

    function handleOnChangeAttack (e){
        e.preventDefault();
        props.sortPokemonsAttack(e.target.value)
    }

    return (
        <div>
            <div>
                <p>Sort name: </p>
                <select onChange={(e)=> handleOnChangeName(e)}>
                    <option value="ascending" >A-Z </option>
                    <option value="descending">Z-A</option>
                </select> 
            </div>
            <div>
            <p>Sort attack: </p>
            <select onChange={(e)=> handleOnChangeAttack(e)}>
                <option value="ascendingAttack">0 - 100 </option>
                <option value="descendingAttack">100 - 0</option>
            </select> 
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