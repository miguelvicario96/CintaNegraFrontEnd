import React, { Fragment, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const { isAuth, user } = useContext(AuthContext);
    if (!isAuth) return <Redirect to = "/login" />

    const getPosts = async () => {
        const postsURI = `${process.env.REACT_APP_BASE_URL}/users/${user.id}/posts`;
        const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };

        await axios.get(postsURI, config)
        .then((res) => {
          if (res.status === 200) {
            setPosts(res.data);
          }
        })
        .catch((error) => {
          alert(error);
        });
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <Fragment>
            <h1>Lista de Posts</h1>
            <ul>
                { posts.map((post) => {
                    return (
                        <div>
                            <li>{post.title}</li>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default Posts
