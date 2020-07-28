import React from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import SideList from './SideList/SideList';
import OneHeli from './OneHeli/OneHeli';

// let mainChinook = "Chinook";
// let globalChinook = "";

class Main extends React.Component {
    state = {
        data: [],
        mainAircraft: {},
    }
    async componentDidMount(props){
       

        axios.get('http://localhost:8080/list')
        .then(res=>{this.setState({data: res.data})})
        .catch(console.error("An error occured with the list."))

        axios.get('http://localhost:8080/Chinook')
        .then(res=>{this.setState({mainAircraft: res.data})})

        // if(thisThing !== this.props.match.params.id){
        //     if(this.props.match.params.id === undefined){
        //         this.props.match.params.id = thisThing
        //     }
        //     globalVar = this.props.match.params.id
        //     axios.get(`http://localhost:8080/${globalVar}`)
        //     .then(res=>{this.setState({mainAircraft: res.data})})
        // }



    }
    componentDidUpdate(prevProps){
        
        if(this.props.match.params !== prevProps.match.params){
            axios.get(`http://localhost:8080/${this.props.match.params.modelname}`)
            .then(
                res=>{this.setState({mainAircraft: res.data})
            }
            )
            .catch(console.error())
        }
        
        
        // if(mainChinook !== this.props.match.params.id){
        //     if(this.props.match.params.id === undefined){
        //         this.props.match.params.id = mainChinook
        //     }
        //     globalChinook = this.props.match.params.id
        //     axios.get(`http://localhost:8080/${globalChinook}`)
        //     .then(res=>{this.setState({mainAircraft: res.data})})
        // }
        
        // if(this.props === undefined || this.props.location.pathname==="/xyz" && this.props.match.params !== this.props.match.parms){
        //     axios.get('http://localhost:8080/Chinook')
        //     .then(res=>{this.setState({mainAircraft: res.data})})
        // }
        // if(this.componentDidUpdate && this.props.match.path === "/" && this.props !== this.props
        //     // this.props !== prevProps && this.props !== this.props
        //     ){
        //     axios.get('http://localhost:8080/Chinook')
        //     .then(res=>{this.setState({mainAircraft: res.data})})
        // }
        
    }

    render(props) {
    return (
        <div>
            <NavBar/>
            <SideList heliList={this.state.data} classname="SideList"/>
            
            <OneHeli  singleAircraft={this.state.mainAircraft}/>
        </div>
    )}
}
export default withRouter(Main);