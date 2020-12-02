import React from 'react';

class CreateForm extends React.Component {
    state = {  
        newElement: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        let newElement = this.state.newElement
        this.props.addNewElement(newElement)
        this.setState({newElement: ''})
    }

    render() { 
        return (  
            <div>
                <h1>CREATE FORM</h1>
                <form className="new-element-form" onSubmit={this.handleSubmit}>
                    <input placeholder="New Element" name="newElement" value={this.state.newElement} onChange={this.handleChange} style={{width: '250px'}} />
                    <br></br>
                    <input className="ui button green inverted" style={{width: '250px'}} type="submit" value="Add" />
                </form>
            </div>
        );
    }
}
 
export default CreateForm;