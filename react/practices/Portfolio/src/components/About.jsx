import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { style } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div>
        <p className="">Introduction</p>
        <h2>Overview.</h2>
      </motion.div>
    </>
  )
}

export default About