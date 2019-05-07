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
        if (this.state.loading) return <p>Loading...</p>
        return (<>

            {this.state.topics.map((topic, ind) => {
                return <Link key={ind} to={`/topics/${topic.slug}`} ><button>{topic.description}</button></Link >
                // <TopicPanelButton key={ind}  reload={this.props.reload} topic={topic} />
            })
            }
        </>)
    }
}

export default TopicsPanel