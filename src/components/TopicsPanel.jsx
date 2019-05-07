import React, { Component } from 'react'
import { fetchAllTopics } from '../db/api'
import { Link } from '@reach/router'

class TopicsPanel extends Component {
    state = {
        loading: false,
        topics: ['football', 'coding'],
    }
    componentDidMount() {
        this.getTopics()
    }
    getTopics = () => {
        fetchAllTopics()
            .then(topics => this.setState({ topics }))
    }



    render() {
        const breakpoints = {
            desktop: 1024,
            tablet: 840,
        };

        if (this.state.loading) { return <p>Loading...</p> }
        else if (window.innerWidth > breakpoints.desktop) {
            return (<>

                {this.state.topics.map((topic, ind) => {
                    return <Link key={ind} to={`/topics/${topic.slug}`} ><button>{topic.description}</button></Link >
                })}
            </>)
        } else if (window.innerWidth > breakpoints.tablet && window.innerWidth < breakpoints.desktop) {
            return (<p>Tablet View</p>)
        } else if (window.innerWidth <= breakpoints.tablet) {
            return (<p>Mobile View</p>)
        }



    }
}

export default TopicsPanel