import React, { useState } from 'react';

const AddCommentForm = ({ setArticleInfo, articleName }) => {

    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',

            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    }
    return (
        <div class="form-group">
            <label for="usr">Name:</label>
            <input type="text" class="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
            <label for="comment">Comment:</label>
            <textarea class="form-control" rows="5" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            <button class='btn btn-primary' onClick={() => addComment()}> Comment </button>
        </div>
    );
}
export default AddCommentForm;
