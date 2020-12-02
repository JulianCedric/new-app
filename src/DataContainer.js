import React from 'react';
import Data from './Data';

class DataContainer extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <h1>DATA CONTAINER</h1>
                    {this.props.seeds.map(seed => <Data seed={seed}/> )}
            </div>
        );
    }
}
 
export default DataContainer;