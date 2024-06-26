import React from "react";
import { IClassCard } from "./ClassCard.interfaces";

const ClassCard = (props: IClassCard) => {
  const { instructorAvatar, instructor, course } = props;

  const handleClickClass = () => {
    const redirectUrl = `https://newbinusmaya.binus.ac.id/lms/course/`;
    // window.location.href = redirectUrl;
    window.open(redirectUrl, "_blank");
  };

  return (
    <div
      className="w-[260px] h-[220px] bg-white drop-shadow-2xl rounded-3xl flex items-center justify-center flex-col px-5 py-5 mt-4"
      onClick={handleClickClass}
    >
      <div className="w-[260px] flex items-center justify-center flex-col">
        <img className="rounded-full w-[53%]" src={instructorAvatar} alt="" />
        <p className="font-bold mt-3 text-base">{course}</p>
        <p className="font-semibold mt-1">{instructor}</p>
      </div>
    </div>
  );
};

export default ClassCard;
