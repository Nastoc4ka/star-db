import React from 'react';
import Item_list from '../Item_list';
import {With_data, With_SwapiService} from '../HOC_helper';

const withChildrenFunc = (Wraped, fn) => {
    return (props) => {
        return <Wraped {...props}>{fn}</Wraped>
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndPopulation = ({name, population}) => <span>{name} {population}</span>;

const mapPersonMathodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapStarShipMathodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllShips
    }
};

const mapPlanetMathodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanet
    }
};


const PersonList = With_SwapiService(With_data(withChildrenFunc(Item_list, renderName)),
    mapPersonMathodsToProps);

const StarShipList = With_SwapiService(With_data(withChildrenFunc(Item_list, renderName)),
    mapStarShipMathodsToProps);

const PlanetList = With_SwapiService(With_data(withChildrenFunc(Item_list, renderNameAndPopulation)),
    mapPlanetMathodsToProps);

export {
    PersonList,
    StarShipList,
    PlanetList
}