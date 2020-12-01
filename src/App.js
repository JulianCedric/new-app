import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import Data from './Data';

const seededData = ['a','b','c']
const newElement = 'd'

class App extends React.Component {
  state = {
    seeds: seededData
  }

  create = newSeed => {
    this.setState({seeds: [...this.state.seeds], newSeed})
  }

  addNewElement() {
    // this.setState({seeds: [...this.state.seeds], newElement})
    // console.log(this.state.seeds)
  }

  render() {
    return (
      <div className="App">
        {this.state.seeds.map(seed => <Data seed={seed} create={this.create}/> )}
        <Button onClick={this.addNewElement}>Click Me</Button>
      </div>
    );
  }
}

export default App;