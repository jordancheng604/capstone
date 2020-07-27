import React from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import SideList from './SideList/SideList';
import OneHeli from './OneHeli/OneHeli';

class Main extends React.Component {
    state = {
        data: [],
        mainAircraft: {},
    }
    async componentDidMount(props){
       

        axios.get('http://localhost:8080/list')
        .then(res=>{this.setState({data: res.data})})
        .catch(console.error())

        // if(this.props !== "/Chinook" || this.props !== this.props){
        //     axios.get('http://localhost:8080/Chinook')

        //     .then(res=>{this.setState({mainAircraft: res.data})})
        // }
        axios.get('http://localhost:8080/Chinook')
        .then(res=>{this.setState({mainAircraft: res.data})})


    }
    componentDidUpdate(prevProps){
        if(this.props.match.params !== prevProps.match.params){
            axios.get(`http://localhost:8080/${this.props.match.params.modelname}`)
            .then(
                res=>{this.setState({mainAircraft: res.data})
            console.log('L25' + this.props)
            }
            )
            .catch(console.error())
        }if(this.props === undefined || null){
            axios.get('http://localhost:8080/Chinook')
            .then(res=>{this.setState({mainAircraft: res.data})})
        }

        
    }

    render(props) {
        console.log('Main Line:32' + {props})
    return (
        <div>
            <NavBar/>
            <SideList heliList={this.state.data} classname="SideList"/>
            
            <OneHeli  singleAircraft={this.state.mainAircraft}/>
        </div>
    )}
}
export default withRouter(Main);