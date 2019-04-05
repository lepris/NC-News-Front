import React, { Component } from 'react';
import { fetchAllTopics, addTopic } from '../db/api'

class AddArticle extends Component {
    state = {
        topics: [],
        newTopic: false,
        topicData: {
            slug: '',
            description: '',
        }
    }
    getTopics = () => {
        fetchAllTopics()
            .then(topics => this.setState({ topics }))
    }
    componentDidMount() {
        this.getTopics()
    }

    handleChange = (e) => {
        e.preventDefault()
        const condition = e.target.value;
        if (condition === 'Add New') this.setState({ newTopic: true })
        else this.setState({ topic: condition, newTopic: false })
    }
    handleTopicDataSlug = (e) => {
        e.preventDefault()
        const input = e.target.value;
        this.setState({ topicData: { slug: input } })
    }
    handleTopicDataDescription = (e) => {
        e.preventDefault()
        const input = e.target.value;
        this.setState({ topicData: { description: input } })
    }
    handleAddTopic = () => {
        addTopic(this.state.input)
            .then(this.getTopics())
    }
    render() {
        return (
            <form className='form_new_article'>
                <h3>Lets add an article</h3>
                <fieldset>
                    <h4>Topic:</h4>
                    <select onChange={this.handleChange}>
                        <option>Select your topic</option>
                        <option value='Add New'> Add New Topic</option>
                        {this.state.topics.map(topic => {
                            return <option value={topic.slug}>{topic.slug}</option>
                        })}
                    </select>


                </fieldset>
                <hr></hr>
                {this.state.newTopic &&
                    <fieldset>
                        <h4>Add New Topic</h4>
                        <input type='text' onChange={this.handleTopicDataSlug} placeholder='topic name'></input>
                        <input type='text' onChange={this.handleTopicDataDescription} placeholder='topic description'></input>
                        <button type='submit' onClick={this.handleAddTopic} className='vote'>Submit new topic</button>
                    </fieldset>
                }

            </form>)
    }
}
export default AddArticle