import React from 'react';
import Item_list from '../Item_list';
import {With_data, With_SwapiService} from '../HOC_helper';

const withChildrenFunc = (fn) => (Wraped) => {
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

const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((prevResult, f) => f(prevResult), comp)
};

const PersonList = compose(
    With_SwapiService(mapPersonMathodsToProps),
    With_data,
    withChildrenFunc(renderName)
)(Item_list);

const StarShipList = compose(
    With_SwapiService(mapStarShipMathodsToProps),
    With_data,
    withChildrenFunc(renderName)
)(Item_list);

const PlanetList = compose(
    With_SwapiService(mapPlanetMathodsToProps),
    With_data,
    withChildrenFunc(renderNameAndPopulation)
)(Item_list);
//const PersonList = With_SwapiService(With_data(withChildrenFunc(Item_list, renderName)),
//    mapPersonMathodsToProps);

//const StarShipList = With_SwapiService(mapStarShipMathodsToProps)(With_data(withChildrenFunc(renderName)(Item_list)));

//const PlanetList = With_SwapiService(mapPlanetMathodsToProps)(With_data(withChildrenFunc(renderNameAndPopulation)(Item_list)));

export {
    PersonList,
    StarShipList,
    PlanetList
}