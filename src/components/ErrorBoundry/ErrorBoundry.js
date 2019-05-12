import React, {Component} from "react";
import Error from '../Error';
import './errorBoundry.css';

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <Error message={'something gone wrong with people page'}/>
        }
        return this.props.children
    }
}

