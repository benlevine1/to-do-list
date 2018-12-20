import React, {Component} from 'react'
import DummyData from '../data/to_do_list'

console.log(DummyData)
class List extends Component{
    state = {
        list: []
    }
    componentDidMount(){
        this.getListData();
    }
    getListData(){
        //normally where you would call the server to get data
        this.setState({
            list: DummyData
        });
    }
    render(){
        const listElements = this.state.list.map((item, index)=>{
            return (
                <li className = 'collection-item' key = {item._id}>{item.title}</li>
            )
        })
        return(
            <ul className="collection">
                {listElements}
            </ul>
        );
    }
}

export default List