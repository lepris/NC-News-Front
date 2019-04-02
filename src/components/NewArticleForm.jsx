import React, { Component } from 'react';
class NewArticleForm extends Component {
    state = {
        title: '',
        body: '',
    }
    handleSubmit = e => {
        e.preventDefault();
        const { title, body } = e.target.value
    }
    render() {
        return
        <input onChange={e => this.handleChange('title', e.target.value)}></input>
    }
}