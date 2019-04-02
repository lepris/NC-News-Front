import React, { Component } from 'react';
import { fetchUserByUsername } from '../db/api'
import './ArticleAuthor.css'
class ArticleAuthor extends Component {
    state = {
        authorData: {}
    }
    componentDidMount() {
        this.getAuthor()
    }
    getAuthor = () => {
        fetchUserByUsername(this.props.username)
            .then(authorData => this.setState({ authorData }))

    }

    render() {
        console.log(this.state.authorData)
        return (
            <>
                <img className='avatar_big' src={this.state.authorData.avatar_url} />
                <h4>{this.state.authorData.name}</h4>
            </>)
    }
}

export default ArticleAuthor