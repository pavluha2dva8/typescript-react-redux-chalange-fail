export interface PostsState {
    posts: any[]
    loading: boolean
    error: null | string
}
export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    DELETE_POSTS = 'DELETE_POSTS',
    DELETE_POSTS_SUCCESS = 'DELETE_POSTS_SUCCESS',
    DELETE_POSTS_ERROR = 'DELETE_POSTS_ERROR',
    UPDATE_POSTS = 'UPDATE_POSTS',
    UPDATE_POSTS_SUCCESS = 'UPDATE_POSTS_SUCCESS',
    UPDATE_POSTS_ERROR = 'UPDATE_POSTS_ERROR',
    SET_POSTS = 'SET_POSTS',
    SET_POSTS_SUCCESS = 'SET_POSTS_SUCCESS',
    SET_POSTS_ERROR = 'SET_POSTS_ERROR',
}
interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS
}
interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS
    payload: any[]
}
interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR
    payload: string
}

interface DeletePostsAction {
    type: PostsActionTypes.DELETE_POSTS
}
interface DeletePostsSuccessAction {
    type: PostsActionTypes.DELETE_POSTS_SUCCESS
    payload: any[]
}
interface DeletePostsErrorAction {
    type: PostsActionTypes.DELETE_POSTS_ERROR
    payload: string
}

interface UpdatePostsAction {
    type: PostsActionTypes.UPDATE_POSTS
}
interface UpdatePostsSuccessAction {
    type: PostsActionTypes.UPDATE_POSTS_SUCCESS
}
interface UpdatePostsErrorAction {
    type: PostsActionTypes.UPDATE_POSTS_ERROR
    payload: string
}

interface SetPostsAction {
    type: PostsActionTypes.SET_POSTS
}
interface SetPostsSuccessAction {
    type: PostsActionTypes.SET_POSTS_SUCCESS
}
interface SetPostsErrorAction {
    type: PostsActionTypes.SET_POSTS_ERROR
    payload: string
}
interface UserAction {
    type: string
    payload?: any
}
export type PostAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction |
    DeletePostsAction | DeletePostsSuccessAction | DeletePostsErrorAction |
    UpdatePostsAction | UpdatePostsSuccessAction | UpdatePostsErrorAction |
    SetPostsAction | SetPostsSuccessAction | SetPostsErrorAction