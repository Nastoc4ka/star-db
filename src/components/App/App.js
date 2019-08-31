import React, {Component} from "react";
import AppHeader from '../AppHeader';
import RandomPlanet from '../RandomPlanet';
import BreakAppButton from '../BreakAppButton';
import Error from '../Error';
import Swapi_service from '../../services/Swapi_service';
import {PeoplePage, PlanetsPage, StarShipsPage} from '../Pages';
import {SwapiServiceProvider} from "../Swapi_service_context";
import './app.css';
import ErrorBoundry from "../ErrorBoundry";

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
    };

    componentDidCatch() {
        this.setState({hasError: true});
    };

    render() {
        if (this.state.hasError) {
            return <Error message={'something gone wrong!'}/>
        }
        const randomPlanetShow = this.state.randomPlanet ? <RandomPlanet intervalOfPlanetUpdate={10000}/> : null;

        return <ErrorBoundry>
            <SwapiServiceProvider value={this.swapiService}>
                <div className='app container'>
                    <AppHeader/>
                    {randomPlanetShow}
                    <button type="button" className="btn btn-success" onClick={this.showRandomPlanet}>
                        Update random planet
                    </button>

                    <BreakAppButton/>

                    <PeoplePage/>
                    <StarShipsPage/>
                    <PlanetsPage/>

                </div>
            </SwapiServiceProvider>
        </ErrorBoundry>

    }
}