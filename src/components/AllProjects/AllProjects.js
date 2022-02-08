import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EachProject from '../EachProject/EachProject'
import './AllProjects.css'
const AllProjects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('/projectData.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
  })
  return (
    <div>
      <div className='allProject-bg p-5 '>
        <Link to='/home'>
          <div className='d-flex justify-content-start '>
            <i class='fas fa-home p-2 home-btn-style  rounded-circle'></i>
          </div>
        </Link>

        <h1 className='text-white project-header'>All Projects</h1>
      </div>
      <div className='container py-5'>
        <div className='row g-5'>
          {projects.map((project) => (
            <EachProject key={project.id} project={project}></EachProject>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProjects
