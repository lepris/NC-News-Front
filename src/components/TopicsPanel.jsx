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
        const breakpoints = {
            desktop: 1024,
            tablet: 840,
        };

        if (this.state.loading) { return <p>Loading...</p> }
        else if (window.innerWidth > breakpoints.desktop) {
            return (<>


                {this.state.topics.map((topic, ind) => {
                    return <Link key={ind} to={`/topics/${topic.slug}`}><button>{topic.description}</button></Link >
                })}
            </>)
        } else if (window.innerWidth > breakpoints.tablet && window.innerWidth < breakpoints.desktop) {
            return (<>
                <p>Tablet View</p>

            </>)
        } else if (window.innerWidth <= breakpoints.tablet) {
            return (<>
                <p>Mobile View</p>
                <button onClick={this.toggleMenu}>{this.state.isOpen ? 'Hide Topics' : 'Show Topics'}</button>
                {this.state.isOpen === true && this.state.topics.map((topic, ind) => {
                    return <Link key={ind} to={`/topics/${topic.slug}`} ><button onClick={() => this.setState({ isOpen: false })}>{topic.description}</button></Link >
                })}
            </>)
        }



    }
}

export default TopicsPanel