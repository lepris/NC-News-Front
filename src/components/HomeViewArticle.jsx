import React, { Component } from 'react';
import { Link } from '@reach/router';

class HomeViewArticle extends Component {

    state = {
        article: {}
    }

    render() {
        const art = this.props.article;
        const createdWhen = new Date(art.created_at)

        const date = createdWhen.getDate()
        const month = createdWhen.getMonth()
        const year = createdWhen.getFullYear()

        return (<>
            <Link class='article-lis-title' to={`/articles/` + art.article_id}><h2>{art.title}</h2></Link>

            <p className='articles_lis_info'>
                <Link className='article_lis_topic' to={`topics/${art.topic}`}>topics/{art.topic}</Link>
                <i class="fas fa-user-tag"> </i>{art.author}
                <i class="fas fa-thumbs-up"></i> {art.votes}
                <i class="fas fa-comments"></i> {art.comment_count}
                <i class="fas fa-calendar-day"></i> {`${date} / ${month} / ${year}`}
            </p>

            <Link to={`/articles/` + art.article_id}><button className='button_small vote'><i class="fas fa-book-open"></i>read more</button></Link>
        </>)


    }
}

export default HomeViewArticle