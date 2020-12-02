import React from 'react';
import { Button } from 'semantic-ui-react';

class Data extends React.Component {
    state = {  }

    render() { 
        return (  
            <div>
                <p>Element: {this.props.seed}</p>
                <Button color='blue' inverted style={{width: '250px'}}>Edit</Button>
                    <br></br>
                <Button color='red' inverted style={{width: '250px'}}>Delete</Button>
            </div>
        );
    }
}
 
export default Data;