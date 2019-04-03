import React, { Component } from 'react';

class ArticlePostComment extends Component {
    state = {
        input: {
            author: 'lepris',
            body: 'this very test comment',
        }
    }

    handleBodyChange = (e) => {
        e.preventDefault()
        this.setState({ input: { body: e.target.value } })
    }

    handleAuthorChange = (e) => {
        e.preventDefault()
        this.setState({ input: { author: e.target.value } })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { handlePost } = this.props
        handlePost(this.state.input)
        this.setState({
            input: {
                author: 'lepris',
                body: 'this very test comment',
            }
        })
    }

    render() {
        return (<form>
            <input type='text' defaultValue='Username' onChange={this.handleAuthorChange}></input>
            <input type='text' defaultValue='Comment Body' onChange={this.handleBodyChange}></input>
            <button type='submit' onClick={this.handleSubmit}>Add</button>
        </form>)
    }
}

export default ArticlePostComment