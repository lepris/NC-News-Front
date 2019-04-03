import React, { Component } from 'react';

class ArticlePostComment extends Component {
    state = {

    }

    componentDidMount() {
        const { username } = this.props
        this.setState({ input: { author: username } })
    }

    handleBodyChange = (e) => {
        e.preventDefault()
        const commentBody = e.target.value
        this.setState((prevState, value) => ({
            input: {
                author: prevState.input.author,
                body: commentBody
            }
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { handlePost } = this.props
        handlePost(this.state.input)
        this.setState({
            input: {
                author: '',
                body: '',
            }
        })
    }

    render() {
        return (<form>
            <input type='text' defaultValue='Comment Body' onChange={this.handleBodyChange}></input>
            <button type='submit' onClick={this.handleSubmit}>Add</button>
        </form>)
    }
}

export default ArticlePostComment