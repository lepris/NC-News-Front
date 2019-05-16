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
    navigateBack = () => {
        window.history.back()
    }

    handleSubmit = (ev) => {
        const { userLogin } = this.props
        ev.preventDefault()
        fetchUserByUsername(this.state.inputName)
            .then(user => {
                if (user.username === this.state.inputName && user.password === this.state.inputPassword) {
                    this.setState({ username: this.state.inputName })
                    userLogin(user.username)
                } else if (user.username !== this.state.inputName) {
                    this.setState({ nameErr: true })
                } else if (user.password !== this.state.inputPassword) {
                    this.setState({ passwdErr: true, inputPassword: '' })
                }


            })
            .catch(err => this.setState({ nameErr: true, passwdErr: true, inputPassword: '' }))
            .then(() => {
                if (this.state.username) {
                    this.navigateBack()
                }

            })
    }

    handleGuestSubmit = (ev) => {
        const { userLogin } = this.props
        ev.preventDefault()
        this.setState({ username: 'Guest' })
        userLogin('Guest')
        this.navigateBack()
    }

    render() {
        return (

            <>
                <div className='ThreeColumnContainer'>
                    <div className='SingleArticleCard'>
                        <h3 className='SteelBlue'><span className='Teal'>Log In</span> To add New Articles and Comments</h3>
                        <div className='TwoColumns'>

                            <div className='form_login'>
                                <h3>Continue as Guest</h3>
                                <p>This is only an exercise version, there is a plan to implement Auth0 in near future,
                                     but for now and to save your time I have enabled this Guest Login option.
                                     Please use this option to fully experience all editing options.</p>
                                <button className='LoginSubmit' onClick={this.handleGuestSubmit}>Guest User</button>
                            </div>
                            <div className='form_login'>
                                <h3>Registered User Login</h3>
                                {this.state.nameErr && <span className='login_message'>Your Username is incorrect :(</span>}
                                <label className='label_login' htmlFor='inputName'>Username: </label><input type='text' name='inputName' onChange={this.handleUserChange} placeholder='Username' ></input>
                                {this.state.passwdErr && <p>Your Password is incorrect :(</p>}

                                <label className='label_login' htmlFor='password'>Password:</label><input type='password' name='password' onChange={this.handlePasswDChange} placeholder='Password' ></input>
                                <button className='LoginSubmit' onClick={this.handleSubmit}>Submit</button>

                            </div>

                        </div>
                    </div>
                </div>
            </>

        )


    }
}

export default LoginBox