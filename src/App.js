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

  addNewElement = newElement => {
    console.log('OLD ARRAY:', this.state.seeds)
    this.setState({seeds: [...this.state.seeds, newElement]})
  }

  render() {
    console.log('UPDATED ARRAY:', this.state.seeds)

    return (
      <div>
        <CreateForm addNewElement={this.addNewElement} />
        <br></br>
        <DataContainer seeds={this.state.seeds} />
      </div>
    );
  }
}

export default App;