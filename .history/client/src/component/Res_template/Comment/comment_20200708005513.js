import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentAvatar} from 'semantic-ui-react'

const Interaction = () => {
    return (
        <Comment>
            <CommentAvatar style = {{width: "1px", height: "1px"}}src = "/images/spinelli.jpg"/>

        </Comment>
    );
}

export default Interaction;