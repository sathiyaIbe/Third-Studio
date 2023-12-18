/* eslint-disable */
'use client'
import { useEffect } from 'react';
import { Footer, Navbar,ExploreCard } from '../components';
import { About, Explore, Faq, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import Lenis from '@studio-freight/lenis';
const Page = () => 
{

useEffect(()=>{
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
},[])

  return(
  <div className='bg_main flex flex-col bg-black '>
    <div className='min-w-[100vw] self-center '>
    <Navbar />
    <Hero />
    <About />
    <Faq />
    <ExploreCard />
    <WhatsNew />
    {/* <Explore />
    <GetStarted />
   
    <World />
    <Insights />
    <Feedback /> */}
    <Footer />
  </div>
  </div>

);
  }
export default Page;
