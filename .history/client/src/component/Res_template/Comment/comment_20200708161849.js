import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentGroup, Card, Button} from 'semantic-ui-react'
import axios from 'axios'

const Interaction = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/canteens')
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
    <div>
        <div>{
            posts.map((element) => {
            if (element === "Arise and Shine")  {           
            return(
            <Card style = {{padding: '30px', border: 'thick'}}>
                <CommentGroup>
                    <Comment>
                        <Comment.Avatar  src = "/images/Deck.jpg"/>
                        <Comment.Content>
                            <Comment.Author>Tra Quang Minh Thong{element.review.user_id}<Comment.Metadata style = {{color: 'grey', display: 'inline-block'}}>2 days ago</Comment.Metadata></Comment.Author>
                            <Comment.Text>{element.review.comment}</Comment.Text>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Content>
                    </Comment>
                </CommentGroup>
                <Button>Click Here</Button>
            </Card> ) }
            }
            )}
        </div>
    </div>
    );
}
const avastyle = {
    height: '1px',
    width: '1px',
    display: 'inline-block',
    

}

export default Interaction;