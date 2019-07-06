import React, {Component} from "react";
import App_header from '../App_header';
import Random_planet from '../Random_planet';
import BreakAppButton from '../BreakAppButton';
import Row from '../Row';
import Error from '../Error';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import Swapi_service from '../../services/Swapi_service';


import './app.css';
import PeoplePage from "../PeoplePage";

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
        const {getPerson, getShip, getPersonImage, getShipImage} = this.swapiService;
        const personDetails = (
            <ItemDetails id={11}
                         dataItem={getPerson}
                         image={getPersonImage}>
                <Record field='birth_year' label='Birth year'/>
                <Record field='eye_color' label='Eye color'/>
            </ItemDetails>)
        const shipDetails = (
            <ItemDetails id={9}
                         dataItem={getShip}
                         image={getShipImage}>
                <Record field='model' label='Model'/>
                <Record field='length' label='Length'/>
                <Record field='costInCredits' label='Cost'/>
            </ItemDetails>)

        return <div className='app container'>
            <App_header/>
            {randomPlanetShow}
            <button type="button" className="btn btn-success" onClick={this.showRandomPlanet}>
                Update random planet
            </button>
            <BreakAppButton/>
            <PeoplePage/>
            <Row left={personDetails} right={shipDetails}/>
        </div>
    }
}