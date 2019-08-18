import React, {Component} from "react";
import App_header from '../App_header';
import Random_planet from '../Random_planet';
import BreakAppButton from '../BreakAppButton';
import Error from '../Error';
import Swapi_service from '../../services/Swapi_service';
import Row from '../Row';

import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarShipDetails, StarShipList} from '../sw-components';

import {SwapiServiceProvider} from "../Swapi_service_context";
import './app.css';
import ErrorBoundry from "../ErrorBoundry";

export default class App extends Component {

    swapiService = new Swapi_service();

    state = {
        id: 11,
        randomPlanet: true,
        hasError: false
    };

    showRandomPlanet = () => {
        this.setState({
            randomPlanet: !this.state.randomPlanet
        })
    };
    showItemDetail = (id) => {
        this.setState({
            id
        })
    };

    componentDidCatch() {
        this.setState({hasError: true});
    };

    render() {
        if (this.state.hasError) {
            return <Error message={'something gone wrong!'}/>
        }
        const randomPlanetShow = this.state.randomPlanet ? <Random_planet/> : null;
        const personList = <PersonList showItemDetail={this.showItemDetail}/>;
        const personDetails = <PersonDetails itemId={this.state.id}/>;

        return <ErrorBoundry>
            <SwapiServiceProvider value={this.swapiService}>
                <div className='app container'>
                    <App_header/>
                    {randomPlanetShow}
                    <button type="button" className="btn btn-success" onClick={this.showRandomPlanet}>
                        Update random planet
                    </button>
                    <BreakAppButton/>
                    <Row left={personList} right={personDetails}/>
                    <PersonList/>
                    <PlanetList/>
                    <StarShipList/>
                    <PlanetDetails itemId={4}/>
                    <PersonDetails itemId={this.state.id}/>
                    <StarShipDetails itemId={10}/>
                </div>
            </SwapiServiceProvider>
        </ErrorBoundry>

    }
}