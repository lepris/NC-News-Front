import React from 'react'
import CommentVote from './CommentVote'

const ArticleComment = ({ comment, handleDelete, username }) => {

    const clickedDelete = () => {
        handleDelete(comment.comment_id)
    }
    return (
        <>
            <p>{comment.body}</p>
            <p>{comment.author} created at: {comment.created_at} </p>
            {username === comment.author
                ? <button onClick={clickedDelete}>DELETE</button>
                :
                <p>You can only vote on others comments</p>
            }


            {username !== comment.author
                ? <CommentVote comment={comment} />
                :
                <p>You can only vote on others comments</p>
            }
        </>)
}

export default ArticleComment