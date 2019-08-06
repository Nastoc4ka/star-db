import React from 'react';
import {SwapiServiceConsumer} from '../Swapi_service_context';

const WithSwapiService = (Wrapped, mapMathodsToProps) => {
    return (props) => {
        return (<SwapiServiceConsumer>
            {
                (swapiService) => {
                    const serviceProps = mapMathodsToProps(swapiService);
                    return <Wrapped {...props} {...serviceProps} />

                }
            }
        </SwapiServiceConsumer>);
    }
};

export default WithSwapiService;

