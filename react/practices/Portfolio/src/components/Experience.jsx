import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../style';
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

const Experience = () => {
  return (
    <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
              <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>What I have done so far</p>
              <h2 className={styles.sectionHeadText}>XP</h2>
              </motion.div>

              <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                  {experiences.map((experience, index)=>(
                    <ExperienceCard key={index} experience={experience} />
                  ))}
                </VerticalTimeline>
              </div>
            </motion.section>
  )
}

export default Experience