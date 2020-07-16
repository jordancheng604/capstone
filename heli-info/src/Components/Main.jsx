import React from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import { withRouter } from 'react-router-dom';


export default class Main extends React.Component {
    state = {
        data: [],
        mainAircraft: {}
    }
    componentDidMount(){
        axios.get('http://localhost:8080/Chinook')
        .then(res=>{this.setState({mainAircraft: res.data})})
        .catch(console.error())

        axios.get('http://localhost:8080/list')
        .then(res=>{this.setState({data: res.data})})
        .catch(console.error())
    }

    render() {
    return (
        <div>
            <h1>Main</h1>
            <NavBar/>
        </div>
    )}
}
