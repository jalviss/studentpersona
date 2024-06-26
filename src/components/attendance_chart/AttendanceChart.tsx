import React from 'react';
import { IAttendanceChart } from './AttendanceChart.interfaces';
import { motion } from 'framer-motion';

const AttendanceChart = (props: IAttendanceChart) => {
  const { attended, mustAttend, afterGradient, beforeGradient } = props

  const maxValue = mustAttend;
  const widthPercentage = (attended / maxValue) * 100 + '%';

  const gradientStyle = {
    background: `linear-gradient(to right, ${beforeGradient}, ${afterGradient})`,
  };

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 1 }}
      className='text-black py-2 px-4 rounded-full text-right font-semibold text-xl'
      style={{ width: widthPercentage, ...gradientStyle }}
    >
      {attended}/{mustAttend}
    </motion.div>
  );
};

export default AttendanceChart;
