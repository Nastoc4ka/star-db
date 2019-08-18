import React, {Component} from 'react';
import Swapi_service from '../../services/Swapi_service';
import Spinner from '../Spinner';
import Error from '../Error';
import './itemDetails.css';

const Record = ({item, field, label}) => {
    return (
        <li className='list-group-item'>
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    swapiService = new Swapi_service();

    state = {
        item: null,
        image: null,
        loading: true,
        error: false
    }

    updateItem = () => {
        const {itemId, dataItem, image} = this.props;
        const imageURL = image(itemId);
        dataItem(itemId).then((item) => {
            this.setState({
                item,
                image: imageURL,
                loading: false
            })
        }).catch(this.errorInfo)
    };

    errorInfo = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
            this.setState({
                loading: true
            })
        }
    }

    render() {
        const {item, image, loading, error} = this.state;
        const showingData = !(error || loading);
        const errorMessage = error ? <Error message={'info was destroyed by agents'}/> : null;
        const spiner = loading ? <Spinner/> : null;
        const showItem = showingData ?
            <ShowItem item={item} image={image} recordChildren={this.props.children}/> : null;

        return (
            <div className='person_details jumbotron rounded d-flex'>
                {errorMessage}
                {spiner}
                {showItem}
            </div>
        )
    }
}

const ShowItem = ({item, image, recordChildren}) => {
    const {name} = item;

    return (
        <React.Fragment>
            <img className='person-image' src={image}/>
            <div className='person-info'>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    {
                        React.Children.map(recordChildren, (child) => React.cloneElement(child, {item}))
                    }
                </ul>
            </div>
        </React.Fragment>

    )
};

