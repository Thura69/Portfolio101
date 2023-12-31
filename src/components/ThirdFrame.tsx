import React from 'react'
import Image from 'next/image'
import Profile from '../../public/assets/64cd4b8241e30d1ff98179ad_gamestation.png';
import SVG from '../../public/assets/nft-_1_.svg';
import {AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons/ai'
import Sign from '../../public/assets/2-removebg-preview.png';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import logo from '../../public/assets/det_logo-2.png';
import self from '../../public/assets/tools-and-utensils-programmer-svgrepo-com.png';
import Experience from '../../public/assets/experience-information-knowledge-svgrepo-com (1).png';
import { RevealWrapper } from  'next-reveal'
import AnimatedTextWord from './animation/AnimatedTextWord';
import Text from './Themes/Text';
import Frames from './Themes/Frames';
import FramerMagnetic from './FramerMagnetic';
import { MdEmail } from "react-icons/md";

const styles = {
};

 
 const ThirdFrame = () => {
  return (
    <div data-scroll-section className='flex items-center justify-center  w-full h-[950px] xs:h-[960px] sm:h-[900px] mid:h-[1000px] lg:h-[517px] md:h-[950px]'>
      <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.15%]'/>
      <div className='w-[94%] xs:w-[90%] mid:w-[86%] md:w-[90%] lg:w-[100%] bg-bg p-4 border-r-[0.5px] border-b-[0.5px] border-border h-full mid:p-7 md:p-0  lg:flex  '>
      {/* <div className='w-[300px]  cursor-crosshair  relative h-[300px] rounded-md'>
      <div className=' bg-bg absolute bottom-1 left-1 text-[#ffff] px-1 rounded-sm'><h3 className=' text-[0.75rem]'>IMG_286.png</h3></div>
      <ReactSketchCanvas
      style={styles}
      strokeWidth={4}
      strokeColor="#17E134"
      backgroundImage="https://res.cloudinary.com/dbqyaigcg/image/upload/v1697608738/tmd3v7bzd9gj9awynvjr.avif"
    />
        </div> */}
   
  
    <div data-scroll-sticky className='md:p-5 lg:p-5 2xl:p-10 bg-bg lg:w-[50.1%] order-1 md:w-[50%] xl:w-[33%]   border-text  md:flex items-center justify-center md:justify-start'>
      <Image blurDataURL={'../../../public/assets/64cd4b8241e30d1ff98179ad_gamestation.png'} src={Profile}  className='md:h-auto w-full xl:scale-90 lg:h-auto p-0 border-[0.5px] border-border   order-1 bg-active rounded-md ' width={500} height={590} alt='profile'/>
      </div>
        <div className='mt-[20.3px]'></div>
        <div className=' md:flex md:p-5 md:w-[100%] lg:p-8  lg:w-[55.3%] xl:w-[37%]  flex-col md:border-r-[0.5px] border-border items-start  lg:text-[19.4px]'>
          {/* <Text bold='font-bold lg:mb-[30px] mb-[30.3px]' context='About me' color='text-text' fontSize='text-[2.25rem] md:text-[3.2rem]' /> */}
          <AnimatedTextWord  transition={{staggerChildren:0.3,delayChildren:0.030 * 10}} text={'About Me'} classname='font-bold lg:mb-[0px] mb-[50.3px] text-[2.25rem] md:text-[3.2rem] text-text'/>
          {/* <AnimatedTextWord classname='text-sm' text={'I am a seasoned Software Developer specializing in React.js, Next.js, Tailwind CSS, React Native, Express.js, Node.js, MongoDb, MySQL, Linux Servers , AWS services and Z.com. Versioning tool  as Git. Proficient in crafting innovative web applications. Committed to staying current with industry trends, I bring a unique blend of technical expertise and a passion for exploring creative ideas.Specializes in IoT integration and server technologies using Express and MongoDB for seamless web applications.'} /> */}
         <p className="text-[#77818f] font-sans mt-3 text-[16px] font-light">I’m a nerd from Myanmar working as a  developer, building all sorts of interesting and dumb ideas.</p>
         <p className="text-[#77818f] font-sans mt-5 text-[16px] font-light">specializing in React.js, Next.js, Tailwind CSS, React Native, Express.js, Node.js, MongoDb, MySQL, Linux Servers , AWS services and Z.com. Versioning tool  as Git. Proficient in crafting innovative web applications. Committed to staying current with industry trends.Specializes in IoT integration and server technologies using Express and MongoDB for seamless web applications.</p>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
          {/* <p className='md:text-[16.1px] text-lg font-bold uppercase mt-[20px] font-sans text-active'>Skills</p>
          <p className='text-[#77818f] font-sans mt-3 text-sm font-light'>HTML, CSS, JavaScript, TypeScript, Tailwind, React.js, Next.js, React Native, Redux, ChartJs, PrimeReact, Express.js, Node.js, Swagger, JsonWebToken, Nginx, SSH, MQTT, SQL, MongoDb, Redis, SQL, AWS, Z.com </p> */}
        {/* <AnimatedTextWord text='Specializes in IoT integration and server technologies using Express and MongoDB for seamless web applications.'/> */}
        {/* <Text context='Specializes in IoT integration and server technologies using Express and MongoDB for seamless web applications.' color='text-[#77818f]' fontSize='text-[16.1px]'/> */}
       <div className='  text-right   mt-[10px]  w-full '>
            {/* <Text context='FIND ME AT' color='text-[#ffff]   md:font-bold' fontSize='text-[0.85rem] md:text-[0.9rem]' /> */}
            <AnimatedTextWord text='FIND ME AT' transition={{staggerChildren:0.4,delayChildren:0.050 * 10}} classname='text-[1rem] font-bold text-text  mb-4 md:text-[0.9rem]' />
         <div className='flex  items-center gap-3 justify-end'>
          <RevealWrapper duration={2500} origin='bottom'>
                <div className='text-[#77818f] border-border border-[1.2px]   md:w-[50px] md:h-[50px] w-[40px] h-[40px]  flex items-center justify-center duration-500 cursor-pointer rounded-full group'>
                <FramerMagnetic>
               <a href='https://www.linkedin.com/in/thura-nyi-453858241/' target="_blank"><AiFillLinkedin  className=' group-hover:text-active duration-500' size={25}/></a>
                </FramerMagnetic>  
            </div>
          </RevealWrapper>
          <RevealWrapper duration={2500} origin='bottom'>
             <div className='text-[#77818f] border-border  border-[1.2px]    md:w-[50px] md:h-[50px] w-[40px] h-[40px]  flex items-center justify-center group rounded-full cursor-pointer'>
                <FramerMagnetic>
              <a href='https://github.com/Thura69' target="_blank"> <AiFillGithub className=' group-hover:text-active duration-500' size={25} /></a>
                </FramerMagnetic>   
               </div>
          </RevealWrapper>
        <RevealWrapper duration={2500} origin='bottom'>
           <div className='text-[#77818f] group border-border  border-[1.2px]   md:w-[50px] md:h-[50px] w-[40px] h-[40px]  flex items-center droup justify-center rounded-full cursor-pointer'>
                <FramerMagnetic>
               <a href='https://www.facebook.com/mrx.clay.129/' target="_blank">  <AiFillFacebook className='group-hover:text-active duration-500' size={25} /></a>
                </FramerMagnetic>   
              </div>
        </RevealWrapper>
        <RevealWrapper duration={2500} origin='bottom'>
           <div className='text-[#77818f] group border-border border-[1.2px]    md:w-[50px] md:h-[50px] w-[40px] h-[40px]  flex items-center droup justify-center rounded-full cursor-pointer'>
                <FramerMagnetic>
              <a href="mailto:thuranyi64@gmail.com" target='_blank'>   <MdEmail className='group-hover:text-active duration-500' size={25} /></a>
                </FramerMagnetic>   
              </div>
        </RevealWrapper>
         </div>
       </div>
        </div>
        <div className=' bg-bg  p-8 border-border xl:block  experience border-l-[0.5px] w-[32.6%] order-3'>
           <div className='flex  items-center  gap-3 justify-start'>
          <Image src={Experience} width={25} alt='experience' />
          <h3 className='text-active uppercase text-[0.85rem] font-bold'>Experience</h3>
        </div>
          <div className='flex w-full   lg:mt-[20px]  flex-col h-[50%] gap-3 items-start justify-center '>
<RevealWrapper className={'w-full'} origin='bottom' duration={3500}>
               <div className='flex h-[100px] w-full md:w-[100%] xl:min-w-full bg-bg border-[1px] border-border drop-shadow-md  p-3 rounded-sm   items-center justify-start gap-7 mid:p-5'>
              <Image width={60} src={logo} alt='logo' />
              
          <div className='text-[#ffff]'>
                {/* <h3 className='text-[0.9rem] font-sans font-bold'>Frontend Developer at Digital Engineering Tech</h3> */}
          <AnimatedTextWord transition={{staggerChildren:0.1,delayChildren:0.030 * 1}} text='Fullstack Developer at Digital Engineering Tech' classname='text-[0.85rem] text-text font-sans font-bold'/>
          <AnimatedTextWord transition={{staggerChildren:0.2,delayChildren:0.030 * 1}} text='Jan 2022 - Present' classname='font-sans text-textgray leading-[29px] text-[16.1px]'/>
                
              {/* <h3 className=' font-sans text-textgray leading-[29px] text-[16.1px] '>Jan 2022 - Present</h3> */}
            </div>
          </div>
  </RevealWrapper>
  <RevealWrapper origin='bottom' className='w-full' duration={3500}>
            <div className='flex h-[100px] w-full md:w-[100%] bg-bg border-[1px] border-border drop-shadow-md  p-3 rounded-sm   items-center justify-start gap-7 mid:p-5'>
            <Image width={60} src={self} alt='logo' />
            <div className='text-[#ffff] text-start '>
                <AnimatedTextWord transition={{staggerChildren:0.2,delayChildren:0.030 * 1}} text='Self Freelance Developer' classname='text-[0.85rem] text-text font-sans font-bold'/>
                {/* <h3 className='text-[0.9rem]  font-sans font-bold'>Self  Developer</h3> */}
                  <AnimatedTextWord transition={{staggerChildren:0.2,delayChildren:0.030 * 1}} text='Jan 2021 - Jan 2022' classname='font-sans text-textgray leading-[29px] text-[16.1px]'/>
              {/* <h3 className=' text-textgray font-sans leading-[29px] text-[16.1px]'>Sep 2021 - Jan 2022</h3> */}
            </div>
          </div>
  </RevealWrapper>
         
        </div>
        </div>
        </div>
        <Frames className='w-[3%] xs:w-[5%] mid:w-[7%] md:w-[5%] lg:w-[3.17%]'/>
    </div>
  )
}

export default ThirdFrame;