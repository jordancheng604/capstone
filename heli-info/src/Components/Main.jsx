import React from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import SideList from './SideList/SideList';
import OneHeli from './OneHeli/OneHeli';

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
            <SideList heliList={this.state.data}/>
            <OneHeli/>
            <h3>Main Component AKA HOME PAGE</h3>
            <img src={'https://images.unsplash.com/photo-1562361226-6a0a40ef3718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'}/>
        </div>
    )}
}
