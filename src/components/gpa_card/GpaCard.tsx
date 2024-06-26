import { useNavigate } from "react-router-dom";
import HalfDoughnutChart from "../half_doughnut_chart/HalfDoughnutChart";
import { IStudent } from "../../interfaces/Student.interfaces";
import { IGpaCard } from "./GpaCard.interfaces";
import { useEffect, useState } from "react";

const GpaCard = (props: IGpaCard) => {
  const { student } = props;

  const navigate = useNavigate();

  return (
    <>
      {student && (
        <div className="w-1/2 h-[21rem] bg-white drop-shadow-lg rounded-3xl">
          <p className="px-5 pt-5 font-bold text-3xl">GPA</p>
          <div className="flex justify-center items-center flex-col gap-5">
            <div className="w-1/2 h-1/2 mt-4">
              <HalfDoughnutChart
                text1={student.cummulativeGPA.toString()}
                text2={
                  student.cummulativeGPA >= 3.91 && student.cummulativeGPA <= 4
                    ? "Excellence"
                    : student.cummulativeGPA >= 3.76 && student.cummulativeGPA <= 3.9
                    ? "Very Good"
                    : student.cummulativeGPA >= 3.51 && student.cummulativeGPA <= 3.75
                    ? "Good"
                    : student.cummulativeGPA >= 3.00 && student.cummulativeGPA <= 3.50
                    ? "Commendable"
                    : student.cummulativeGPA >= 2.00 && student.cummulativeGPA <= 2.99
                    ? "Noteworthy"
                    : student.cummulativeGPA >= 1.00 && student.cummulativeGPA <= 1.99
                    ? "Poor"
                    : "Fail"
                }
                textColor={
                  student.cummulativeGPA === 4 
                  ? "#30AD43" 
                  : student.cummulativeGPA >= 3.76 && student.cummulativeGPA <= 3.9
                  ? "#61E01F"
                  : student.cummulativeGPA >= 3.51 && student.cummulativeGPA <= 3.75
                  ? "#C5EE2A"
                  : student.cummulativeGPA >= 3.00 && student.cummulativeGPA <= 3.50
                  ? "#FDDA2D"
                  : student.cummulativeGPA >= 2.00 && student.cummulativeGPA <= 2.99
                  ? "#FA2716"
                  : student.cummulativeGPA >= 1.00 && student.cummulativeGPA <= 1.99
                  ? "#FD6A1D"
                  : "#FDB328"}
              />
            </div>
            <p
              onClick={() => navigate("/gpa-performance")}
              className="text-[#0097DA] font-semibold text-2xl cursor-pointer mt-4"
            >
              View More
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GpaCard;
