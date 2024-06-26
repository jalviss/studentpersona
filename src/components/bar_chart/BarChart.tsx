import React from 'react';
import { IBarChart } from './BarChart.interfaces';
import { motion } from 'framer-motion';

const BarChart = (props: IBarChart) => {
  const { gpa, afterGradient, beforeGradient } = props

  const maxValue = 4;
  const widthPercentage = (gpa / maxValue) * 100 + '%';

  const gradientStyle = {
    background: `linear-gradient(to right, ${beforeGradient}, ${afterGradient})`,
  };

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 1 }}
      className='text-black py-2 px-4 rounded-full text-right font-semibold'
      style={{ width: widthPercentage, ...gradientStyle }}
    >
      {gpa}
    </motion.div>
  );
};

export default BarChart;
