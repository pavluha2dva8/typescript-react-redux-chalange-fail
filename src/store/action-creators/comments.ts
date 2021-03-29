import {Dispatch} from "redux";
import axios from "axios";
import {CommentsAction, CommentsActionTypes} from "../../types/comments";


export const fetchComments = () => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS})
            const response = await axios.get('https://bloggy-api.herokuapp.com/posts/1?_embed=comments')
            dispatch({type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
                payload: 'Error'
            })
        }
    }
}