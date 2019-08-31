import React, {Component} from "react";
import Row from '../Row';
import {PlanetDetails, PlanetList} from '../sw-components';

class PlanetsPage extends Component {

    state = {
        id: 11,
    };

    showItemDetail = (id) => {
        this.setState({
            id
        })
    };

    render() {
        return <Row
            left={<PlanetList showItemDetail={this.showItemDetail}/>}
            right={<PlanetDetails itemId={this.state.id}/>}
        />
    }
}

export {
    PlanetsPage
}