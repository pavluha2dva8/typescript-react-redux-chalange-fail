import React, {PropsWithChildren, useState} from 'react';
import {deletePost} from "../store/action-creators/posts";
import {useActions} from "../hooks/useActions";
import '../App.css'

const Post: React.FC<{ body: string, title: string, id: any }> = ({body, title, id}) => {
    const [titleEditMode, setTitleEditMode] = useState(false)
    const [bodyEditMode, setBodyEditMode] = useState(false)
    const [titleText, setTitleText] = useState(title)
    const [bodyText, setBodyText] = useState(body)

    const {deletePost} = useActions()
    const {updatePost} = useActions()
    const {fetchPosts} = useActions()

    const activateTitleEditMode = () => {
        setTitleEditMode(true)
    }
    const deactivateTitleEditMode = () => {
        setTitleEditMode(false)
        updatePost(id, {title: titleText, body: bodyText})
    }
    const activateBodyEditMode = () => {
        setBodyEditMode(true)
    }
    const deactivateBodyEditMode = () => {
        setBodyEditMode(false)
        updatePost(id, {title: titleText, body: bodyText})
    }
    const onTitleChange = (e: any) => {
        setTitleText(e.currentTarget.value)
    }
    const onBodyChange = (e: any) => {
        setBodyText(e.currentTarget.value)
    }

    return (
        <div id={id} className={'post'}>
            {!titleEditMode &&
            <div className={'post-title'}>
                <span onDoubleClick={activateTitleEditMode}>{title || 'Edit Status'}</span>
            </div>
            }
            { titleEditMode &&
            <div>
                <input onChange={onTitleChange} autoFocus={true}
                       onBlur={deactivateTitleEditMode} value={titleText} />
            </div>
            }
            {!bodyEditMode &&
            <div className={'post-body'}>
                <span onDoubleClick={activateBodyEditMode}>{body || 'Edit Status'}</span>
            </div>
            }
            { bodyEditMode &&
            <div>
                <input onChange={onBodyChange} autoFocus={true}
                       onBlur={deactivateBodyEditMode} value={bodyText} />
            </div>
            }


            <button className={'post-button'} onClick={() => deletePost(id)}>Delete</button>
        </div>
    )
}

export default Post