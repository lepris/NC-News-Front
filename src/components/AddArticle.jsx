import React, { Component } from 'react';
import { fetchAllTopics } from '../db/api'

class AddArticle extends Component {
    state = {
        topics: [],
        newTopic: false,
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

    render() {
        return (
            <form>
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
                        <input type='text' placeholder='topic name'></input>
                        <input type='text' placeholder='topic description'></input>
                        <button type='submit' className='vote'>Submit new topic</button>

                    </fieldset>
                }

            </form>)
    }
}
export default AddArticle