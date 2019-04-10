import React, { Component } from 'react';
import { fetchAllTopics, addTopic, postArticle } from '../db/api'
import './AddArticle.css'
import { navigate } from '@reach/router'
class AddArticle extends Component {
    state = {
        topics: [],
        stepOne: true,
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
        else this.setState({ topic: condition, newTopic: false, newArticle: true, stepOne: false })
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

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handlePreview = (e) => {
        e.preventDefault()
        this.setState({ newArticle: false, preview: true })
    }

    handleArticleSubmit = (e) => {
        e.preventDefault()
        const articleData = {
            title: this.state.previewArticleTitle,
            topic: this.state.topic,
            body: this.state.previewArticleBody,
            author: this.props.username,
        }

        postArticle(articleData)
            .then(article => {
                if (article) {

                    navigate(`/articles/${article.article_id}`)

                }
                else { this.setState({ postErr: true }) }
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <form className='form_new_article' >
                <h3>Lets add an article</h3>
                {this.state.stepOne && <fieldset className='fieldset_new_article'>

                    <h4>Topic:</h4>
                    <select onChange={this.handleTopicSelect} value={this.state.topic}>
                        <option >Select your topic</option>
                        <option value='Add New'> Add New Topic</option>
                        {this.state.topics.map((topic, ind) => {
                            return <option key={ind} value={topic.slug}>{topic.slug}</option>
                        })}
                    </select>
                </fieldset>}

                <hr></hr>
                {this.state.newTopic &&
                    <fieldset className='fieldset_new_article'>
                        <h4>Add New Topic</h4>
                        <input type='text' onChange={this.handleChange} name='topicSlug' placeholder='topic name'></input>
                        <input type='text' onChange={this.handleChange} name='topicDescription' placeholder='topic description'></input>
                        <button type='submit' onclick={this.handleAddTopic} className='vote'>Add Topic</button>
                    </fieldset>
                }

                {
                    this.state.newArticle && <fieldset className='fieldset_new_article'>
                        <h4>Article</h4>
                        <p>topics/{this.state.topic}</p>
                        <label htmlFor='articleTitle'>Title</label>

                        <input type='text' name='previewArticleTitle' onChange={this.handleChange} placeholder='artcle Title'></input>
                        <label htmlFor='articleBody'>Body</label>
                        <textarea name='previewArticleBody' onChange={this.handleChange} placeholder='article body'></textarea>

                        <button type='submit' onClick={this.handlePreview} className='vote'>Preview</button>
                    </fieldset>
                }
                {
                    this.state.preview && <fieldset className='fieldset_new_article'>
                        <h4 >{this.state.previewArticleTitle}</h4>
                        <p >{this.state.previewArticleBody}</p>
                        <button type='submit' onClick={this.handleArticleSubmit}>Submit</button>

                    </fieldset>

                }
                {this.state.thankU && <h4>thanks for the article</h4>}
                {this.state.postErr && <h1>big fat error</h1>}

            </form >)
    }
}
export default AddArticle