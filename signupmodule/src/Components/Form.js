import React, { Component } from 'react'
import './CSS/todo.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            gmail:"",
            password: "",
            gender: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    
    gmailhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            gmail: "",
            password: '',
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>LEARN TO CODE BY WATCHING OTHERS !</h1>
                    <h2>See how experienced developer solve problems 
                        in real-time Wotching scripted tutorial is great,
                        but understanding how developers think is invaluable</h2>
                     <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                     <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                     <input type="text" value={this.state.gmail.com} onChange={this.gmailhandler} placeholder="gmail..." /><br />
                     <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                     <input type="submit" value="CLAIM YOUR FREE TRIAL" />
                     <h3>Terms And conditions</h3>
                </form>

            </div>
            
        )
    }
}

export default Form