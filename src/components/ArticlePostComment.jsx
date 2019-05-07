import React, { Component } from 'react'
import './ArticlePostComment.css'
class ArticlePostComment extends Component {
    state = {
        author: '',
        tempBody: '',
        typingErr: true,
    }

    handleBodyChange = (e) => {
        e.preventDefault()
        if (this.state.tempBody.length > 10) this.setState({ typingErr: false })
        if (this.state.tempBody.length < 10) this.setState({ typingErr: true })

        this.setState({ tempBody: e.target.value });
    }

    handleSubmit = (e) => {

        e.preventDefault()
        const { handlePost, username } = this.props
        const input = {
            body: this.state.tempBody,
            author: username
        }

        handlePost(input)
        this.setState({ author: '', tempBody: '', typingErr: true })
    }

    render() {
        return (<form>
            <h3>NEW COMMENT:</h3>

            <fieldset>
                {!this.state.typingErr ?
                    (this.state.tempBody && <p className='error_message success'> Valid comment</p>)
                    :
                    (this.state.tempBody && <p className='error_message fail'> comment is too short</p>)
                }
                <textarea type='text' minLength='3' placeholder='Comment Body' value={this.state.tempBody} onChange={this.handleBodyChange}></textarea>

                <button type='submit' disabled={this.state.typingErr} onClick={this.handleSubmit}>Add</button>
            </fieldset>
        </form>)
    }
}

export default ArticlePostComment