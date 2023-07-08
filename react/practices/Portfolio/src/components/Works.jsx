import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
import { github} from "../assets";
import { projects} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt
        options={{
        max: 45,
        scale: 1,
        speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt="name" className="w-full h-full object-cover rounded-2xl"/>
        </div>
      </Tilt>
    </motion.div>
  );
}

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
                  <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Explore a showcase of my diverse portfolio, featuring a collection of visually stunning and interactive websites and user interfaces I've designed and developed. From sleek corporate websites to engaging e-commerce platforms, browse through my projects to witness the seamless fusion of captivating design and cutting-edge frontend development and UI designing.
                  </motion.p>
                </div>

                <div className="mt-20 flex flex-wrap gap-7">
                  {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                  ))}
                </div>
              </>
            </motion.section>
  )
}

export default Works