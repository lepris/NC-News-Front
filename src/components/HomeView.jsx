import React, { Component } from 'react';
import { fetchAllArticles } from '../db/api'
import HomeViewArticle from './HomeViewArticle';
import { Erroneous } from './Erroneous';
import TopicsPanel from './TopicsPanel';

class HomeView extends Component {

    state = {
        articlesList: [],
        loading: true,
        err: false,
        errMSG: '',
    }

    componentDidMount() {
        this.getArticles(this.props.topic)
    }

    reloadArticlesWithTopic = (t) => {
        this.getArticles(t)
    }

    getArticles = (topic) => {
        fetchAllArticles(topic)
            .then(articlesList => {
                if (articlesList) this.setState({ articlesList, loading: false })
                else this.setState({ err: true, errMSG: 'No articles found' })
            })
            .catch(err => this.setState({ err: true, errMSG: err.message }))
    }

    render() {

        if (this.state.loading) return <div>Loading...</div>
        if (this.state.err) return <Erroneous message={this.state.errMSG} chooseTopic={this.props.chooseTopic} />

        return (
            <>  <TopicsPanel reload={this.reloadArticlesWithTopic} chooseTopic={this.props.chooseTopic} />
                <h1>{this.props.topic} articles section</h1>
                <div>
                    {this.state.articlesList.map((art, ind) => {
                        return <HomeViewArticle key={ind} article={art} />
                    })}

                </div>
            </>
        )
    }


}

export default HomeView