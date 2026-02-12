import React from "react";
import { useState, useRef, useEffect } from "react";
import MainHeading from "../Components/Ui/MainHeading";
import Dropdown from "../Components/Ui/DropDown";
import Template1 from '../assets/images/template-1.png';
import Template2 from '../assets/images/template-2.png';
import Template3 from '../assets/images/template-3.png';
import Template4 from '../assets/images/template-4.png';
import Template5 from '../assets/images/template-5.png';
import Template6 from '../assets/images/template-6.png';
import Template7 from '../assets/images/template-7.png';
import Template8 from '../assets/images/template-8.png';
import GiftBanner from '../assets/images/gifts-banner.png'

function GroupGifts() {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Sort: Free Templates");

  return (
    <section className="bg-backColor">
    <div className="max-w-[1366px] w-[93%] mx-auto">
      <div className="page-heading pt-10">
        <MainHeading
          title="Collection: Group Gifts"
          className="text-[24px] sm:text-[30px] lg:text-[40px] mb-4"
        />
        <p className="text-secondary text-sm sm:text-lg font-normal font-avenir">Collecting money for group gift is now easier than ever. Jump start your collection from the options below:</p>
      </div>
      <div className="create-from-scratch md:mt-[46px] mt-[24px]">
        <div className="template-grid-part grid md:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-10 gap-4 lg:items-start items-center">
          <div className="left-part">
             <h6 className="font-avenir uppercase text-gray font-medium md:text-lg text-sm mb-[24px]">CREATE FROM SCRATCH</h6>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                 <div className="ai-card xl:p-[34px] lg:p-[16px] p-[14px] rounded-2xl shadow-[0px_8px_8px_-4px_#00000014,_0px_4px_6px_-4px_#18274B1F] bg-white">
                <div className="card-content  font-avenir text-sm sm:text-base flex flex-col items-start gap-[16px]">
                   <h6 className="font-extrabold">Create from scratch</h6>
                   <p className="font-normal">You can jump right in and start building your collection from scratch. Customize it exactly how you like!</p>
                   <button type="button" className="bg-primary rounded-[4px] px-[32px] py-[10px] xl:text-base text-sm text-white transition-opacity duration-200 hover:opacity-80">Get Started</button>
                </div>
              </div>
              <div className="ai-card xl:p-[34px] lg:p-[16px] p-[14px] rounded-2xl shadow-[0px_8px_8px_-4px_#00000014,_0px_4px_6px_-4px_#18274B1F] bg-white">
                <div className="card-content  font-avenir text-sm sm:text-base flex flex-col items-start gap-[16px]">
                   <h6 className="font-extrabold">Use AI to create ✨</h6>
                   <p className="font-normal">Use our super cool new AI builder that can create a layout for you or recommend existing templates</p>
                   <button type="button" className="bg-btnSecondary rounded-[4px] px-[32px] py-[10px] text-base text-secondaryBtnText transition-opacity duration-200 hover:opacity-80">Try AI Creator</button>
                </div>

              </div>
              </div>
             
          </div>
          <div className="right-part">
             <div className="gift-banner-image flex justify-end">
              <img src={GiftBanner} alt="template-image"/>
            </div>
          </div>
        </div>
        
        
      </div>
      <div className="ready-to-use-template lg:py-[100px] md:py-[50px] py-[30px]">
        <div className="head-part flex justify-between items-center mb-6">
          <h6 className="font-avenir uppercase text-gray font-medium md:text-lg text-sm">READY TO USE TEMPLATES</h6>
          <div className="select-template-btn">
            <Dropdown
              options={[" Feature Templates", "Paid template", "Free Templates"]}
              value={selected}
              onChange={setSelected}
            />
          </div>
        </div>
        <div className="template-grid-part grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          <div className="template-card">
            <img src={Template1} alt="template-image" className="w-full"/>
          </div>
          <div className="template-card">
            <img src={Template2} alt="template-image" className="w-full"/>
          </div>
          <div className="template-card">
            <img src={Template3} alt="template-image" className="w-full"/>
          </div>
          <div className="template-card">
            <img src={Template4} alt="template-image" className="w-full"/>
          </div>
          <div className="template-card">
            <img src={Template5} alt="template-image" className="w-full"/>
          </div>
          <div className="template-card">
            <img src={Template6} alt="template-image" className="w-full"/>
          </div>
          <div className="template-card">
            <img src={Template7} alt="template-image" className="w-full"/>
          </div>
          <div className="template-card">
            <img src={Template8} alt="template-image" className="w-full"/>
          </div>
          
        </div>
      </div>
    </div>
    </section>
  );
}

export default GroupGifts;
