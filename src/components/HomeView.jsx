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
        topic: ''
    }

    componentDidMount = () => {
        this.setState({ topic: this.props.topic })
        this.getArticles()
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.topic !== this.state.topic) {
            let topic = this.state.topic
            this.setState({ topic });
            this.getArticles();
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.topic !== prevState.topic) {

            return { topic: nextProps.topic };
        }
        else return null;
    }



    getArticles = () => {

        fetchAllArticles(this.props.topic)
            .then(articlesList => {
                if (articlesList) this.setState({ articlesList, loading: false })
                else this.setState({ err: true, errMSG: 'No articles found' })
            })
            .catch(err => this.setState({ err: true, errMSG: err.message }))
    }

    render() {

        if (this.state.loading) return <div>Loading...</div>
        if (this.state.err) return <Erroneous message={this.state.errMSG} />

        return (<> <TopicsPanel onClick={this.componentDidUpdate} />
            <h1>Props: {this.props.topic} articles section</h1>
            <h1>State: {this.state.topic} articles section</h1>
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