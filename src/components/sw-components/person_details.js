import React from 'react';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import {With_SwapiService} from '../HOC_helper';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='birth_year' label='Birth year'/>
            <Record field='eye_color' label='Eye color'/>
        </ItemDetails>
    );
};

const mapMathodsToProps = (swapiService) => {
    return {
        dataItem: swapiService.getPerson,
        image: swapiService.getPersonImage
    }
};

export default With_SwapiService(PersonDetails, mapMathodsToProps);
