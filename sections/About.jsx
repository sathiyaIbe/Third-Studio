/* eslint-disable */
'use client';

const About = () => (
  <section className="pb-24">
    <div className="flex justify-center">
    <div className="header_button flex justify-center">
      <h1 className="header_button_text">We worked with these brands 📂</h1>
    </div>
    </div>
    <div className="flex flex-col pt-11">
      <div className="flex ">
        <img src='/work_1.png' className="w-1/2" alt='work 1'/>
        <img src='/work_2.png' alt='work 2' className="w-1/2" />
      </div>
      <div className="flex ">
        <img src='/work_3.png' className=" w-3/5" alt='work 3'/>
        <img src='/work_4.png' className="  w-2/5" alt='work 4'/>
      </div>
      <div className="flex">
        <img src='/work_5.png' className="w-1/2" alt='work 5'/>
        <img src='/work_6.png' className="w-1/2" alt='work 6'/>
      </div>
    </div>
    <div className="flex justify-center mt-6">
    <div className="view_more_contianer">
      <button className="view_more_btn" type='button'>View more</button>
    </div>
    </div>
  </section>
);

export default About;
