import React, { Component } from 'react';
import { Link } from '@reach/router';
import ArticleAuthorBadge from './ArticleAuthorBadge';
import { dateFinder } from '../utils/utils'
class HomeViewArticle extends Component {

    state = {
        article: {}
    }

    render() {
        let { path } = this.props;
        const art = this.props.article;
        const { index } = this.props;
        return (<>


            <div className='SingleArticleContainer'>
                <div className='SingleArticleCard'>
                    <ArticleAuthorBadge art={art} />

                    <div>
                        {dateFinder(art.created_at)}
                        <Link className='article-lis-title' to={`/articles/` + art.article_id}><h3>{index}  {art.title}</h3></Link>
                        <Link className='article_lis_topic' to={path.includes(art.topic) ? path : `/topics/${art.topic}/`}>topics/{art.topic}/</Link>
                    </div>



                    <p>{art.short_body}...</p>



                    <div>
                        <i className="fas fa-thumbs-up Teal"></i> <span>{art.votes}   </span>
                        <i className="fas fa-comments SteelBlue"></i> <span>{art.comment_count} </span>
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