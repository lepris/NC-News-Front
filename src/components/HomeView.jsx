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
                this.setState({ articlesList, loading: false })
            })
            .catch(err => this.setState({ err: true, errMSG: err.message }))
    }

    render() {
        if (this.state.err) return <Erroneous message={this.state.errMSG} />
        if (this.state.loading) return <div>Loading...</div>

        return (
            <>  <TopicsPanel reload={this.reloadArticlesWithTopic} chooseTopic={this.props.chooseTopic} />

                <h1>Articles section</h1>
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