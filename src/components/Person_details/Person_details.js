import React, {Component} from 'react';
import Swapi_service from '../../services/Swapi_service';
import Spinner from '../Spinner';
import Error from '../Error';
import BreakAppButton from '../BreakAppButton';
import './person_details.css';

export default class Person_details extends Component {

    swapiService = new Swapi_service();

    state = {
        person: null,
        loading: true,
        error: false
    }
    updatePerson = () => {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        ;
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                })
            })
            .catch(this.errorInfo)
    };
    errorInfo = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
            this.setState({
                loading: true
            })
        }
    }

    render() {
        const {person, loading, error} = this.state;
        const showingData = !(error || loading);
        const errorMessage = error ? <Error message={'info was destroyed by agents'}/> : null;
        const spiner = loading ? <Spinner/> : null;
        const showPerson = showingData ? <ShowPerson person={person}/> : null;

        return (
            <div className='person_details jumbotron rounded d-flex'>
                {errorMessage}
                {spiner}
                {showPerson}
            </div>
        )
    }
}

const ShowPerson = ({person}) => {
    const {id, name, gender, birth_year, eye_color} = person;

    return (
        <React.Fragment>
            <img className='person-image' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
            <div className='person-info'>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span>Gendar</span><span>{gender}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Birth year</span><span>{birth_year}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Eye color</span><span>{eye_color}</span>
                    </li>
                    <li className='list-group-item'>
                        <BreakAppButton/>
                    </li>
                </ul>
            </div>
        </React.Fragment>

    )
}

