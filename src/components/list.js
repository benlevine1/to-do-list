import React from 'react'
import ListItem from './list_item'

const List = (props)=>{
    const listElements = props.toDos.map((item)=>{
        debugger;
        console.group(item)
        return (
            <ListItem toggle = {()=>props.toggle(item._id)} delete = {() => props.delete(item._id)} key = {item._id} title = {item.title} complete = {item.complete}/>
        )
    })
    return(
        <ul className="collection">
            {listElements}
        </ul>
    );
}

export default List