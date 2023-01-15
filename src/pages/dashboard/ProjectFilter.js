import React from 'react'
import Dashboard from './Dashboard'
//style
import './Dashboard.css'


const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

export default function ProjectFilter({currentFilter, changeFilter}) {

    const handleClick = (newFilter) => {
        changeFilter(newFilter)
        
    }
  return (
    <div className='project-filter'>
        <nav>
            Filter by:
            {filterList.map((f) => (
                <button key={f} 
                onClick={() => handleClick(f)}
                className={currentFilter === f ? 'active' : ''}
                >
                    {f}
                </button>
            ))}
        </nav>

    </div>
  )
}
