'use client';

const WhatsNew = () => (
  <section className="pb-24 overflow-hidden">
   <div className="flex justify-center pt-11">
    <div className="header_button flex justify-center">
      <h1 className="header_button_text">Our Story 📖</h1>
    </div>
    </div>
    <div className="main_heading_container flex justify-center">
      <h1 className="story_header w-[900px]">
      Helping you to tell captivating stories
      </h1>
    </div>
    <div className="flex gap-2  ">
      <img src='/story_img_1.png' className="min-w-[20%] "  alt='story-1'/>
      <img src='/story_img_2.png' className="min-w-[50%] " alt='story-1'/>
      <img src='/story_img_3.png' className="min-w-[30%] " alt='story-1'/>

    </div>
    <div className="flex flex-col pt-11">
      <div className="flex items-center justify-between w-[90%] self-center">
<div className="basis-1/3">
  <h1 className="card_story_text_left w-[65%]">We're all about making your products and services shine ✨.</h1>
</div>
<div className="basis-2/3">
  <h1 className="card_story_text_right w-[75%]">Count on us to be your creative ally in bringing your brand to life with stunning photos that speak to your audience, whether you're a seasoned pro or just getting started.</h1>
</div>
      </div>
    </div>
  </section>
);

export default WhatsNew;
