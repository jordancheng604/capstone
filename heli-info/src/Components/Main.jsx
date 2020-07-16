import React from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import { withRouter } from 'react-router-dom';
import './Main.scss';

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
            <NavBar/>
            <h1>Main Component AKA HOME PAGE</h1>
            <img src={'https://images.unsplash.com/photo-1570864348100-48d03e7f27b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80'}/>
        </div>
    )}
}
