import React, { Component } from 'react';
import { Link } from '@reach/router';
import blankImg from '../img/blank-profile-picture.png'
class HomeViewArticle extends Component {

    state = {
        article: {}
    }

    render() {
        let { path } = this.props;
        const art = this.props.article;
        const createdWhen = new Date(art.created_at)
        const { index } = this.props

        const date = createdWhen.getDate()
        const month = createdWhen.getMonth()
        const year = createdWhen.getFullYear()
        let errorflag = true

        return (<>


            <div className='SingleArticleContainer'>
                <div className='SingleArticleCard'>
                    <div className='HomeViewArticleAuthorCard'>
                        <div>
                            <img className='HomeViewArticleAuthorAvatar' src={art.avatar_url || blankImg} alt='Article author'
                                onError={(e) => { if (errorflag) { errorflag = false; e.target.src = blankImg; e.target.alt = 'No author Photo provided' } }} />
                        </div>
                        <div>
                            <span>AUTHOR</span><br></br>
                            <span className='AuthorName'> {art.author}</span>

                        </div>
                    </div>
                    <div>
                        <i className="fas fa-calendar-day ArticleDate"></i> {`${date} / ${month} / ${year}`}
                        <Link className='article-lis-title' to={`/articles/` + art.article_id}><h2>{index}  {art.title}</h2></Link>
                        <Link className='article_lis_topic' to={path.includes(art.topic) ? path : `/topics/${art.topic}/`}>topics/{art.topic}/</Link>
                    </div>



                    <p>{art.short_body}...</p>



                    <div>
                        <i className="fas fa-thumbs-up"></i> <span>{art.votes}   </span>
                        <i className="fas fa-comments"></i> <span>{art.comment_count} </span>
                        <Link to={`/articles/` + art.article_id}>
                            <button className='button_small'><i className="fas fa-book-open"></i>read more</button>
                        </Link>
                    </div>
                </div>
            </div>


        </>)


    }
}

export default HomeViewArticle