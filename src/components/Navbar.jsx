import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-amber-100 p-5  flex justify-between items-center pr-15'>
      <h1 className='text-2xl font-bold'>My Dev Space</h1>
      <div className='flex gap-5 text-lg font-bold'>
        <span>Home</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Experience</span>
        <span>Certificates</span>
        <span>Journey</span>
        <span>Contact</span>
      </div>

    </div>
  )
}

export default Navbar