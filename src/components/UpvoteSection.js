import React from 'react';

const UpvoteSection = ({ upvotes, setArticleInfo, articleName }) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvotes`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return (
        <div>
            <button class='btn btn-primary' onClick={() => upvoteArticle()}> Upvote</button>
            <p>This article upvotes is {upvotes} times</p>

        </div>
    );
}

export default UpvoteSection;
