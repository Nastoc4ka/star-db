import React, {Component} from "react";
import Person_details from '../Person_details';
import Item_list from '../Item_list';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';
import Swapi_service from '../../services/Swapi_service';

import './peoplePage.css';

export default class PeoplePage extends Component {

    swapiService = new Swapi_service();

    state = {
        item: 5
    }

    showPersonDetail = (id) => {
        this.setState({
            item: id
        })
    }

    render() {
        const itemList = <Item_list showPersonDetail={this.showPersonDetail}
                                    data={this.swapiService.getAllPeople}
                                    renderItem={(i) => (`${i.name} (${i.gender}, ${i.birth_year})`)}/>;
        const personDetails = (
            <ErrorBoundry>
                <Person_details personId={this.state.item}/>
            </ErrorBoundry>
        );
        return (
            <Row left={itemList} right={personDetails}/>
        )
    }
}

