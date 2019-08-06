export default class Swapi_service {

    _mainSwapi = 'https://swapi.co/api';
    _mainImage = 'https://starwars-visualguide.com/assets/img/';

    getAllPeople = async () => {
        const res = await this.getResponse(`/people/`);
        return res.results.map(this.transformPerson);
    };
    getPerson = async (id) => {
        const person = await this.getResponse(`/people/${id}`);
        return this.transformPerson(person);
    };
    getPersonImage = (id) => {
        return `${this._mainImage}characters/${id}.jpg`
    };
    getAllPlanet = async () => {
        const res = await this.getResponse(`/planets/`);
        return res.results.map(this.transformPlanet);
    };
    getPlanet = async (id) => {
        const planet = await this.getResponse(`/planets/${id}`);
        return this.transformPlanet(planet);
    };
    getPlanetImage = (id) => {
        return `${this._mainImage}planets/${id}.jpg`
    };
    getAllShips = async () => {
        const res = await this.getResponse(`/starships/`);
        return res.results.map(this.transformShip);
    };
    getShip = async (id) => {
        const ship = await this.getResponse(`/starships/${id}`);
        return this.transformShip(ship);
    };
    getShipImage = (id) => {
        return `${this._mainImage}starships/${id}.jpg`
    };
    transformPlanet = (planet) => {
        const id = this.idExtract(planet);
        return {
            id: id,
            name: planet.name,
            population: planet.population,
            rotation_period: planet.rotation_period,
            diameter: planet.diameter
        }
    };
    transformShip = (ship) => {
        return {
            id: this.idExtract(ship),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredits: ship.cost_in_credits,
            length: ship.length,
            crew: ship.crew,
            passengers: ship.passengers,
            cargoCapacity: ship.cargo_capacity
        }
    };
    transformPerson = (person) => {
        return {
            id: this.idExtract(person),
            name: person.name,
            gender: person.gender,
            birth_year: person.birth_year,
            eye_color: person.eye_color
        }
    };

    async getResponse(url) {
        const res = await fetch(`${this._mainSwapi}${url}`);

        if (!res.ok) {
            throw new Error(`couldn't fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    idExtract(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1]; //match group 1 - ([0-9]*)\)

    }

}