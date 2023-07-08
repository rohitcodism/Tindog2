import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

const ExperienceCard = ({experience}) => {
  return(
    <VerticalTimelineElement
      contentStyle={{background: "#1d1836", color: "fff"}}
      contentArrowStyle={{borderRight: "7px solid #232631"}}
      date={experience.date}
      iconStyle={{background: experience.iconBg}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
    </VerticalTimelineElement>
  );
}

const Experience = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant}>
      <p className={styles.sectionSubText}>What I have done</p>
      <h2 className={styles.sectionHeadText}>XP</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index)=>(
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  )
}

export default Experience;