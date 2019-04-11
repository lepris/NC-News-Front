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
            <div className='article_author_container'>
                <div className='avatar_big'><img alt='Article authors avatar' src={this.state.authorData.avatar_url || null} /></div>
                <div className='article_author_name'>{this.state.authorData.name}</div>
            </div>)
    }
}

export default ArticleAuthor