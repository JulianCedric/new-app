import React from 'react';
import { Button } from 'semantic-ui-react';

class Data extends React.Component {
    state = {  
        name: ''
    }

    render() { 
        return (  
            <div>
                <ul>
                    <li>{this.props.seed}</li>
                </ul>
            </div>
        );
    }
}
 
export default Data;