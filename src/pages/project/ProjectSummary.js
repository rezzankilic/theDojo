import React from 'react'
import Avatar from '../../componenets/Avatar'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

//styles
import './Project.css'



export default function ProjectSummary({project}) {
    const {deleteDocument, response} = useFirestore('projects')
    const {user} = useAuthContext()
    const navigate = useNavigate()

    const handleClick = async(e) => {
        e.preventDefault();
        deleteDocument(project.id)
        navigate('/')
    }


  return (
    <div>
        <div className='project-summary'> 
            <h2 className='page-title'>{project.name}</h2>
            <p>Created by {project.createdBy.displayName}</p>
            <p className='due-date'>
                Project due date {project.dueDate.toDate().toDateString()}
            </p>
            <p className='details'>
                {project.details}
            </p>
            <h4 >Project is assigned to:</h4>
            <div className='assigned-users'>
                {project.assignedUsersList.map((user) => (
                    <div key={user.id}> 
                        <Avatar src={user.photoURL}/>
                        <div className='user-name'>
                            {user.displayName}
                        </div>
                    </div>
                ))}
            </div>
            {project.createdBy.id === user.uid && (
            <button className='btn' onClick={handleClick}>Mark as complete</button>)}
        </div>
    </div>
  )
}
