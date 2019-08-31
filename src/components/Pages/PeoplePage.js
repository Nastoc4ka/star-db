import React, {Component} from "react";
import Row from '../Row';
import {PersonDetails, PersonList} from '../sw-components';

class PeoplePage extends Component {

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
            left={<PersonList showItemDetail={this.showItemDetail}/>}
            right={<PersonDetails itemId={this.state.id}/>}
        />
    }
}

export {
    PeoplePage
}