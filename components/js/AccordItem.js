/* eslint-disable */
/* eslint-disable */
'use client'
import React, { useState } from 'react'
import gsap from 'gsap'
import { animations } from 'framer-motion'

const AccordItem = ({header,text,no}) => {
    const [active,setActive]=useState(Boolean)
    const handleToggle = (event,no) => {
      const arr=[".icon0",".icon1", '.icon2', ".icon3",".icon4"]
      const arr1=[".container0",".container1", '.container2', ".container3", ".container4"]

     const a=   gsap.to(arr[no],{
         rotate:0,
        })
    const b=    gsap.fromTo(arr1[no],{
          opacity:0,
          duration:1,
          y:40},{
            ease:'easeOut',
             y:0,
             opacity:1,
        })
        
        event.preventDefault();
        setActive(!active);
      };
  return (
    <div className='flex flex-col '>
      <div className=" flex justify-between">
        <div className='flex gap-2'>
<a className=' rounded-full min-w-[30px] h-[30px] border-[1px] text-white text-center items-center py-[6.5px]  text-[12px]'>{no+1}</a>
       
      <h1 className="question_text"> {header}</h1>
      </div>
    <button className='md:self-end ' onClick={(e)=>{handleToggle(e,no)}} type="button">
    <img src={`${active?"/answer_icon.svg":"/question_icon.svg"}`} alt="img"/>

      </button>
     
      </div>
      <div
        className={`md:pl-[62px]   ease-in-out faq_tag ${"container"+no}   ${
          active ? "block" : "hidden"
        }`}
      >
        {/* <p className="answer_text py-3  leading-relaxed ">tasaaa</p> */}
        {text.map(element => {
            return(
        <p className="answer_text py-3  leading-relaxed w-[50%]">{element}</p>
            )
      })}
        
      </div>
  </div>
  )
}

export default AccordItem