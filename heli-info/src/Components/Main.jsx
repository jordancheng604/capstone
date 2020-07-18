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
    async componentDidMount(){
       

        axios.get('http://localhost:8080/list')
        .then(res=>{this.setState({data: res.data})})
        .catch(console.error())
    }
    componentDidUpdate(prevProps){
        if(this.props.match.params.id !== prevProps.match.params.id){
            axios.get('http://localhost:8080/:mode_name')
            .then(console.log()
            //     res=>{this.setState({mainAircraft: res})
            // console.log('L25' + this.props)
            // }
            )
            .catch(console.error())
        }
    }

    render(props) {
        console.log('L32' + {props})
    return (
        <div>
            <NavBar/>
            <SideList heliList={this.state.data} classname="SideList"/>
            
            <OneHeli  singleAircraft={this.state.mainAircraft}/>
        </div>
    )}
}
export default withRouter(Main);