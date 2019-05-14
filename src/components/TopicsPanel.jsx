import React, { Component } from 'react'
import { fetchAllTopics } from '../db/api'
import { Link } from '@reach/router'
import './TopicsPanel.css'

class TopicsPanel extends Component {
    state = {
        loading: false,
        topics: ['coding', 'football'],
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
        const { topics, isOpen } = this.state;
        console.log(device)


        if (this.state.loading) { return <p>Loading...</p> }
        else if (device === 'desktop') {
            return (
                <>
                    <h3 className='Tan'>Topics selection</h3>
                    <ul>
                        {topics.map((topic, ind) => {
                            return <Link className='OutsideButton TopicsButton' key={ind} to={`/topics/${topic.slug}/`}><li>{topic.description} ({topic.articles_count})</li></Link >
                        })}

                    </ul>
                </>)
        } else if (device === 'tablet') {
            return (<>
                <p>Tablet View</p>

            </>)
        } else if (device === 'mobile') {
            return (<>
                <button onClick={this.toggleMenu}>{isOpen ? 'Hide Topics' : 'Show Topics'}</button>
                {isOpen === true && topics.map((topic, ind) => {
                    return <Link key={ind} state={{ topic: topic.slug }} to={`/topics/${topic.slug}`} ><button onClick={() => this.setState({ isOpen: false })}>{topic.description}</button></Link >
                })}
            </>)
        }



    }
}

export default TopicsPanel