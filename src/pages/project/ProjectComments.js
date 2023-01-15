import React from 'react'
import { useState } from 'react'
import Avatar from '../../componenets/Avatar'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


//style
import './Project.css'



export default function ProjectComments({project}) {
    const {updateDocument, response} = useFirestore('projects')
    const [newComment, setNewComment] = useState('')
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const commentToAdd = {
            displayName: user.displayName,
            phototURL: user.photoURL,
            content: newComment,
            createdAt: timestamp.fromDate(new Date()),
            id: Math.random()
        }

        await updateDocument(project.id, {
            comments: [...project.comments, commentToAdd]
        })
        if(!response.error) {
            setNewComment('')
        }
        console.log(newComment)
    }


  return (
    <div className='project-comments'>
        <h4>Project Comments</h4>

        <ul>
        {project.comments.length > 0 && project.comments.map(comment => (
          <li key={comment.id}>
            <div className="comment-author">
              <Avatar src={comment.photoURL} />
              <p>{comment.displayName}</p>
            </div>
            <div className="comment-date">
              <p>{formatDistanceToNow(comment.createdAt.toDate(), {addSuffix: true})}</p>
            </div>
            <div className="comment-content">
              <p>{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>

        <form className='add-comment' onSubmit={handleSubmit}>
            <label>
                <span>Add New Comments</span>
                <textarea
                    required
                    onChange={(e) => setNewComment(e.target.value) }
                    value={newComment}
                />
            </label>
            <button className='btn'>Add</button>
        </form>

    </div>
  )
}
