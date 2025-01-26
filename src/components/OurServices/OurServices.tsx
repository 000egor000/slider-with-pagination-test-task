import React from "react";
import {Slider} from "../Slider";

const OurServices: React.FC = () => {
  return (
    <main>
      <div className="font-normal text-[26px] sm:text-[40px]">
        <div className="py-3 px-2 mx-2   text-[#A59DFF]">
          <h1 className="border-b border-gray-300 flex items-center gap-2">
            <span className="w-[40%]">1.0</span>
            <span className="w-[60%] hidden sm:block">Наши услуги</span>
          </h1>
          <span className="w-[50%] sm:hidden">Наши услуги</span>
        </div>

        <div className="my-0 mx-4 sm:my-10">
          <Slider />
        </div>
      </div>
    </main>
  );
};

export default OurServices;
