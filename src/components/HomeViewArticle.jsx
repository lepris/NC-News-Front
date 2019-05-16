import React, { Component } from 'react';
import { Link } from '@reach/router';
import ArticleAuthorBadge from './ArticleAuthorBadge';
import { dateFinder } from '../utils/utils'
import './HomeViewArticle.css';
class HomeViewArticle extends Component {

    state = {
        article: {}
    }

    render() {

        let { path } = this.props;
        const art = this.props.article;
        const { index } = this.props;
        const articleBody = art.short_body


        return (<>


            <div className='SingleColumnContainer'>
                <div className='SingleArticleCard'>
                    <ArticleAuthorBadge art={art} />

                    <div>
                        {dateFinder(art.created_at)}
                        <Link className='article-lis-title' to={`/articles/` + art.article_id}><h3>{index}  {art.title}</h3></Link>
                        <Link className='article_lis_topic' to={path.includes(art.topic) ? path : `/topics/${art.topic}/`}>topics/{art.topic}/</Link>
                    </div>



                    <p>{articleBody}...</p>



                    <div>
                        <div className='HomeViewArticleLikes'>
                            <div className='Icons'><i className="fas fa-thumbs-up Teal"></i>{art.votes}   </div>
                            <div className='Icons'><i className="fas fa-comments SteelBlue"></i>{art.comment_count} </div>
                        </div>
                        <Link to={`/articles/` + art.article_id}>
                            <button className='button_small'><i className="fas fa-book-open"></i>Continue reading</button>
                        </Link>
                    </div>
                </div>
            </div>


        </>)


    }
}

export default HomeViewArticle