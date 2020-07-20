import React, { useState, useEffect } from 'react';
import NOtFoundPage from './/NotFountPage';
import UpvoteSection from '../components/UpvoteSection'
import AddCommentForm from '../components/AddCommentForm'

import CommentList from '../components/CommentList';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content'

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);


    const [articleInfo, setArticleInfo] = useState({
        upvotes: 0,
        comments: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);


    if (!article) return <NOtFoundPage />

    const OtherArticles = articleContent.filter(article => article.name !== name);
    return (
        <>
            <h1>  {article.title}  </h1> 
            <UpvoteSection upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} articleName={name} />
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}

            <CommentList comments={articleInfo.comments} />
            <AddCommentForm setArticleInfo={setArticleInfo} articleName={name}/>
            <h3>Other Articles</h3>
            <ArticlesList articles={OtherArticles} />
        </>
    );
}
export default ArticlePage;