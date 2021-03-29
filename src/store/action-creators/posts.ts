import {PostAction, PostsActionTypes} from "../../types/posts";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            const response = await axios.get('https://bloggy-api.herokuapp.com/posts')
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: PostsActionTypes.FETCH_POSTS_ERROR,
                payload: 'Error'
            })
        }
    }
}

export const deletePost = (id: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostsActionTypes.DELETE_POSTS})
            const response = await axios.delete(`https://bloggy-api.herokuapp.com/posts/${id}`)
            const data = await axios.get('https://bloggy-api.herokuapp.com/posts')
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: data.data})
            dispatch({type: PostsActionTypes.DELETE_POSTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: PostsActionTypes.DELETE_POSTS_ERROR,
                payload: 'Error'
            })
        }
    }
}

export const updatePost = (id: any, body: any) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostsActionTypes.UPDATE_POSTS})
            const response = await axios.put(`https://bloggy-api.herokuapp.com/posts/${id}`, body)
            const data = await axios.get('https://bloggy-api.herokuapp.com/posts')
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: data.data})
            dispatch({type: PostsActionTypes.UPDATE_POSTS_SUCCESS})
        } catch (e) {
            console.log('errora')
            dispatch({
                type: PostsActionTypes.UPDATE_POSTS_ERROR,
                payload: e
            })
        }
    }
}

export const addPost = (body: any) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostsActionTypes.SET_POSTS})
            const response = await axios.post('https://bloggy-api.herokuapp.com/posts', body)
            dispatch({type: PostsActionTypes.SET_POSTS_SUCCESS, payload: response.data})
            const data = await axios.get('https://bloggy-api.herokuapp.com/posts')
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: data.data})
        } catch (e) {
            dispatch({
                type: PostsActionTypes.SET_POSTS_ERROR,
                payload: 'Error'
            })
        }
    }
}