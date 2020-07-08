import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentGroup, Card, Button, Form, Header} from 'semantic-ui-react'
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
    // <div>
    //     <div>{
    //         posts.map((element) => {
    //         if (element.name === "Arise and Shine")  {           
    //         return(
    //         // let e = element.review;
    //         // post.map((e) => {
    //         // return (
    //         <Card style = {{padding: '10px', border: 'thick', display: 'absolute', width: '100%', minheight: '68.5vh'}}>
    //             <CommentGroup>
    //                 <Comment>
    //                     <Comment.Avatar  src = "/images/Deck.jpg"/>
    //                     <Comment.Content style = {{textalign: "left"}}>
    //                         <Comment.Author>Tra Quang Minh Thong{element.user_id}</Comment.Author>
    //                         <Comment.Metadata style = {{color: 'grey'}}>2 days ago</Comment.Metadata>
    //                         <Comment.Text>Meh, not good!{element.comment}</Comment.Text>
    //                         <Comment.Action>Reply</Comment.Action>
    //                     </Comment.Content>
    //                 </Comment>
    //             </CommentGroup>
    //             <CommentGroup>
    //                 <Comment>
    //                     <Comment.Avatar  src = "/images/Deck.jpg"/>
    //                     <Comment.Content style = {{textalign: "left"}}>
    //                         <Comment.Author>Tra Quang Minh Thong{element.user_id}</Comment.Author>
    //                         <Comment.Metadata style = {{color: 'grey'}}>2 days ago</Comment.Metadata>
    //                         <Comment.Text>Meh, not good!{element.comment}</Comment.Text>
    //                         <Comment.Action>Reply</Comment.Action>
    //                     </Comment.Content>
    //                 </Comment>
    //             </CommentGroup>
                
    //             {/* <Button>Click Here</Button> */}
    //             {/* <Button icon = "angle double down"></Button> */}
    //         <Comment.Group>
    //         <Comment>
    //           <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
    //           <Comment.Content>
    //             <Comment.Author as='a'>Steve Jobes</Comment.Author>
    //             <Comment.Metadata>
    //               <div>2 days ago</div>
    //             </Comment.Metadata>
    //             <Comment.Text>Revolutionary!</Comment.Text>
    //             <Comment.Actions>
    //               <Comment.Action active>Reply</Comment.Action>
    //             </Comment.Actions>
    //             <Form reply>
    //               <Form.TextArea />
    //               <Button
    //                 content='Add Reply'
    //                 labelPosition='left'
    //                 icon='edit'
    //                 primary
    //               />
    //             </Form>
    //           </Comment.Content>
    //         </Comment>
    //       </Comment.Group>
    //       </Card>
    //         )
    //         }
    //         } ) } 
    //     </div>
    // </div>
    <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
    );
}
const avastyle = {
    height: '1px',
    width: '1px',
    display: 'inline-block',
    

}

export default Interaction;