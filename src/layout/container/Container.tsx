import React, { Children, ReactElement, ReactHTML, ReactNode } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';

interface IContainer {
  children: ReactNode
}

const Container = (props: IContainer) => {
  const { children } = props;
  return (
    <div className='h-screen w-screen bg-[#F3F3F3] flex justify-center items-center'>
      <div className='relative h-[97vh] w-[99vw] flex'>
        <Sidebar />
        <div className='w-[95%] h-full'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container