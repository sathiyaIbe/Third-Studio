'use client';

import { useEffect, useState } from "react";

const Navbar = () => 
{
  const [theme, setTheme]=useState("light-theme")
  useEffect(()=>{
    document.body.className= theme;
  },[theme])
  const toggleTheme=()=>{
    if(theme==="light-theme"){
    setTheme("dark-theme");
    }
    else{
      setTheme("light-theme");
    }
  }
  return(
  <nav className="flex flex-col">
   {/* <button className="text-whit" onClick={()=>{toggleTheme() }}>toogle</button> */}
   <div className="flex justify-between w-[90%] self-center pb-3 pt-3">
<h1 className="navbar_heading">
  THIRD STUDIO
</h1>
<div className="flex gap-11 items-center">
<p className="menu">About</p>
<p className="menu">Work</p>
<p className="menu">Contact</p>
<div className="flex gap-6">
  <img src="/fb.svg" alt='fb'/>
  <img src="/insta.svg" alt='insta'/>

</div>
</div>
   </div>
  </nav>
);
  }
export default Navbar;
