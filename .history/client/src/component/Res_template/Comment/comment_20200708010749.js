import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentAvatar, CommentContent, CommentAuthor, CommentMetadata, CommentText, CommentAction} from 'semantic-ui-react'

const Interaction = () => {
    return (
        <Comment>
            <Comment.Avatar style = {{width: "1px", height: "1px"}}src = "/images/Deck.jpg"/>
            <Comment.Content>
                <Comment.Author>Tra Quang Minh Thong</Comment.Author>
                <Comment.Metadata>2 days ago</Comment.Metadata>
                <Comment.Text>Meh</Comment.Text>
                <Comment.Action>Reply</Comment.Action>
            </Comment.Content>
        </Comment>
    );
}

export default Interaction;