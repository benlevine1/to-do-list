import React, {Component} from 'react';
import Axios from 'axios';
import {BASE_URL, API_KEY} from '../config/api'

class ViewItem extends Component{
    async componentDidMount(){
        const response = await Axios.get(`${BASE_URL}/${this.props.match.params.item_id}${API_KEY}`);
        console.log('get item response', response);
    }
    render(){
        
        return(
            <div>
                <h1 className="center">View Item</h1>
            </div>
        )
    }
}

export default ViewItem;