import React from 'react'
import { INavbar } from './Navbar.interfaces'

const Navbar = (props: INavbar) => {
  const { title } = props
  return (
    <div className='w-full h-24 bg-white drop-shadow-lg rounded-3xl flex items-center px-10 mb-5'>
      <p className='font-bold text-4xl'>{title}</p>
    </div>
  )
}

export default Navbar