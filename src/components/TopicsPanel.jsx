import React, { Component } from 'react';
import { TopicPanelButton } from './TopicPanelButton';

class TopicsPanel extends Component {
    state = {
        loading: false,
        topicList: ['football', 'coding'],
    }
    componentDidMount() {

    }
    render() {
        if (this.state.loading) return <p>Loading...</p>
        return (<>
            {this.state.topicList.map(topic => {
                return <TopicPanelButton chooseTopic={this.props.chooseTopic} reload={this.props.reload} topic={topic} />
            })
            }
        </>)
    }
}

export default TopicsPanel