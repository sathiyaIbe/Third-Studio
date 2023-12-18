
/* eslint-disable */
'use client';

import {gsap, ScrollTrigger } from "gsap/all";
import AccordItem from "../components/js/AccordItem";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Faq = () => {
//   gsap.registerPlugin(ScrollTrigger)
//   const triggerRefFaq=useRef(null)
//   useEffect(()=>{

//   const ctxFaq=gsap.context(()=>{
//   const charss=SplitType.create('.faq', {type:'chars'})
//   gsap.from(charss.words,{
//     scrollTrigger:{
//       trigger:triggerRefFaq.current,
//       start:'top 80%',
//         end:'top 20%',
//       scrub:true,
//     },
   
//       opacity:0,
//       y:40,
//       transform:'bottom',
//       ease:"easeOut",
//       stagger:0.2,
//       duration:1,
    
//   })
// });
// return ()=>ctxFaq.revert();
// },[])

  const data1=["We are reachable at +60123456789 or on our social media platforms under @third.studio"]
  const data2=["We are reachable at +60123456789 or on our social media platforms under @third.studio"]
  const data3=["We are reachable at +60123456789 or on our social media platforms under @third.studio"]
  const data4=["We are reachable at +60123456789 or on our social media platforms under @third.studio"]
  const data5=["We are reachable at +60123456789 or on our social media platforms under @third.studio"]

  return(
  <section  id='FAQ' className=" flex flex-col  pb-24 ">
    <div className="w-[90%] flex justify-between self-center">
  <div className="text-white basis-1/5">
  <div className="header_button flex justify-center">
      <h1 className="header_button_text">  How we work ⌨️  </h1>
    </div>
  </div>
<div
       className="flex flex-col self-center gap-3 md:gap-6 basis-4/5">
<AccordItem header="Book a call with us 🤙" text={data1} no={0} />
            <hr className="hr_line_question " />
            <AccordItem header="Agree on style moodboard 🎨" text={data2} no={1} />
            <hr className="hr_line_question " />
            <AccordItem header="Shoot Day! 📸" no={2} text={data3}  />
            <hr className="hr_line_question " />

            <AccordItem header="Post-processing 👨‍💻" no={3} text={data4} />

            <hr className="hr_line_question " />
            <AccordItem header="Submission to client and release of images 📨" no={4} text={data5} />

<hr className="hr_line_question " />
</div>
    </div>
  </section>
);
  }
export default Faq;
