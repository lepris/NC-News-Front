import React from 'react'
import CommentVote from './CommentVote';

const ArticleComment = ({ comment }) => {
    return (
        <>
            <p>{comment.body}</p>
            <p>{comment.author} created at: [Placeholder for DATE]</p>
            <CommentVote comment={comment} />
        </>)
}

export default ArticleComment