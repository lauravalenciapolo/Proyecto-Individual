import React from "react";
import { useEffect, useState } from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {getTypes, postCreatePokemon} from "../../Redux/actions";
import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";

export function validate(input){
    let errors={};
    if(!input.name){
        errors.name = "Insert your pokemon´s name please"
    } else if(!/[A-z]/.test(input.name)){
        errors.name = "The pokemons´s name has to be a string"
    }
    // } else if (props.allpokemons.map(poke=>poke.name.includes(input.name))){
    //     errors.name = `The pokemon ${input.name} allready exist`
    // }

    if(Number(input.life)>100){
        errors.life= "The maximun number is 100"
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
    return errors;
}

export function CreatePokemon (props){ 
    
    const initialState = {
        name:"",
        life:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        image:"",
        types:[]
    }

    const [input, setInput] = useState(initialState);
    const [errors, setErrors] = useState({})
    const history = useHistory();

    useEffect (()=>{
        props.getTypes()
    },[])

    function handleOnChange (e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
          }));
    }

    function handleOnSubmit (e){
        e.preventDefault();
        console.log(input)
        console.log(errors, "ERRORES!!")
        props.postCreatePokemon(input)
        alert ("Pokemon create")
        history.push("/home")
        setInput({
            name:"",
            life:"",
            attack:"",
            defense:"",
            speed:"",
            height:"",
            weight:"",
            image:"",
            types:[]
        })
    }

    function handleOnCheck (e){
        if(e.target.checked){
            setInput({
                ...input,
                types: [...input.types,e.target.value]
            })
        }
        if(!e.target.checked){
            const index = input.types.indexOf(e.target.value)
            input.types.splice(index,1)
            setInput({
                ...input,
                types: input.types
            })
        }
        console.log(input)
    }

    return (
        <div>
            <div>
            <h1>Create your own Pokemon</h1>
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
                <br />
                <div>
                    <label>Image:</label>
                    <input type="text" 
                            name="image"
                            value={input.image}
                            onChange={(e)=> handleOnChange (e)}/>
                </div>
                <br />
                <div>
                    { props.types1.length>0 &&
                    props.types1.map(el=>(
                         <label>
                            <input type="checkbox" value={el.name} name={el.name}
                            onChange={(e)=> handleOnCheck (e)}/>{el.name}
                        </label>)        
                    )}
                {errors.types && (<p>{errors.types}</p>)}   
            {/* REVISAR ESTA VALIDACION QUE LA ESTA VALIDANDO TARDE */}
                </div>
                <div>
                    <input type="submit" 
                    disabled={!input.name? true:false} 
                    />
                </div>
            </form>
            <div>
                <Link to={"/home"}>
                    <button>Cancel</button>
                </Link>
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
        postCreatePokemon: (payload)=>dispatch(postCreatePokemon(payload))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (CreatePokemon)

