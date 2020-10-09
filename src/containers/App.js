import React from 'react';
// import {robots} from './robots'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const api = "https://peoplecounting-server-api.herokuapp.com";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            buildings: [],
            searchField: '',
            sum: ''
        }
    }

     /*
        declare a member variable to hold the interval ID
        that we can reference later.
      */
    intervalID;

    componentDidMount() {
        this.getData();
        // update value every 5s
        this.intervalID = setInterval(this.getData.bind(this), 5000);
    }

    getData = () => {
        fetch(`${api}/getall`)
            .then(response => response.json())
            .then(buildings => this.setState({buildings}));
        fetch(`${api}/getsum`)
            .then(response => response.json())
            .then(sum => this.setState({sum}));
      }

    componentWillUnmount() {
        /*
          stop getData() from continuing to run even
          after unmounting this component
        */
        clearInterval(this.intervalID);
      }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        // using destruct to clean the code
        const {buildings, searchField, sum} = this.state;
        const filteredBuildings = buildings.filter(building => {
            return building.name.substring(8).toLowerCase().includes(searchField.toLowerCase());
        })

        return !buildings.length
        ? <h1 className='tc'>Loading</h1>
        : (
            <div className='tc'>
                <h1 className='f1'>Counting people project</h1>
                <h3 className='f2'><i>{`total: ${sum} people inside buildings`}</i></h3>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList buildings={filteredBuildings}/>
                </Scroll>
            </div>
        );
    }
}

export default App;