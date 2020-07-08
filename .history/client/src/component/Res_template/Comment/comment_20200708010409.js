import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentAvatar, CommentContent, CommentAuthor, CommentMetadata, CommentText, CommentAction} from 'semantic-ui-react'

const Interaction = () => {
    return (
        <Comment>
            <Comment.Avatar style = {{width: "1px", height: "1px"}}src = "/images/Deck.jpg"/>
            <CommentContent>
                <CommentAuthor></CommentAuthor>
                <CommentMetadata></CommentMetadata>
                <CommentText></CommentText>
                <CommentAction></CommentAction>
            </CommentContent>
        </Comment>
    );
}

export default Interaction;