import React, {Component} from 'react';
import Spinner from '../Spinner';
import Error from '../Error';

const With_data = (ViewItemList, getData) => {
    return class extends Component {

        state = {
            data: null,
            error: false

        }
        errorInfo = () => {
            this.setState({
                error: true
            })
        };

        componentDidMount() {

            getData().then((data) => {
                this.setState({
                    data
                })
            })
                .catch(this.errorInfo)
        }

        render() {
            console.log(this.props);
            const {data, error} = this.state;
            console.log(data);
            if (error) {
                return <Error message={'secret information'}/>
            }
            if (!data) {
                return <Spinner/>
            }
            return <ViewItemList {...this.props} data={data}/>
        }
    }
};

export default With_data;
