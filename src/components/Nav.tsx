import { motion } from 'framer-motion'
import React from 'react'
import { height } from '../../public/header'
import Frames from './Themes/Frames'
import Body from './Body'

interface navProps{
    setIsActive:any
}

 const Nav:React.FC<navProps> = ({setIsActive}) => {
  return (
    <motion.div  variants={height} initial='initial' animate="enter"  exit="exit" className='bg-bg  overflow-hidden w-full  fixed z-[100] top-[50px] text-text'>
      <div className='wrapper border-t-[0.1px] border-border flex bg-bg-active h-[300px]'>
         <Frames className='w-[3%] border-border bg-bg-blue xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]' />
        <div className=' border-b-[0.1px] border-border  border-r-[0.1px] w-[94%] bg-bg-blue h-full text-text '>
                  <Body setIsActive={setIsActive} />
        <ul className='text-text absolute bottom-5 px-3 flex gap-3'>
            <a href='https://github.com/Thura69' target="_blank">Github</a>
            <a href="mailto:thuranyi64@gmail.com" target="_blank">Gmail</a>
            <a href='https://www.linkedin.com/in/thura-nyi-453858241/' target="_blank">LinkedIn</a>
            <a href='https://www.facebook.com/mrx.clay.129/' target="_blank">FaceBook</a>
        </ul>
        </div>
         <Frames className='w-[3%] bg-bg-blue  border-border xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3%]' />
      </div>
    </motion.div> 
  ) 
}

export default Nav;