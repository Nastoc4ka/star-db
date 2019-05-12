import React, {Component} from "react";
import App_header from '../App_header';
import Random_planet from '../Random_planet';
import PeoplePage from '../PeoplePage';
import BreakAppButton from '../BreakAppButton';
import Item_list from '../Item_list';
import Error from '../Error';
import Person_details from '../Person_details';
import Swapi_service from '../../services/Swapi_service';


import './app.css';

export default class App extends Component {

    swapiService = new Swapi_service();

    state = {
        randomPlanet: true,
        hasError: false
    };

    showRandomPlanet = () => {
        this.setState({
            randomPlanet: !this.state.randomPlanet
        })
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <Error message={'something gone wrong!'}/>
        }
        const randomPlanetShow = this.state.randomPlanet ? <Random_planet/> : null;
        return <div className='app container'>
            <App_header/>
            {randomPlanetShow}
            <button type="button" className="btn btn-success" onClick={this.showRandomPlanet}>
                Update random planet
            </button>
            <BreakAppButton/>
            <PeoplePage/>
            <div className='peoplePage row'>
                <div className='col-md-6'>
                    <Item_list showPersonDetail={this.showPersonDetail}
                               data={this.swapiService.getAllShips}
                               renderItem={(item) => item.name}/>
                </div>
                <div className='col-md-6'>
                    <Person_details personId={this.state.item}/>
                </div>
            </div>
            <div className='peoplePage row'>
                <div className='col-md-6'>
                    <Item_list showPersonDetail={this.showPersonDetail}
                               data={this.swapiService.getAllPlanet}
                               renderItem={(item) => item.name}/>
                </div>
                <div className='col-md-6'>
                    <Person_details personId={this.state.item}/>
                </div>
            </div>
        </div>
    }
}