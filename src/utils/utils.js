import React from 'react';
export const dateFinder = (timestamp) => {

    const createdWhen = new Date(timestamp)

    const date = createdWhen.getDate()
    const month = createdWhen.getMonth() + 1
    const year = createdWhen.getFullYear()


    return (
        <div>
            <i className="fas fa-calendar-day ArticleDate"></i>{`${date} / ${month} / ${year}`}
        </div>
    )
}