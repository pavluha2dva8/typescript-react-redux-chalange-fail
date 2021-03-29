import {PostAction, PostsActionTypes, PostsState} from "../../types/posts";

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null
}

export const postsReducer = (state = initialState, action: PostAction): PostsState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {loading: true, error: null, posts: []}
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {loading: false, error: null, posts: action.payload}
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {loading: false, error: action.payload, posts: []}

        case PostsActionTypes.DELETE_POSTS:
            return {loading: true, error: null, posts: []}
        case PostsActionTypes.DELETE_POSTS_SUCCESS:
            return {loading: false, error: null, posts: state.posts.filter(post => post.id !== action.payload)}
        case PostsActionTypes.DELETE_POSTS_ERROR:
            return {loading: false, error: action.payload, posts: []}

        case PostsActionTypes.UPDATE_POSTS:
            return {loading: true, error: null, posts: []}
        case PostsActionTypes.UPDATE_POSTS_SUCCESS:
            return {...state, loading: false}
            // return {loading: false, error: null, posts: [...state.posts]}
        case PostsActionTypes.UPDATE_POSTS_ERROR:
            return {loading: false, error: action.payload, posts: []}

        case PostsActionTypes.SET_POSTS:
            return {loading: true, error: null, posts: []}
        case PostsActionTypes.SET_POSTS_SUCCESS:
            return {...state, loading: false}
        // return {loading: false, error: null, posts: [...state.posts]}
        case PostsActionTypes.SET_POSTS_ERROR:
            return {loading: false, error: action.payload, posts: []}
        default:
            return state
    }
}