import React from 'react'
import ListItem from './list_item'
import NavButton from './nav_button'

const List = (props)=>{
    const listElements = props.toDos.map((item)=>{
        return (
            <ListItem itemId = {item._id} toggle = {()=>props.toggle(item._id)} delete = {() => props.delete(item._id)} key = {item._id} title = {item.title} complete = {item.complete}/>
        )
    })
    return(
        <div>
            
            <h1 className="center">To Do List</h1>
            <NavButton to = '/add-item' text = 'Add Item' icon = 'navigate_next'/>
            <ul className="collection">
                {listElements}
            </ul>
        </div>
    );
}

export default List