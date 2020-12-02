import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import DataContainer from './DataContainer';
import CreateForm from './CreateForm';
import EditForm from './EditForm';

const seededData = ['a','b','c']

class App extends React.Component {
  state = {
    seeds: seededData,
    showEditForm: false
  }

  addNewElement = newElement => {
    console.log('OLD ARRAY:', this.state.seeds)
    this.setState({seeds: [...this.state.seeds, newElement]})
  }

  // handleClick() {
  //   this.setState({showEditForm: !!this.state.showEditForm})
  // }

  render() {
    console.log('UPDATED ARRAY:', this.state.seeds)
    return (
      <div>
        <CreateForm addNewElement={this.addNewElement} />
          <br></br>
        <DataContainer seeds={this.state.seeds} />
          <br></br>

        {this.state.showEditForm
        ? <EditForm />
        : null}

        {/* <Button onClick={this.handleClick} primary style={{width: '250px'}}>Show Edit Form</Button> */}

      </div>
    );
  }
}

export default App;