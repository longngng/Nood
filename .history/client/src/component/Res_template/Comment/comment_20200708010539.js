import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentAvatar, CommentContent, CommentAuthor, CommentMetadata, CommentText, CommentAction} from 'semantic-ui-react'

const Interaction = () => {
    return (
        <Comment>
            <CommentAvatar style = {{width: "1px", height: "1px"}}src = "/images/Deck.jpg"/>
            <CommentContent>
                <CommentAuthor>Tra Quang Minh Thong</CommentAuthor>
                <CommentMetadata>2 days ago</CommentMetadata>
                <CommentText>Meh</CommentText>
                <CommentAction>Reply</CommentAction>
            </CommentContent>
        </Comment>
    );
}

export default Interaction;