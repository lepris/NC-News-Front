import React, { Component } from 'react';
import { fetchAllTopics, addTopic, postArticle } from '../db/api'
import './AddArticle.css';
import { navigate, Link } from '@reach/router'
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
    handleGuestSubmit = (e) => {
        e.preventDefault()
        navigate('/')
    }

    handleArticleSubmit = (e) => {
        e.preventDefault()
        const { username } = this.props;
        const articleData = {
            title: this.state.previewArticleTitle,
            topic: this.state.topic,
            body: this.state.previewArticleBody,
            username: username,
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
        const { username } = this.props;
        return (

            <>

                <div className='ThreeColumnContainer'>
                    < div className='SingleArticleCard' >
                        <h2 className='Teal'>Creating New Article </h2>
                        <div className='form_new_article' >

                            {this.state.stepOne && <div className='fieldset_new_article'>


                                <h3><span className='SteelBlue'>Step 1</span> Choose Your Topic</h3>
                                <p>Please choose a topic for the new article. To do this simply select one from the Drop Down list or define a new one, by selecting 'Add New Topic' option</p>
                                <select className='AddArticleSelect' onChange={this.handleTopicSelect} value={this.state.topic}>
                                    <option >Select your topic</option>
                                    <option value='Add New'> Add New Topic</option>
                                    {this.state.topics.map((topic, ind) => {
                                        return <option key={ind} value={topic.slug}>{topic.slug}</option>
                                    })}
                                </select>
                            </div>}

                            {/* <hr></hr> */}
                            {this.state.newTopic &&
                                <div className='fieldset_new_article'>

                                    <h3><span className='SteelBlue'>Step 1</span> Add New Topic</h3>

                                    <input type='text' onChange={this.handleChange} name='topicSlug' placeholder='topic name'></input>
                                    <input type='text' onChange={this.handleChange} name='topicDescription' placeholder='topic description'></input>
                                    <button className='ArticleSubmit' type='submit' onclick={this.handleAddTopic} >Add Topic</button>
                                </div>
                            }

                            {
                                this.state.newArticle && <div className='fieldset_new_article'>
                                    <h4>topics/<span className='Teal'>{this.state.topic}</span></h4>
                                    <h3><span className='SteelBlue'>Step 2</span> Article Title and Body</h3>

                                    <label htmlFor='articleTitle'>Title</label>

                                    <input type='text' name='previewArticleTitle' onChange={this.handleChange} placeholder='artcle Title'></input>
                                    <label htmlFor='articleBody'>Body</label>
                                    <textarea name='previewArticleBody' onChange={this.handleChange} placeholder='article body'></textarea>

                                    <button className='ArticleSubmit' type='submit' onClick={this.handlePreview} >Preview</button>
                                </div>
                            }
                            {
                                this.state.preview &&

                                <div className='fieldset_new_article'>
                                    <h3><span className='SteelBlue'>Step 3</span> Previw and Publish</h3>
                                    <h3 className='Teal'>{this.state.previewArticleTitle}</h3>
                                    <p >{this.state.previewArticleBody}</p>
                                    {username === 'Guest' ?
                                        (
                                            <button className='ArticleSubmit' type='submit' onClick={this.handleGuestSubmit}>Thaks for testing</button>
                                        )
                                        :
                                        (
                                            <button className='ArticleSubmit' type='submit' onClick={this.handleArticleSubmit}>Submit</button>
                                        )}


                                </div>

                            }
                            {this.state.thankU && <h4>thanks for the article</h4>}
                            {this.state.postErr && <h1>big fat error</h1>}

                        </div >

                    </div >
                </div>

            </>

        )
    }
}
export default AddArticle