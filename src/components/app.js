import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import '../assets/css/app.css'
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Axios from 'axios';
import List from './list';
import AddItem from './add_item'
import ViewItem from './view_item'
import NotFound from './404'
import {BASE_URL, API_KEY} from '../config/api'


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
                <Switch path = '/'>
                    <Route exact path = "/" render = {()=>{
                        return <List toggle = {this.toggleComplete} delete = {this.deleteItem} toDos = {list}/>
                    }}/>
                    
                    <Route path = "/add-item" render = {(props)=>{ 
                        return <AddItem {...props} add = {this.addItem}/>
                    }}/>

                    <Route path = '/item/:item_id' component = {ViewItem}/>

                    <Route component = {NotFound}/>
                </Switch>
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