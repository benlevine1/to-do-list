import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import '../assets/css/app.css'
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Axios from 'axios';
import List from './list';
import AddItem from './add_item'


//Stuff to do over the weekend, toggle should change from true to false, rerender the list, should be able to distinctly tell whether item 
// is complete, add completed functionality

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=chipotlesucks'

class App extends Component {
    state = {
        list: [],
    }
    componentDidMount(){
        this.getListData();
    }
    addItem = async (item) =>{
        await Axios.post(BASE_URL+API_KEY, item);
        await this.getListData();
    }
    deleteItem = async (id)=>{
        await Axios.delete(`${BASE_URL}/${id + API_KEY}`)
        this.getListData();
    }
    async getListData(){
      try{
        const response = await Axios.get(BASE_URL+API_KEY)
        this.setState({
            list: response.data.todos
        });
      }catch(error){
          console.log('something went wrong in getlistdata', error.message)
        }
    }
    toggleComplete=async(id)=>{
        const response = await Axios.put(`${BASE_URL}/${id + API_KEY}`)
        this.getListData();
        console.log(response)
    }
    render(){
        const{list} = this.state
        return(
            <div className = 'container'>
                
                <Route exact path = "/" render = {()=>{return <List toggle = {this.toggleComplete} delete = {this.deleteItem} toDos = {list}/>}}/>
                
                <Route path = "/add-item" render = {(props)=>{ 
                    return <AddItem {...props} add = {this.addItem}/>
                }}/>
            </div>
            );
        }
}

export default App;

//Old way of handling promises
   //normally where you would call the server to get data
    //    Axios.get(BASE_URL+API_KEY).then((resp)=>{
    //        console.log('Get Todo Response:', resp);
    //     }).catch((error)=>{
    //         console.log('Error', error);
    //     })