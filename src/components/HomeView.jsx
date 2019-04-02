import React, { Component } from 'react';
import { fetchAllArticles } from '../db/api'
import HomeViewArticle from './HomeViewArticle';



class HomeView extends Component {

    state = {
        articlesList: []
    }

    componentDidMount() {
        this.getArticles();

    }

    render() {
        return (
            <>
                <h1>Articles section</h1>
                <div>
                    {this.state.articlesList.length === 0 ? (
                        <div>Loading...</div>
                    ) : (
                            this.state.articlesList.map((art, ind) => {

                                return <HomeViewArticle key={ind} article={art} />

                            })
                        )}

                </div>
            </>
        )
    }

    getArticles = () => {
        fetchAllArticles()
            .then(articlesList => {
                this.setState({ articlesList })
            })
    }
}

export default HomeView