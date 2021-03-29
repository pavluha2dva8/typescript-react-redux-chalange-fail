import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const Comments: React.FC = () => {
    const {comments, error, loading} = useTypedSelector(state => state.comments)
    // const {fetchComments} = useActions()
    console.log(comments)
    // useEffect(() => {
    //     fetchComments()
    // }, [])

    if (loading) {
        return <h1>Loading</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {/*{comments.map(comment =>*/}
            {/*<div key={comment.comments.id}>{comment.comments.body}</div>*/}
            {/*)}*/}
            {/*{comments}*/}
        </div>
    )
}

export default Comments