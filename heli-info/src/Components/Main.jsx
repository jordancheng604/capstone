import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


export default class Main extends React.Component {
    state = {
        data: [],
    }
    componentDidMount(){
        axios.get('http://localhost:8080/Chinook')
        .then(res=>{this.setState({data: res.data})})
        .catch(console.error())
    }
    
    render() {
    return (
        <div>
            
        </div>
    )}
}
