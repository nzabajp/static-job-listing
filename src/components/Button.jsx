import React from 'react'

function Button(props) {

    return <button className='category-btn' onClick={props.btn}>{props.name}</button>
}

export default Button