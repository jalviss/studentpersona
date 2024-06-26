import Container from '../../layout/container/Container'
import Navbar from '../../components/navbar/Navbar'
import GpaCard from '../../components/gpa_card/GpaCard'
import AttendanceCard from '../../components/attendance_card/AttendanceCard'
import { studentData } from '../../utils/data'
import SatCard from '../../components/sat_card/SatCard'
import ComservCard from '../../components/comserv_card/ComservCard'
import { useEffect, useState } from 'react'
import { IStudent } from '../../interfaces/Student.interfaces'

const DashboardPage = () => {
  const [student, setStudent] = useState<IStudent>()

  const studentData = localStorage.getItem('student')

  useEffect(() => {
    if (studentData) {
      const currStudent: IStudent = JSON.parse(studentData)
      setStudent(currStudent)
      
    }
  }, [])
  console.log(student)

  return (
    <Container>
      <div className='w-[95%] mx-auto h-full'>
        <Navbar title='My Statistics' />
        <div className='flex gap-10 mt-10'>
          <GpaCard student={student} />
          <AttendanceCard student={student} />
        </div>
        <div className='flex gap-10 mt-9'>
          <SatCard student={student} />
          <ComservCard student={student} />
        </div>
      </div>
    </Container>
  )
}

export default DashboardPage