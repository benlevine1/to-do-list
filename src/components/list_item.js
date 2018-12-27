import React from 'react'
import {Link} from 'react-router-dom'

export default props=>{
    return(
        <li className = 'collection-item row'>
            <div className = 'col s1 right-align'>
                <i onClick = {props.toggle} className = 'checkbox material-icons'>{props.complete ? 'check_box': 'check_box_outline_blank'}</i>
            </div>
            <div className="col s9">
            <Link to = {`/item/${props.itemId}`}>{props.title}</Link>
            </div>
            <div className = 'col s2 center'>
                <button onClick = {props.delete} className = 'btn btn-floating red waves-effect waves-light'>
                    <i className = 'material-icons'>delete_forever</i>
                </button>
            </div>
        </li>
        
    )
}

