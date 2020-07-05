import React from "react";
import"./form.css"

const Form=(props)=>{
    return(
        <form className="form" onSubmit={props.gettingWeather}>
            <input className="input" type="text" name="city" placeholder="City"/>
            <button  className="btn" type="submit">Search</button>
        </form>
    );
}
export default Form;