import * as PostsActionCreators from './posts'
import * as CommentsActionCreators from './comments'

export default {
    ...PostsActionCreators,
    ...CommentsActionCreators
}