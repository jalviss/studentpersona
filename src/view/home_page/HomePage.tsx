import React, { useEffect, useState } from "react";
import Container from "../../layout/container/Container";
import Navbar from "../../components/navbar/Navbar";
import CalendarCard from "../../components/calendar_card/CalendarCard";
import { IStudent } from "../../interfaces/Student.interfaces";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../../components/profile_card/ProfileCard";
import ClassCard from "../../components/class_card/ClassCard";

const HomePage = () => {
  const [student, setStudent] = useState<IStudent>();

  const navigate = useNavigate();

  const studentData = localStorage.getItem("student");

  useEffect(() => {
    if (studentData) {
      const currStudent: IStudent = JSON.parse(studentData);
      setStudent(currStudent);
      console.log(student)
    } else {
      navigate("/login");
    }
  }, [student, studentData]);

  return (
    <Container>
      <div className="w-[95%] mx-auto h-full">
        <div className="">
          <Navbar title="Home" />
        </div>
        <div className="flex gap-16">
          <CalendarCard />
          <ProfileCard
            name={student?.name}
            nim={student?.nim}
            picture={student?.avatar}
          />
        </div>
        <div className="w-full h-[38%] bg-white drop-shadow-lg shadow-xl rounded-3xl flex items-center justify-center flex-col px-8 py-6 mt-7">
          <div className="w-full h-full px-4">
            <p className="text-left font-bold text-3xl">My Classes</p>
            <div className="w-full h-[95%] flex flex-row gap-5 overflow-x-auto scrollbar-hidden px-12">
              {
                student?.classes.map((g, i) => (
                  <ClassCard instructorAvatar={g.instructorAvatar} instructor={g.instructor} course={g.course} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
