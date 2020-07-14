import React, {useEffect, useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Comment, CommentGroup, Card, Form, Header, Checkbox,Button} from 'semantic-ui-react'
import axios from 'axios'
import {Input} from 'antd'
import { useSelector } from 'react-redux';

const {TextArea } = Input
function Comments(props) {
  const user = useSelector(state => state.user)
  const [Comment, setComment] = useState("")

  const handleChange = (e) => {
      setComment(e.currentTarget.value)
  }

  const onSubmit = (e) => {
      e.preventDefault();

      const variables = { 
          content: Comment,
          writer: user.userData._id,
          postId: props.postId   
       }

      axios.post('/api/comment/saveComment', variables)
      .then(response=> {
          if(response.data.success) {
              setComment("")
              props.refreshFunction(response.data.result)
          } else {
              alert('Failed to save Comment')
          }
      })
  }

  return (
      <div>
          <br />
          <p> replies</p>
          <hr />
          {/* Comment Lists  */}
          {console.log(props.CommentLists)}

          {/* Root Comment Form */}
          <form style={{ display: 'flex' }} onSubmit={onSubmit}>
              <TextArea
                  style={{ width: '100%', borderRadius: '5px' }}
                  onChange={handleChange}
                  value={Comment}
                  placeholder="write some comments"
              />
              <br />
              <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
          </form>

      </div>
  )
}

export default Comments