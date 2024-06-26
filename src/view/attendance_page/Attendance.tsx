import React, { useEffect, useState } from "react";
import Container from "../../layout/container/Container";
import Navbar from "../../components/navbar/Navbar";
import { IStudent } from "../../interfaces/Student.interfaces";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AttendanceChart from "../../components/attendance_chart/AttendanceChart";

function Attendance() {
  const navigate = useNavigate();

  const [student, setStudent] = useState<IStudent>();
  const [index, setIndex] = useState(0);

  const studentData = localStorage.getItem("student");

  useEffect(() => {
    if (studentData) {
      const currStudent: IStudent = JSON.parse(studentData);
      setStudent(currStudent);
    }
  }, [student, studentData]);

  return (
    <Container>
      <div className="w-[95%] mx-auto h-full">
        <div className="h-[28%]">
          <Navbar title="My Attendance" />
          <div className="flex justify-between items-center mt-14">
            <span
              onClick={() => navigate(-1)}
              className="bg-[#0097DA] cursor-pointer px-7 py-3 text-white font-bold text-xl rounded-full"
            >
              Back
            </span>
            <div className="flex bg-[#DDDDDD] font-semibold text-xl items-center rounded-full">
              {student?.GPA.map((g, idx) => (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: index === idx ? 0 : 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setIndex(idx)}
                  className={`cursor-pointer rounded-full px-7 py-3 ${
                    index === idx ? "bg-[#0097DA] text-white" : ""
                  }`}
                  key={idx}
                >
                  {g.semester}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[70%] bg-white w-full rounded-3xl drop-shadow-xl shadow-xl px-7 py-5 overflow-scroll scrollbar-hidden">
          <p className="font-bold text-3xl mb-5">
            {index === 0
              ? "Attendance Statistics"
              : `${student?.attendance[index].semester} Statistics`}
          </p>
          {student?.attendance[index].details.map((detail, idx) => (
            <div className="mt-2" key={idx}>
              <p className="font-semibold text-3xl">{detail.course}</p>
              <div className="flex flex-row gap-5 mt-5 mb-10">
                <div className="w-10/12 overflow-hidden flex flex-col">
                  <AttendanceChart
                    key={index + "-" + idx + "-myGPA"}
                    attended={detail.attended}
                    mustAttend={detail.mustAttend}
                    beforeGradient="#C3EDFF"
                    afterGradient="#0097DA"
                  />
                  {(index !== 0) && (
                    ((detail.mustAttend - detail.attended) < detail.canAbsent) ? (
                      <p className="absolute right-36 text-2xl font-bold text-green-400 text-right">Eligible</p>
                    ) : ((detail.mustAttend - detail.attended) === detail.canAbsent) ? (
                      <p className="absolute right-36 text-2xl font-bold text-orange-400 text-right">Eligible</p>
                    ) : (
                      <p className="absolute right-[5.8rem] text-2xl font-bold text-red-600 text-right">Not Eligible</p>
                    )
                  )}
                  
                  {/* <p>{(detail.mustAttend - detail.attended)} {detail.canAbsent}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Attendance;
