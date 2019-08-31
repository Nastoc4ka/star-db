import React, {Component} from "react";
import Row from '../Row';
import {StarShipDetails, StarShipList} from '../sw-components';

class StarShipsPage extends Component {

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
            left={<StarShipList showItemDetail={this.showItemDetail}/>}
            right={<StarShipDetails itemId={this.state.id}/>}
        />
    }
}

export {
    StarShipsPage
}