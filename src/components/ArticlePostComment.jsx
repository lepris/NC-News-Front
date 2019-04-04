import React, { Component } from 'react';

class ArticlePostComment extends Component {
    state = {
        author: '',
        tempBody: ''
    }

    componentDidMount() {
        const { username } = this.props
        this.setState({ author: username })
    }

    handleBodyChange = (e) => {
        e.preventDefault()
        this.setState({ tempBody: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { handlePost } = this.props
        const input = {
            body: this.state.tempBody,
            author: this.state.author
        }
        handlePost(input)
        this.setState({ author: '', tempBody: '' })
    }

    render() {
        return (<form>
            <input type='text' placeholder='Comment Body' value={this.state.tempBody} onChange={this.handleBodyChange}></input>
            <button type='submit' onClick={this.handleSubmit}>Add</button>
        </form>)
    }
}

export default ArticlePostComment