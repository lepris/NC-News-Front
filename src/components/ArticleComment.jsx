import React, { Component } from 'react'

class ArticleComment extends Component {
    state = {
        comment: {}
    }

    componentDidMount() {
        this.setComment()
    }
    setComment = () => {
        const { comment } = this.props
        console.log(comment)
        this.setState({ comment })
    }
    render() {
        return (
            <>
                <h4>{this.state.comment.author}</h4>
                <p>{this.state.comment.body}</p>
            </>)
    }
}

export default ArticleComment