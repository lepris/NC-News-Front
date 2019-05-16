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

    render() {
        return (

            <>
                <div className='ThreeColumnContainer'>
                    <div className='SingleArticleCard'>
                        <form className='form_login' onSubmit={this.formBehaviour}>
                            <h3 className='SteelBlue'><span className='Teal'>Log In</span> To add New Articles and Comments</h3>
                            {this.state.nameErr && <span className='login_message'>Your Username is incorrect :(</span>}
                            <label className='label_login' htmlFor='inputName'>Username: </label><input type='text' name='inputName' onChange={this.handleUserChange} placeholder='Username' ></input>
                            {this.state.passwdErr && <p>Your Password is incorrect :(</p>}

                            <label className='label_login' htmlFor='password'>Password:</label><input type='password' name='password' onChange={this.handlePasswDChange} placeholder='Password' ></input>
                            <button className='LoginSubmit' onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </>

        )


    }
}

export default LoginBox