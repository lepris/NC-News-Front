import React, { Component } from 'react';
import { fetchAllTopics, addTopic, postArticle } from '../db/api'

class AddArticle extends Component {
    state = {
        topics: [],
        newTopic: false,
        selectedTopic: '',
        submittedTopic: false,
    }
    componentDidMount() {
        this.getTopics()
    }

    getTopics = () => {
        fetchAllTopics()
            .then(topics => this.setState({ topics }))
    }

    handleTopicSelect = (e) => {
        e.preventDefault()
        const condition = e.target.value;
        if (condition === 'Add New') this.setState({ newTopic: true })
        else this.setState({ topic: condition, newTopic: false })
    }
    handleChangeTopic = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleAddTopic = (e) => {
        e.preventDefault()
        const inputTopic = { slug: this.state.topicSlug, description: this.state.topicDescription }
        addTopic(inputTopic)
            .then(data => {
                console.log(data)
                this.setState({ topic: data.slug, newTopic: false })
                this.getTopics()
            })
            .catch(err => console.log(err))
    }


    handleArticleSubmit = (e) => {
        e.preventDefault()
        const topic = this.state.topic;
        this.setState({ articleData: { topic } })
        postArticle(this.state.articleData)
            .then(newArticle => this.setState({ newArticle, submitted: true }))
            .catch(err => console.log(err))

    }


    render() {
        return (
            <form className='form_new_article'>
                <h3>Lets add an article</h3>
                <fieldset >
                    <h4>Topic:</h4>
                    <select onChange={this.handleTopicSelect} value={this.state.topic}>
                        <option >Select your topic</option>
                        <option value='Add New'> Add New Topic</option>
                        {this.state.topics.map((topic, ind) => {
                            return <option key={ind} value={topic.slug}>{topic.slug}</option>
                        })}
                    </select>
                </fieldset>

                <hr></hr>
                {this.state.newTopic &&
                    <fieldset >
                        <h4>Add New Topic</h4>
                        <input type='text' onChange={this.handleChangeTopic} name='topicSlug' placeholder='topic name'></input>
                        <input type='text' onChange={this.handleChangeTopic} name='topicDescription' placeholder='topic description'></input>
                        <button type='submit' onClick={this.handleAddTopic} className='vote'>Submit new topic</button>
                    </fieldset>
                }

                {this.state.topic && <fieldset >
                    <h4>Article</h4>
                    <input type='text' onChange={this.handleChangeTitle} placeholder='article title'></input>
                    <textarea type='textfield' onChange={this.handleChangeBody} placeholder='article body'></textarea>
                    <button type='submit' onClick={this.handleArticleSubmit} className='vote'>Submit new article</button>

                </fieldset>}
                {this.state.newArticle && <fieldset >
                    <input value={this.state.newArticle.title}></input>
                    <input value={this.state.newArticle.body}></input>
                </fieldset>}

            </form>)
    }
}
export default AddArticle