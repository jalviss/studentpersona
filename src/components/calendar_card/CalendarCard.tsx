import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarCard = () => {
  const [value, setValue] = useState<Value>(new Date());

  const handleDateChange = (date: Value) => {
    setValue(date);

    if (date && !(date instanceof Array)) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formattedDate = `${year}-${month}-${day}`;

      const redirectUrl = `https://newbinusmaya.binus.ac.id/lms/schedule/${formattedDate}`;
      // window.location.href = redirectUrl;
      window.open(redirectUrl, '_blank')
  
    }
  };

  return (
    <div className='w-9/12 h-[70%] bg-white drop-shadow-lg rounded-3xl flex items-center justify-center flex-col px-8 py-7'>
      <div className='w-full h-full'>
        <p className='text-left mb-6 font-bold text-3xl px-5'>Calendar</p>
      </div>
      <div className='w-full px-5'>
        <Calendar onChange={handleDateChange} value={value} />
      </div>
    </div>
  );
};

export default CalendarCard;
