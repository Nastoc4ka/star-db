import React, {Component} from 'react';
import './brakeAppButton.css';

export default class BreakAppButton extends Component {

    state = {
        breakApp: false
    };

    render() {

        if (this.state.breakApp) {
            this.bar.foo = 0;
        }
        ;

        return <button type="button" className="btn btn-outline-danger" onClick={() => {
            this.setState({breakApp: true})
        }}>Break App Button</button>
    }

}
