import {VerticalTimeline, VerticalTimelineComponent } from "react-vertical-timeline-component/dist-modules/VerticalTimelineElement";
import 'react-vertical-timeline-component/style.min.css';
import {motion} from 'framer-motion';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
 
const ExperienceCard = ({ experience }) => 
 ( <VerticalTimelineElement
    contentStyle={{background:'#1d1836',color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background:experience.iconBg }}
    icon = {
      <div>
        <img src={experience.icon} alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain" />
      </div>
    }
    >
      <div> 
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3> 
      </div>
    {experience.date}
    </VerticalTimelineElement>
  )

const Experience = () => {
   (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I have done so Far?
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience,index)=>
          (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")