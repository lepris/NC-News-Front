import React from "react";

import SkeletonHomeViewArticle from "./SkeletonHomeViewArticle";


import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './HomeView.css'

export default function SkeletonHomeView() {






    return (
        <SkeletonTheme color="#0A3741" highlightColor="#3E92AE">

            <div className='HeroArticlesView textContourShadow'>
                <h1 ><Skeleton /></h1>
                <h4 className='Tan'><Skeleton /></h4>


                <div className='PaginationContainer'>
                    <button><Skeleton /></button>
                    <button><Skeleton /></button>
                    <button><Skeleton /></button>
                    <button><Skeleton /></button>
                </div>
            </div>

            <div className='ArticlesContainer'>
                <SkeletonHomeViewArticle />
                <SkeletonHomeViewArticle />
                <SkeletonHomeViewArticle />
                <SkeletonHomeViewArticle />
                <SkeletonHomeViewArticle />
                <SkeletonHomeViewArticle />


            </div>

        </SkeletonTheme>
    );
}



