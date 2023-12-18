'use client';

const Footer = () => (
  <footer className="pb-11">
    <hr className="horizantal_line"/>
    <div className="flex flex-col">
      <div className="w-[90%] self-center flex justify-between  py-11">
<ul className="flex flex-col gap-6">
  <div className="flex flex-col gap-4">
    <li className="footer_main_header">
<img src="footer_logo.svg" className="" alt='logo'/>
    </li>
    <li className="footer_text">
    Based in Kuala Lumpur
    </li>
  </div>
  <div className="flex flex-col gap-3">
  <li className="footer_text">
  Monday → Friday

    </li>
    <li className="footer_text">
    9am to 6pm
    </li>
  </div>
</ul>

<div className="flex gap-24">
  <ul className="flex flex-col gap-6">
    <li className="footer_header">Connect with us</li>
    <li className="footer_text">info@thirdstudio.com</li>

  </ul>
  <ul className="flex flex-col gap-6">
    <li className="footer_header">Follow us</li>
    <div className="flex flex-col gap-3">
    <li className="footer_text">Instagram </li>
    <li className="footer_text">Behance  </li>
    <li className="footer_text">Facebook </li>

    </div>
  </ul>
</div>

      </div>
    </div>
    <hr className="horizantal_line"/>
<p className="footer_bottom_text">© 2023 ThirdStudio. All Rights Reserved.</p>
  </footer>
);

export default Footer;
