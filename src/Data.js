import React from 'react';
import { Button, Input } from 'semantic-ui-react';

class Data extends React.Component {
    state = {  
        newSeed: ''
    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.newSeed)
        console.log(e.target.value)
        console.log('TEST')
        // 2020.12.01 - MON - THIS FUNCTION IS CURRENTLY NOT WORKING. 
    }

    handleClick = e => {
        console.log('USER CLICKED ON [ CREATE ] BUTTON ')
        let newSeed = this.state.newSeed
        this.props.create(newSeed)
    }

    render() { 
        return (  
            <div>
                <ul>
                    <li>{this.props.seed}</li>
                    <Input name={this.state.newSeed} onChange={this.handleChange} style={{width: '250px'}} type='text' value={this.state.name} /><br></br>
                    <Button onClick={this.handleClick} primary style={{width: '250px'}}>CREATE</Button>
                </ul>
            </div>
        );
    }
}
 
export default Data;