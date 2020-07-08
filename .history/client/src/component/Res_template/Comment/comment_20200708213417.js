import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentGroup, Card, Button, Form} from 'semantic-ui-react'
import axios from 'axios'

const Interaction = () => {
    const [posts,setPosts] = useState([]);
    const [post,setPost] = useState([[]]);
    useEffect(() => {
        axios.get('http://localhost:5000/canteens')
            .then(res => {
                console.log(res);
                setPosts(res.data);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
    <div>
        <div>{
            posts.map((element) => {
            if (element.name === "Arise and Shine")  {           
            return(
            // let e = element.review;
            // post.map((e) => {
            // return (
            <Card style = {{padding: '10px', border: 'thick', display: 'absolute', width: '100%', minheight: '68.5vh'}}>
                <CommentGroup>
                    <Comment>
                        <Comment.Avatar  src = "/images/Deck.jpg"/>
                        <Comment.Content style = {{textalign: "left"}}>
                            <Comment.Author>Tra Quang Minh Thong{element.user_id}</Comment.Author>
                            <Comment.Metadata style = {{color: 'grey'}}>2 days ago</Comment.Metadata>
                            <Comment.Text>Meh, not good!{element.comment}</Comment.Text>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Content>
                    </Comment>
                </CommentGroup>
                <CommentGroup>
                    <Comment>
                        <Comment.Avatar  src = "/images/Deck.jpg"/>
                        <Comment.Content style = {{textalign: "left"}}>
                            <Comment.Author>Tra Quang Minh Thong{element.user_id}</Comment.Author>
                            <Comment.Metadata style = {{color: 'grey'}}>2 days ago</Comment.Metadata>
                            <Comment.Text>Meh, not good!{element.comment}</Comment.Text>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Content>
                    </Comment>
                </CommentGroup>
                
                {/* <Button>Click Here</Button> */}
                {/* <Button icon = "angle double down"></Button> */}
            <Comment.Group>
            <Comment>
              <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Steve Jobes</Comment.Author>
                <Comment.Metadata>
                  <div>2 days ago</div>
                </Comment.Metadata>
                <Comment.Text>Revolutionary!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action active>Reply</Comment.Action>
                </Comment.Actions>
                <Form reply>
                  <Form.TextArea />
                  <Button
                    content='Add Reply'
                    labelPosition='left'
                    icon='edit'
                    primary
                  />
                </Form>
              </Comment.Content>
            </Comment>
          </Comment.Group>
          </Card>
            )
            }
            } ) } 
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