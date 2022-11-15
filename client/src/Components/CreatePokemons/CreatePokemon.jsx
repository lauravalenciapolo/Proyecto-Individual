import React from "react";
import { useEffect, useState } from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {getTypes, postCreatePokemon, getAllPokemons} from "../../Redux/actions";
import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";
import styles from "./CreatePokemon.module.css"


export function CreatePokemon (props){ 

    useEffect (()=>{
        props.getTypes()
    },[])

    useEffect (()=>{
        props.getAllPokemons()
    },[])
    
    const initialState = {
        name:"",
        life:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        img:"",
        types:[]
    }  
    
    const [input, setInput] = useState(initialState);
    const [errors, setErrors] = useState({})

    function handleOnChange (e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        //console.log(input)
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
          }));
    }

    function validate(input){    
        let errors={};
        const exist= props.allpokemons.map(poke=>(poke.name === input.name))
        if(!input.name){
            errors.name = "Insert your pokemon´s name please"
        } else if(!/[A-z]/.test(input.name)){
            errors.name = "The pokemons´s name has to be a string"
        } else if (exist.includes(true)){
            errors.name = `The pokemon ${input.name} allready exist`}
    
        if(Number(input.life)>100){
            errors.life= "The maximun number allowed is 100"
        }
        if(Number(input.attack)>100){
            errors.attack= "The maximun number allowed is 100"
        }
        if(Number(input.defense)>100){
            errors.defense= "The maximun number allowed is 100"
        }
        if(Number(input.speed)>100){
            errors.speed= "The maximun number allowed is 100"
        }
        if(Number(input.height)>100){
            errors.height= "The maximun number allowed is 100"
        }
        if(input.types.length>2){
            console.log(input.types)
            errors.types= "Your Pokemon can only have up to 2 types"
        }
        if(Number(input.weight)>100){
            errors.weight= "The maximun number allowed is 100"
        }
        // console.log(errors)
        return errors;
    }


    const history = useHistory();
 

    function handleOnSubmit (e){
        e.preventDefault();
            console.log(input)
            props.postCreatePokemon(input)
            alert ("Pokemon create")
            history.push("/home")
            setInput({
                initialState
            })      
    }

    function handleOnSelect (e) {
        if(input.types.length<2){
            if(!input.types.includes(e.target.value)){
                setInput({
                    ...input,
                    types: [...input.types, e.target.value]
                })
                }
        } 
    }

    function handleOnClear (e) {
        e.preventDefault(e)
        setInput({
            ...input,
            types: []
        })
    }

    // PARA EL CHECKBOX!!
    // function handleOnCheck (e){
    //         if(e.target.checked){
    //                 setInput({
    //                     ...input,
    //                     types: [...input.types,e.target.value]
    //                 })               
    //         }
    //         if(!e.target.checked){
    //             const index = input.types.indexOf(e.target.value)
    //             input.types.splice(index,1)
    //             // e.target.name.checked = true
    //             setInput({
    //                 ...input,
    //                 types: input.types
    //             })
    //         }        
    //     console.log(input)
    // }
    
    // function handleClear (e){
    //     e.preventDefault()
    //     setInput({
    //         ...input,
    //         types:[]
    //     })
    // }


    return (
        <div className={styles.flex}>
            <div className={styles.form}>
            <div>
            <h1>Create your Pokemon</h1>
            </div>
            <form onSubmit={(e)=>handleOnSubmit(e)}>
                
                <div>
                    <label>Pokemon´s name*:</label>
                    <input type="text"
                            name="name"
                            value={input.name}
                            onChange={(e)=> handleOnChange (e)}/>
                            {errors.name && (<p>{errors.name}</p>)}
                </div>
                <br />
                <div className={styles.flex1}>
                <div>
                    <label>Life:</label>
                    <input type="number"
                            name="life"
                            value={input.life}
                            onChange={(e)=> handleOnChange (e)}/>
                            {errors.life && (<p>{errors.life}</p>)} 
                </div>
                <div>
                    <label>Attack:</label>
                    <input type="number" 
                            name="attack"
                            value={input.attack}
                            onChange={(e)=> handleOnChange (e)}/>
                            {errors.attack && (<p>{errors.attack}</p>)}
                </div>
                <div>
                    <label>Defense:</label>
                    <input type="number" 
                            name="defense"
                            value={input.defense}
                            onChange={(e)=> handleOnChange (e)}/> 
                            {errors.defense && (<p>{errors.defense}</p>)} 
                </div>
                </div>

                <div className={styles.flex1}>
                <div>
                    <label>Speed:</label>
                    <input type="number"
                            name="speed"
                            value={input.speed}
                            onChange={(e)=> handleOnChange (e)}/>
                            {errors.speed && (<p>{errors.speed}</p>)}
                </div>
                <div>
                    <label>Height:</label>
                    <input type="number" 
                            name="height"
                            value={input.height}
                            onChange={(e)=> handleOnChange (e)}/> 
                            {errors.height && (<p>{errors.height}</p>)}
                </div>
                <div>
                    <label>Weight:</label>
                    <input type="number" 
                            name="weight"
                            value={input.weight}
                            onChange={(e)=> handleOnChange (e)}/>
                            {errors.weight && (<p>{errors.weight}</p>)}
                </div>
                </div>
                <br />
                <div>
                    <label>Image:</label>
                    <input type="text" 
                            name="img"
                            value={input.img}
                            onChange={(e)=> handleOnChange (e)}/>
                </div>
                <br />
                <div className={styles.flex1}>
                <div>
                    <label>Types: 
                    <select onChange={e => handleOnSelect(e)}>
                        {props.types1.map(e => {
                        return (
                            <option value={e.name} name={e.name}>{e.name}</option>  
                        )
                    })}
                    </select></label>
                </div>
                <div>
                    <p>Your Pokemon is type: {input.types.map( e => (`${e} `))}</p>
                    <button onClick={e => handleOnClear(e)}>Clear types</button>
                </div>
                </div>
                
                {/* <div> PARA EL CHECKBOX 
                    { props.types1.length>0 &&
                    props.types1.map(el=>(
                         <label>
                            <input type="checkbox" value={el.name} name={el.name}
                            onChange={(e)=> handleOnCheck (e)}
                            disabled={input.types.length>=2? true:false}
                            />{el.name}
                        </label>)        
                    )}
                {errors.types && (<p>{errors.types}</p>)}
                <button onClick={e=>handleClear(e)}>Clear types</button>
                </div> */}
                <div className={styles.flex2}>
                <div className={styles.submit}>
                    <button type="submit" value={"Send"}
                    disabled={Object.entries(errors).length===0? false:true}>Send</button>
                </div>
                <Link to={"/home"}>
                    <button>Cancel</button>
                </Link>
                </div>
                
            </form>
            
            
        </div>
        </div>
        
    )
}

function mapStateToProps(state){
    return {
        types1: state.types,
        allpokemons: state.allpokemons
    }
}

function mapDispatchToProps(dispatch){
    return {
        getTypes: ()=> dispatch(getTypes()),
        postCreatePokemon: (payload)=>dispatch(postCreatePokemon(payload)),
        getAllPokemons:()=>dispatch(getAllPokemons())
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (CreatePokemon)

