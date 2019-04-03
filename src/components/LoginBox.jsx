import React, { Component } from 'react';
import { fetchUserByUsername } from '../db/api'


class LoginBox extends Component {
    state = {
        inputName: '',
        inputPassword: '',
    }

    handleUserChange = (ev) => {
        ev.preventDefault()
        this.setState({ inputName: ev.target.value })
    }
    handlePasswDChange = (ev) => {
        ev.preventDefault()
        this.setState({ inputPassword: ev.target.value })
    }

    handleSubmit = (ev) => {
        const { userLogin } = this.props
        ev.preventDefault()
        fetchUserByUsername(this.state.inputName)
            .then(user => user.username === this.state.inputName ? user : 'Username incorrect')
            .then(user => user.password === this.state.inputPassword ? userLogin(user.username) : console.log('password incorrect'))
            .catch(err => console.log(err))

    }

    render() {
        return (<>username: <input type='text' onChange={this.handleUserChange} ></input>
            password: <input type='text' onChange={this.handlePasswDChange}></input>
            <button onClick={this.handleSubmit}>Submit</button></>)
    }

}

export default LoginBox