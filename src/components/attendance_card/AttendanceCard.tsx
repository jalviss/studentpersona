import React, { useEffect, useState } from 'react'
import HalfDoughnutChart from '../half_doughnut_chart/HalfDoughnutChart'
import { IStudent } from '../../interfaces/Student.interfaces'
import { IAttendanceCard } from './AttendanceCard.interfaces'
import { useNavigate } from 'react-router-dom'

const AttendanceCard = (props: IAttendanceCard) => {
  const { student } = props;

  const [ notEligible, setNotEligible ] = useState(1)

  const navigate = useNavigate();

  useEffect(() => {
    const checkNotEligible = () => {
      let count = 0;
      student?.attendance.forEach((sem) => {
        sem.details.forEach((course) => {
          if (course.mustAttend - course.attended > course.canAbsent) {
            count += 1;
          }
        });
      });
      setNotEligible(count);
    };

    if (student) {
      checkNotEligible();
      console.log(notEligible)
    }
  }, [student, notEligible]);

  return (
    <>
      {student &&
        <div className='w-7/12 h-[21rem] bg-white drop-shadow-lg rounded-3xl'>
          <p className="px-5 pt-5 font-bold text-3xl">Attendance</p>
          <div className="flex justify-center items-center flex-col gap-5">
            <div className='w-1/2 h-1/2 mt-4'>
              <HalfDoughnutChart
                text1={`${student?.totalAttendance}%`}
                text2={ 
                  (student.totalAttendance === 100) 
                  ? 'Perfect' 
                  : (student.totalAttendance < 100 && notEligible <= 0)
                  ? 'Great'
                  : 'Poor' 
                }
                textColor={ 
                  (student.totalAttendance === 100) 
                  ? '#27BBFC' 
                  : (student.totalAttendance < 100 && notEligible <= 0)
                  ? '#30AD43' 
                  : '#FD6A1D'
                }
              />
            </div>
            <p onClick={() => navigate("/my-attendance")} className='text-[#0097DA] font-semibold text-2xl cursor-pointer mt-4'>View More</p>
          </div>
        </div>
      }
    </>
  )
}

export default AttendanceCard