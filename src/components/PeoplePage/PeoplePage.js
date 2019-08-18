import React, {Component} from "react";
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import Item_list from '../Item_list';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';
import Swapi_service from '../../services/Swapi_service';

import './peoplePage.css';

export default class PeoplePage extends Component {

    swapiService = new Swapi_service();

    state = {
        item: 5
    };

    showItemDetail = (id) => {
        this.setState({
            item: id
        })
    };

    render() {
        const itemList = <Item_list showItemDetail={this.showItemDetail}
                                    getData={this.swapiService.getAllPeople}
                                    renderItem={(i) => i.name}/>;
        const personDetails = (
            <ErrorBoundry>
                <ItemDetails id={this.state.item}
                             dataItem={this.swapiService.getPerson}
                             image={this.swapiService.getPersonImage}>
                    <Record field='birth_year' label='Birth year'/>
                    <Record field='eye_color' label='Eye color'/>
                </ItemDetails>
            </ErrorBoundry>
        );
        return (
            <Row left={itemList}
                 right={personDetails}/>
        )
    }
}

