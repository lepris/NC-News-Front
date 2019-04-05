import React, { Component } from 'react';
import { TopicPanelButton } from './TopicPanelButton';
import { fetchAllTopics } from '../db/api';

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
            {this.state.topics.map(topic => {
                return <TopicPanelButton chooseTopic={this.props.chooseTopic} reload={this.props.reload} topic={topic} />
            })
            }
        </>)
    }
}

export default TopicsPanel