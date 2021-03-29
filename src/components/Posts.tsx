import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchPosts} from "../store/action-creators/posts";
import {useActions} from "../hooks/useActions";
import Post from "./Post";

const Posts: React.FC = () => {
    const {posts, error, loading} = useTypedSelector(state => state.posts)
    const [newPost, setNewPost] = useState({title: '', body: ''})

    const {fetchPosts} = useActions()
    const {addPost} = useActions()

    useEffect(() => {
        fetchPosts()
    }, [])

    if (loading) {
        return <h1>Loading</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    const onTitleChange = (e: any) => {
        setNewPost({title: e.currentTarget.value, body: newPost.body})
    }
    const onBodyChange = (e: any) => {
        setNewPost({title: newPost.title, body: e.currentTarget.value})
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        addPost({title: newPost.title, body: newPost.body})
        setNewPost({title: '', body: ''})
    }
    return (
        <div>
            <div>
                <form className={'form'}>
                    <input className={'form-title'} onChange={onTitleChange} autoFocus={true}
                           placeholder={'Title: what\'s on your mind?'} value={newPost.title} />
                    <input className={'form-body'} onChange={onBodyChange} autoFocus={true}
                           placeholder={'Write something about you'} value={newPost.body} />
                    <button className={'form-button'} onClick={handleSubmit}>Post</button>
                </form>
            </div>
            {posts.map(post =>
                <div key={post.id}>
                    <Post id={post.id} body={post.body} title={post.title}/>
                </div>
            )}

        </div>
    )
}

export default Posts