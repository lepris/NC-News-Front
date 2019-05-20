import React from 'react';

import Skeleton from 'react-loading-skeleton';
export default function SkeletonHomeViewArticle() {
    return (
        <div className='SingleColumnContainer'>
            <div className='SingleArticleCard'>


                <div>
                    <span><Skeleton /></span>
                    <h3><Skeleton /></h3>
                    <p><Skeleton /></p>
                </div>



                <p><Skeleton /></p>



                <div>
                    <div className='HomeViewArticleLikes'>
                        <div className='Icons'><i className="fas fa-thumbs-up Teal"></i><Skeleton />   </div>
                        <div className='Icons'><i className="fas fa-comments SteelBlue"></i><Skeleton /></div>
                    </div>

                    <button className='button_small'><i className="fas fa-book-open"></i>Continue reading</button>

                </div>
            </div>
        </div>
    )
}