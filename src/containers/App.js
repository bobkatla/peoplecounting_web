import React from 'react';
// import {robots} from './robots'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const api = "http://localhost:5000";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            buildings: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch(`${api}/getall`)
            .then(response => response.json())
            .then(buildings => this.setState({buildings}))  
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        // using destruct to clean the code
        const {buildings, searchField} = this.state;
        const filteredBuildings = buildings.filter(building => {
            return building.name.substring(8).toLowerCase().includes(searchField.toLowerCase());
        })
        
        return !buildings.length
        ? <h1 className='tc'>Loading</h1>
        : (
            <div className='tc'>
                <h1 className='f1'>BUILDINGs</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList buildings={filteredBuildings}/>
                </Scroll>
            </div>
        );
    }
}

export default App;