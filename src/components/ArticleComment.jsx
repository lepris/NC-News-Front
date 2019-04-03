import React from 'react'
import CommentVote from './CommentVote'

const ArticleComment = ({ comment, handleDelete }) => {

    const clickedDelete = () => {
        handleDelete(comment.comment_id)
    }
    return (
        <>
            <p>{comment.body}</p>
            <p>{comment.author} created at: [Placeholder for DATE] <button onClick={clickedDelete}>DELETE</button></p>

            <CommentVote comment={comment} />
        </>)
}

export default ArticleComment