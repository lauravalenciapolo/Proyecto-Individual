import React from "react";
import AllPokemons from "../AllPokemons/AllPokemons.jsx";
import Search from "../Search/Search.jsx";
import TypeFilter from "../TypeFilter/TypeFilter";
import Order from "../Order/Order.jsx";
import Pagination from "../Pagination/Pagination.jsx"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { getAllPokemons } from "../../Redux/actions";
import styles from "./Home.module.css"


export function Home (props){

    useEffect(()=>{
        props.getAllPokemons()},[])

        const [actualPage, setActualPage] = useState(1)
        const pokemonsPage= 12
        const page = actualPage*pokemonsPage
        const pokemons=props.allpokemons.slice((page-pokemonsPage),page)

        function pag(number){
            setActualPage(number)
        }

        function next(){
            const numberPage = Math.ceil((props.allpokemons.length)/12);
            if(actualPage !==numberPage){
                setActualPage(actualPage+1) 
            }
        }
        function prev(){
            if(actualPage !==1){
                setActualPage(actualPage-1)
            }
        }

    if (pokemons.length>0){
        return (
            <div className={styles.pokemon}>
                <div className={styles.home1div}>
                <div>
                    <Search
                    setActualPage={setActualPage}/>
                </div>
                <div>
                    <TypeFilter
                    setActualPage={setActualPage}/>                    
                </div>
                <div>
                    <Order
                    setActualPage={setActualPage}/>
                </div>
                <div>
                    <Link to="/pokemons">
                        <button className={styles.button}>Create your pokemon</button>
                    </Link>
                </div>
                </div>
                <div>
                    <Pagination
                    paginado={pag}
                    next={next}
                    prev={prev}
                    actualPage={actualPage}
                    />
                </div>
                <div>
                    <AllPokemons pokemons ={pokemons}/>
                </div>
            </div>
        )
    } else{
        return (
            <div className={styles.img}>
                <img src="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif" width="50%" height="auto" alt="Loading"/>
            </div>
        )
    }
    
   
}

function mapDispatchToProps (dispatch){
    return {
        getAllPokemons: () => dispatch(getAllPokemons()),
    }
}

function mapStateToProps (state){
    return {
        allpokemons: state.allpokemons,
        change: state.change
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Home)