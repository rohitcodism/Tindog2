import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
import { github} from "../assets";
import { projects} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const Works = () => {
  return (
        <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
              <>
                <motion.div
                variants={textVariant()}
                >
                  <p className={styles.sectionSubText}> My works</p>
                  <h2 className={styles.sectionHeadText}>Projects</h2>
                </motion.div>

                <div className="w-full flex">
                  <motion.p variants={fadeIn()}>

                  </motion.p>
                </div>
              </>
            </motion.section>
  )
}

export default Works