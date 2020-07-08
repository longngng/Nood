import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentAvatar} from 'semantic-ui-react'

const Interaction = () => {
    return (
        <Comment>
            <CommentAvatar style = {{width: "1%", height: "1%"}}src = "/images/about.jpg"/>

        </Comment>
    );
}

export default Interaction;