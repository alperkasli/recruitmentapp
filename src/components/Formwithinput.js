import React, { Component } from 'react'

export default class Formwithinput extends Component {

    state = {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        // this.props.parentFunctionThatGetsDataFromHere(this.state);

    }

    render() {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" onChange={handleChange} />

                    <label htmlFor="age">Age: </label>
                    <input id="age" type="text" onChange={handleChange} />

                    <label htmlFor="belt">Belt: </label>
                    <input id="belt" type="text" onChange={handleChange} />
                    
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}
