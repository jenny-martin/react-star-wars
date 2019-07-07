import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import { getStarships } from './services/sw-api';
import StarshipPage from './pages/StarshipPage/StarshipPage';


class App extends Component {
  state = {
    starships: [],
  };

  getStarship = (idx) => {
    return this.state.starships[idx]
  }

async componentDidMount() {
  const starships = await getStarships();
  this.setState({ starships: starships.results });
  }
  
  render() {
  return (
    <div className="jumbotron">
      <header className="App-header">
      Star Wars Starships</header>
        <Switch>
        <Route exact path='/'>
        <Link />
        </Route>
        </Switch>
      </div>
  );
  }
}

export default App;
