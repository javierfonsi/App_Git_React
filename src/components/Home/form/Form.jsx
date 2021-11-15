import React from 'react'
import "./Form.styles.css"
const Form = ({handlerValue, handlerSubmit}) => {
    return (
        <form onSubmit={(e) => handlerSubmit(e)} className="form-container">
            <input 
                onChange={({target}) => handlerValue(target)}
            type="text" placeholder="Search..." required={true}/>
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default Form
