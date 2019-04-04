import React from 'react';
import { Link } from '@reach/router';

export const TopicPanelButton = ({ chooseTopic, topic, reload }) => {
    const handleClick = (e) => {
        e.preventDefault()
        reload(topic)
        chooseTopic(topic)

    }
    return <button onClick={handleClick}><Link to={`/topics/${topic}`}>{topic}</Link></button >
}