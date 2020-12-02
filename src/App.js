import React from 'react';
import './App.css';
import DataContainer from './DataContainer';
import Data from './Data';
import CreateForm from './CreateForm';

const seededData = ['a','b','c']

class App extends React.Component {
  state = {
    seeds: seededData
  }

  create = newSeed => {
    this.setState({seeds: [...this.state.seeds, newSeed]}, () => console.log(this.state.seeds))
  }

  render() {
    return (
      <div>
        <DataContainer seeds={this.state.seeds}/>
        <CreateForm />
      </div>
    );
  }
}

export default App;