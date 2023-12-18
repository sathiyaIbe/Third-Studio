'use client';

const Hero = () => (
  <section className=" flex flex-col pb-24 ">
    <div className="flex self-center w-[90%]">
   <img src='/camera.png' alt="camera"/>
   <div className="flex flex-col mt-11">
   <div className="flex flex-col self-end   gap-6">
    <p className="hero_subtext">We specialise in <span className="underline">  transforming </span> your products and services into compelling visual stories 📺.</p>
    <div className="chat_container self-end">
      <p className="hero_chat_text">Let’s partner up to elevate your brand 🤝</p>
    </div>
    </div>
   </div>

   </div>
   <div className=" flex flex-col">
   <div className="relative top-[-110px] w-[90%] self-center">
    <h1 className="hero_main_heading">
    Your Vision, Our Lens
    </h1>
   </div>
   </div>
   <div className="flex flex-col">
   <div className="flex justify-between w-[90%] self-center ">
    <ul className="flex flex-col gap-6">
<li className="each_list_hero_heading">Photography <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2065 2.79583H5.15508L5.20463 0.0200195H27.0146V21.83L24.1892 21.8796L24.2388 4.82813L2.03228 26.9851L0 24.9528L22.2065 2.79583Z" fill="#F3F3F3"/>
</svg></li>
<div className="flex flex-col gap-2">
<li className="each_list_hero_text">1. Product/Services shoot</li>
<li className="each_list_hero_text">2. Fashion shoot</li>
<li className="each_list_hero_text">3. FnB shoot</li>
<li className="each_list_hero_text">4. Corporate shoot</li>
<li className="each_list_hero_text">5. Profile shoot</li>
<li className="each_list_hero_text">6. Events shoot</li>
</div>

    </ul>
    <ul className="flex flex-col gap-6">
<li className="each_list_hero_heading">Videography <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2065 2.79583H5.15508L5.20463 0.0200195H27.0146V21.83L24.1892 21.8796L24.2388 4.82813L2.03228 26.9851L0 24.9528L22.2065 2.79583Z" fill="#F3F3F3"/>
</svg></li>
<div className="flex flex-col gap-2">
<li className="each_list_hero_text">1. Product teaser videos</li>
<li className="each_list_hero_text">2. Lifestyle videos</li>
<li className="each_list_hero_text">3. Event coverage</li>
<li className="each_list_hero_text">4. After-movies</li>
<li className="each_list_hero_text">5. Documentaries</li>
<li className="each_list_hero_text">6. Corporate videos</li>
</div>

    </ul>
    <ul className="flex flex-col gap-6">
<li className="each_list_hero_heading">Motion Graphics <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2065 2.79583H5.15508L5.20463 0.0200195H27.0146V21.83L24.1892 21.8796L24.2388 4.82813L2.03228 26.9851L0 24.9528L22.2065 2.79583Z" fill="#F3F3F3"/>
</svg></li>
<div className="flex flex-col gap-2">
<li className="each_list_hero_text">1. Explainer Videos</li>
</div>

    </ul>
   </div>
   </div>
  </section>
);

export default Hero;
