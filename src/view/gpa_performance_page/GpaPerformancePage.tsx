import React, { useEffect, useState } from 'react'
import Container from '../../layout/container/Container'
import Navbar from '../../components/navbar/Navbar'
import { studentData } from '../../utils/data'
import { IStudent } from '../../interfaces/Student.interfaces'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import BarChart from '../../components/bar_chart/BarChart'

const GpaPerformancePage = () => {

  const navigate = useNavigate();

  const [student, setStudent] = useState<IStudent>()
  const [index, setIndex] = useState(0);

  const studentData = localStorage.getItem('student')

  useEffect(() => {
    if (studentData) {
      const currStudent: IStudent = JSON.parse(studentData)
      setStudent(currStudent)
    }
  }, [student, studentData])

  return (
    <Container>
      <div className='w-[95%] mx-auto h-full'>
        <div className='h-[28%]'>
          <Navbar title='My GPA Performance' />
          <div className='flex justify-between items-center mt-14'>
            <span onClick={() => navigate(-1)} className='bg-[#0097DA] cursor-pointer px-7 py-3 text-white font-bold text-xl rounded-full'>Back</span>
            <div className='flex bg-[#DDDDDD] font-semibold text-xl items-center rounded-full'>
              {student?.GPA.map((g, idx) => (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: index === idx ? 0 : 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setIndex(idx)}
                  className={`cursor-pointer rounded-full px-7 py-3 ${index === idx ? 'bg-[#0097DA] text-white' : ''}`} key={idx}
                >
                  {g.semester}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className='h-[70%] bg-white w-full rounded-3xl drop-shadow-xl shadow-xl px-7 py-5 overflow-scroll scrollbar-hidden'>
          <p className='font-bold text-3xl mb-5'>{index === 0 ? 'GPA Statistics' : `${student?.GPA[index].semester} Statistics`}</p>
          {student?.GPA[index].details.map((detail, idx) => (
            <div className='mt-2' key={idx}>
              <p className='font-semibold text-3xl'>{detail.description}</p>
              <div className='flex flex-col gap-5 mt-5 mb-10'>
                <div className='w-10/12 overflow-hidden'>
                  <BarChart key={index + '-' + idx + '-myGPA'} gpa={detail.myGPA} beforeGradient='#C3EDFF' afterGradient='#0097DA' />
                  <p>My GPA</p>
                </div>
                <div className='w-10/12 overflow-hidden'>
                  <BarChart key={index + '-' + idx + '-classGPA'} gpa={detail.classGPA} beforeGradient='#C3EDFF' afterGradient='#CBA8FA' />
                  <p>My Class Average GPA</p>
                </div>
                <div className='w-10/12 overflow-hidden'>
                  <BarChart key={index + '-' + idx + '-binusGPA'} gpa={detail.binusGPA} beforeGradient='#C3EDFF' afterGradient='#F8B4B5' />
                  <p>Binus Average GPA</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default GpaPerformancePage