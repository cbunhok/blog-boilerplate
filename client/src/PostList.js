import React, { useState, useEffect } from "react";
import axios from 'axios';
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({});

    const fetchAllPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data);
    };

    useEffect(() => {
        fetchAllPosts();
    }, []);

    const renderPosts = Object.values(posts).map(post => {
        return (
            <div
                className="card"
                style={{ width: '30%', marginBottom: '20px' }}
                key={post.id}
            >
                <div className="card-body">
                    <h3>{post.id} - {post.title}</h3>
                    <CommentList postId={post.id} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-row flew-wrap justify-content-between">
            {renderPosts}
        </div>
    );
};

export default PostList;