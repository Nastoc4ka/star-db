import React, {Component} from "react";
import Person_details from '../Person_details';
import Item_list from '../Item_list';
import Error from '../Error';
import Swapi_service from '../../services/Swapi_service';

import './peoplePage.css';

export default class PeoplePage extends Component {

    swapiService = new Swapi_service();

    state = {
        item: 5,
        hasError: false
    }

    showPersonDetail = (id) => {
        this.setState({
            item: id
        })
    }

    componentDidCatch(error, info) {
        console.log('componentDidCatch()');
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError) {
            return <Error message={'something gone wrong with people page'}/>
        }

        const itemList = <Item_list showPersonDetail={this.showPersonDetail}
                                    data={this.swapiService.getAllPeople}
                                    renderItem={({name, gender, birth_year}) => (`${name} (${gender}, ${birth_year})`)}/>;
        const personDetails = <Person_details personId={this.state.item}/>;
        return (
            <Row left={itemList} right={personDetails}/>
        )
    }
}
const Row = ({left, right}) => {
    return (<div className='peoplePage row'>
        <div className='col-md-6'>
            {left}
        </div>
        <div className='col-md-6'>
            {right}
        </div>
    </div>)
}

