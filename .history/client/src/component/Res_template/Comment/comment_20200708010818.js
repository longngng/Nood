import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
import {Comment} from 'semantic-ui-react'

const Interaction = () => {
    return (
        <Comment>
            <Comment.Avatar src = "/images/Deck.jpg"/>
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