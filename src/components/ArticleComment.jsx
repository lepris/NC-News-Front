import React from 'react'
import CommentVote from './CommentVote'
import './ArticleComment.css'
const ArticleComment = ({ comment, handleDelete, username }) => {

    const clickedDelete = () => {
        handleDelete(comment.comment_id)
    }
    const createdWhen = new Date(comment.created_at)

    const date = createdWhen.getDate()
    const month = createdWhen.getMonth()
    const year = createdWhen.getFullYear()
    return (
        <div className='comment_box'>
            <p>{comment.body}</p>
            <p className='comment_author_date'>created by: <i class="fas fa-user-tag"></i> {comment.author}&nbsp; &nbsp; created at:&nbsp;<i class="fas fa-calendar-day"></i>&nbsp;{`${date} / ${month} / ${year}`} </p>
            {username === comment.author
                ? <button onClick={clickedDelete} className='vote'><i class="fas fa-comment-slash"></i>DELETE</button>
                :
                <p className='info_message'> <i class="fas fa-info-circle"></i> You can only vote on others comments</p>
            }


            {username !== comment.author
                ? <CommentVote comment={comment} />
                :
                <p className='info_message'> <i class="fas fa-info-circle"></i> You can only vote on others comments</p>
            }
            <hr></hr>
        </div>)
}

export default ArticleComment