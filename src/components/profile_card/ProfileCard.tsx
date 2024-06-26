import React from 'react'
import { IProfileCard } from './ProfileCard.interfaces'

const ProfileCard = (props: IProfileCard) => {
  const { name, nim, picture } = props

  const handleOnclickProfile = () => {
    const redirectUrl = `https://acadservices.apps.binus.ac.id/newStudent/#/index`;
    // window.location.href = redirectUrl;
    window.open(redirectUrl, '_blank')
  }

  return (
    <div className='w-[22.5%] h-[40%] drop-shadow-lg rounded-3xl' onClick={handleOnclickProfile}>
        <img className='h-max w-max rounded-3xl' src={picture} alt=''/>
        <div className='absolute bg-[#FEFBF6] opacity-25 bottom-0 p-3 rounded-3xl rounded-t-none w-full h-[25%]'></div>
        <p className='text-3xl text-[#FFFFFF] absolute bottom-14 left-4'><b>{name}</b></p>
        <p className='text-2xl text-[#FFFFFF] absolute bottom-4 left-4 bottom-5'><b>{nim}</b></p>
    </div>
  )
}

export default ProfileCard