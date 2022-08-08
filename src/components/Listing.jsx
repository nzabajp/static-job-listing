import React from 'react'
import Button from './Button'
import './Listing.css'

function Listing(props) {

    const languagesBtn = (props.languages).map(lang => <Button name={lang} btn={props.btn} />)
    const toolsBtn = (props.tools).map(tool => <Button name={tool} btn={props.btn} />)

    return (
        <div className='job-listing'>
            <img className='company-logo' src={props.logo} alt="1" />
            <p className='company-name'>
                {props.company} <span className='new'>
                    {props.isNew && "NEW!"}
                </span> <span className='featured'>
                    {props.isFeatured && "Featured"}
                </span>
            </p>
            <p className='job-title'>{props.position}</p>
            <p className='fine-print'>{props.postedAt} - {props.contract} - {props.location}</p>
            <hr />
            <div>
                <Button name={props.role} btn={props.btn} />
                <Button name={props.level} btn={props.btn} />
                {languagesBtn}
                {toolsBtn}
            </div>
        </div>
    )
}

export default Listing