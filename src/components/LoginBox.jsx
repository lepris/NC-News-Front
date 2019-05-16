import React, { Component } from 'react'
import { fetchUserByUsername } from '../db/api'
import './LoginBox.css'

class LoginBox extends Component {
    state = {
        inputName: '',
        inputPassword: '',
        nameErr: false,
        passwdErr: false,
    }


    handleUserChange = (ev) => {
        ev.preventDefault()
        this.setState({ inputName: ev.target.value, nameErr: false })
    }
    handlePasswDChange = (ev) => {
        ev.preventDefault()
        this.setState({ inputPassword: ev.target.value })
    }

    formBehaviour = (ev) => {
        ev.preventDefault()
    }

    handleSubmit = (ev) => {
        const { userLogin } = this.props
        ev.preventDefault()
        fetchUserByUsername(this.state.inputName)
            .then(user => user.username === this.state.inputName ? user : 0)
            .catch(err => this.setState({ nameErr: true, inputPassword: '' }))

        fetchUserByUsername(this.state.inputName)

            .then(user => user.password === this.state.inputPassword ? userLogin(user.username) : 0)
            .catch(err => this.setState({ passwdErr: true }))
        window.history.back()

    }

    render() {
        return (

            <>
                <div className='ThreeColumnContainer'>
                    <div className='SingleArticleCard'>
                        <form className='form_login' onSubmit={this.formBehaviour}>
                            <h3>LOG IN:</h3>
                            {this.state.nameErr && <span className='login_message'>Your Username is incorrect :(</span>}
                            <label className='label_login' htmlFor='inputName'>username: </label><input type='text' name='inputName' onChange={this.handleUserChange} placeholder='Username' ></input>
                            {this.state.passErr && <p>Your Password is incorrect :(</p>}

                            <label className='label_login' htmlFor='password'>password:</label><input type='password' name='password' onChange={this.handlePasswDChange} placeholder='Password' ></input>
                            <button onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </>

        )


    }
}

export default LoginBox