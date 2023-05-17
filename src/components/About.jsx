import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({ index, title,icon }) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">{title}
      <motion.div 
      variants={fadeIn("right","spring",0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-teritary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
      Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview
      </h2>
    </motion.div>
    <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        A skilled software developer with experience in Python backend development using frameworks such as Flask and Django. With a background in creating efficient data science tools using the pandas library and experience in building robust backends with Django REST framework, I bring a diverse skill set to every project. I'm passionate about learning and recently ventured into React to expand my horizons in web-development. Explore my website to learn more about my work and how I can bring innovative solutions to your projects. 
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index = {index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")