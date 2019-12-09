import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
// import { robots } from './robots';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange(event) {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const {robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });

    if (!robots.length) {
      return <h1 className="tc f1">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robots</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
