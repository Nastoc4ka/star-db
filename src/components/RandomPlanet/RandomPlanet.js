import React, {Component} from 'react';
import Swapi_service from '../../services/Swapi_service';
import Spinner from '../Spinner';
import Error from '../Error';
import './random_planet.css';

export default class RandomPlanet extends Component {

    static defaultProps = {
        intervalOfPlanetUpdate: 3000
    };

    swapiService = new Swapi_service();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    };
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15) + 2;

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.errorInfo);
    };
    errorInfo = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    componentDidMount() {
        const {intervalOfPlanetUpdate} = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, intervalOfPlanetUpdate);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {planet, loading, error} = this.state;
        const showingData = !(error || loading);
        const errorMessage = error ? <Error message={'planet is lost'}/> : null;
        const spiner = loading ? <Spinner/> : null;
        const randomPlanetShow = showingData ? <ShowRandomPlanet planet={planet}/> : null;

        return (
            <div className='random-planet jumbotron rounded d-flex'>
                {errorMessage}
                {spiner}
                {randomPlanetShow}
            </div>
        )
    }

}

const ShowRandomPlanet = ({planet}) => {
    const {id, name, population, rotation_period, diameter} = planet;

    return (
        <React.Fragment>
            <img alt='planet' className='planet-image'
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div className='planet-info'>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span>Population</span><span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Rotation period</span><span>{rotation_period}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Diameter</span><span>{diameter}</span>
                    </li>

                </ul>
            </div>
        </React.Fragment>

    )
}

