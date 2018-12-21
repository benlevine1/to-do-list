import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import List from './list';
import AddItem from './add_item'
import 'materialize-css/dist/js/materialize'
import DummyData from '../data/to_do_list'
import {randomString} from '../helpers'

class App extends Component {
    state = {
        list: []
    }
    componentDidMount(){
        this.getListData();
    }
    addItem =(item)=>{
        const {list} = this.state;
        this.setState({
        
        list:[{...item, _id: randomString()}, ...list]
        })
    }
    getListData(){
        //normally where you would call the server to get data
        this.setState({
            list: DummyData
        });
    }
    render(){
        const{list} = this.state
        return(
            <div className = 'container'>
                <h1 className = 'center'>List of Shit To-Do</h1>
                <AddItem add = {this.addItem}/>
                <List toDos = {list}/>
            </div>
            );
        }
}

export default App;
