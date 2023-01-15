import React from 'react'
import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

//styles

import './Dashboard.css'
import ProjectFilter from './ProjectFilter'
import ProjectList from '../../componenets/ProjectList'



export default function Dashboard() {
  const {documents, error} = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')
  const {user} = useAuthContext()

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }

  const projects = documents ? documents.filter((document) => {
    switch (currentFilter){
      case 'all':
        return true
      case 'mine':
        let assignedToMe = false
        document.assignedUsersList.forEach((u) => {
          if (user.uid === u.id) {
            assignedToMe = true
          }
        })
        return assignedToMe
      case 'development':
      case 'design':
      case 'sales':
      case 'marketing':
        return document.catagory === currentFilter 
      default:
        return true
        
    }
  }) : null

  return (
    <div>
      <h2 className='page-title'></h2>
      {error && <p className='error'>{error}</p>}
      {documents && 
      <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter}/>
      }
      {projects && <ProjectList projects={projects} />}

    </div>
  )
}
