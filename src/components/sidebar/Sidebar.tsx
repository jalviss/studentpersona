import React, { useState } from 'react'
import HomeIcon from '../../assets/icon/home-icon.png'
import DashboardIcon from '../../assets/icon/dashboard-icon.png'
import SettingIcon from '../../assets/icon/setting-icon.png'
import LogoutIcon from '../../assets/icon/logout-icon.png'
import { useNavigate } from 'react-router-dom'
import { LogoutModal } from '../logout_modal/LogoutModal'

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate();

  const handleLogout = () => {
    // setShowModal(true)
    localStorage.clear();
    navigate('/login');
  }

  const handleConfirmLogout = () => {
    localStorage.clear();
    setShowModal(!showModal);
    navigate('/login');
  }

  return (
    <div className='w-[5%] h-full bg-[#0097DA] rounded-3xl'>
      <div className='h-full justify-between flex flex-col items-center'>
        <div className='mt-12 flex flex-col items-center gap-6'>
          <p onClick={() => navigate("/")} className='font-bold text-white text-lg text-center cursor-pointer'>Persona.</p>
          <img src={HomeIcon} onClick={() => navigate("/")} className='w-12 cursor-pointer' alt="" />
          <img src={DashboardIcon} onClick={() => navigate("/dashboard")} className='w-10 cursor-pointer' alt="" />
        </div>
        <div className='mb-12 flex flex-col items-center gap-7'>
          <img src={LogoutIcon} onClick={handleLogout} className='w-12 cursor-pointer' alt="" />
        </div>
      </div>
      {/* {showModal && (
          <LogoutModal onCancel={() => setShowModal(!showModal)} onConfirm={handleConfirmLogout}/>
        )
      } */}
    </div>
  )
}

export default Sidebar