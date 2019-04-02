import React, { Component } from 'react';
import axios from 'axios';

class Api extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.fetchAllAticles();
    }

    fetchAllAticles = () => {
        const usersUrl = 'https://banana-crisp-75783.herokuapp.com/api/articles'
        axios.get(usersUrl)
            .then((data) => {
                console.log(data.data.articles)
                return data.data.articles
            })
            .then(data => this.setState({ articles: data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.articles.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                        this.state.articles.map((article, index) => {
                            return <div key={index}> {article.title} </div>
                        })
                    )}
            </div>
        )
    }

}

export default Api;