import React, {Component} from 'react';
import Swapi_service from '../../services/Swapi_service';
import Spinner from '../Spinner';
import Error from '../Error';
import BreakAppButton from '../BreakAppButton';
import './itemDetails.css';

export default class ItemDetails extends Component {

    swapiService = new Swapi_service();

    state = {
        item: null,
        loading: true,
        error: false
    }
    updatePerson = () => {
        const {id} = this.props;
        if (!id) {
            return;
        }
        ;
        this.swapiService
            .getPerson(id)
            .then((item) => {
                this.setState({
                    item,
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
        if (this.props.id !== prevProps.id) {
            this.updatePerson();
            this.setState({
                loading: true
            })
        }
    }

    render() {
        const {item, loading, error} = this.state;
        const showingData = !(error || loading);
        const errorMessage = error ? <Error message={'info was destroyed by agents'}/> : null;
        const spiner = loading ? <Spinner/> : null;
        const showItem = showingData ? <ShowItem item={item}/> : null;

        return (
            <div className='person_details jumbotron rounded d-flex'>
                {errorMessage}
                {spiner}
                {showItem}
            </div>
        )
    }
}

const ShowItem = ({item}) => {
    const {id, name, gender, birth_year, eye_color} = item;

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

