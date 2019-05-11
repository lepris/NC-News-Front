import React, { Component } from 'react'
import { fetchAllTopics } from '../db/api'
import { Link } from '@reach/router'

class TopicsPanel extends Component {
    state = {
        loading: false,
        topics: ['football', 'coding'],
        isOpen: false,
        showTopics: ['Show Topics', 'Hide Topics']
    }
    componentDidMount() {
        this.getTopics()
    }

    getTopics = () => {
        fetchAllTopics()
            .then(topics => this.setState({ topics }))
    }



    toggleMenu = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        const { device } = this.props;
        console.log(device)


        if (this.state.loading) { return <p>Loading...</p> }
        else if (device === 'desktop') {
            return (
                <>
                    <h3>Topics selection</h3>
                    <ul>
                        {this.state.topics.map((topic, ind) => {
                            return <Link key={ind} to={`/topics/${topic.slug}/`}><li>{topic.description}</li></Link >
                        })}
                    </ul>
                </>)
        } else if (device === 'tablet') {
            return (<>
                <p>Tablet View</p>

            </>)
        } else if (device === 'mobile') {
            return (<>
                <p>Mobile View</p>
                <button onClick={this.toggleMenu}>{this.state.isOpen ? 'Hide Topics' : 'Show Topics'}</button>
                {this.state.isOpen === true && this.state.topics.map((topic, ind) => {
                    return <Link key={ind} state={{ topic: topic.slug }} to={`/topics/${topic.slug}`} ><button onClick={() => this.setState({ isOpen: false })}>{topic.description}</button></Link >
                })}
            </>)
        }



    }
}

export default TopicsPanel