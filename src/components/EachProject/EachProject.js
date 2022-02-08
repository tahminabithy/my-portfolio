import React from 'react'
import './EachProject.css'
const EachProject = ({ project }) => {
  const { name, id, img, details, tool } = project

  return (
    <div className='col-lg-4 col-md-4 col-12 '>
      <div className='project-bg p-5'>
        <h2 className='font-style fs-5 text-white'>{name}</h2>
        <img className='img-fluid project-img pt-3' src={img} alt='' />
        <div className='d-flex justify-content-between mt-4'>
          <a href=''>
            <i class='fas fa-play-circle text-white icon-bg p-3 rounded-circle'></i>
          </a>
          <a href='https://github.com/tahminabithy?tab=repositories'>
            <i class='fas fa-code  text-white icon-bg p-3 rounded-circle'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default EachProject
