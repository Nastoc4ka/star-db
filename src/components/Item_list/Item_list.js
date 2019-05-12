import React, {Component} from 'react';
import Spinner from '../Spinner';
import Swapi_service from '../../services/Swapi_service';
import Error from '../Error';
import './item_list.css';

export default class Item_list extends Component {

    state = {
        items: null,
        error: false

    }
    renderItems = (arr) => {
        if (!arr) {
            return
        }
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <li className='list-group-item' key={id} onClick={() => {
                    this.props.showPersonDetail(id)
                }}>
                    {label}
                </li>
            )
        })
    };
    errorInfo = () => {
        this.setState({
            error: true
        })
    };

    componentDidMount() {

        const {data} = this.props;

        data().then((items) => {
            this.setState({
                items
            })
        })
            .catch(this.errorInfo)
    }

    render() {
        const {items, error} = this.state;
        console.log(items);
        if (error) {
            return <Error message={'secret information'}/>
        }
        const itemsToShow = this.renderItems(items);
        if (!items) {
            return <Spinner/>
        }

        return (
            <ul className='item_list list-group'>{itemsToShow}</ul>
        )
    }
}

