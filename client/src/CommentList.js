import React, { useState, useEffect } from "react";
import axios from 'axios';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState({});

    const fetchAllComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        console.log('ddd:', res.data);

        setComments(res.data);
    };

    useEffect(() => {
        fetchAllComments();
    }, []);

    const renderComments = Object.values(comments).map(comment => {
        return (
            <li key={comment.id}>{comment.content}</li>
        );
    });

    return (
        <div>
            <ul>
                {renderComments}
            </ul>
        </div>
    );
};

export default CommentList;