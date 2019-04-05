import React from 'react';
import { Link } from '@reach/router';

export const TopicPanelButton = ({ chooseTopic, topic, reload }) => {

    const handleClick = (e) => {
        e.preventDefault()
        reload(topic.slug)
        chooseTopic(topic.slug)


    }
    return <Link to={`/topics/${topic.slug}`}><button onClick={handleClick}>{topic.description}</button></Link >
}