import React from "react";
import ImageComponentfrom from "../ImageComponent/ImageComponent";
import useScreenSize from "../../hooks/useWindowSize";

const Slide: React.FC<SlideProps> = ({ image, title, description }) => {
  const { width } = useScreenSize();
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg text-[24px] sm:text-[32px] h-[256px] w-full p-4 sm:p-6 overflow-hidden break-words text-left">
      <div className="flex mb-16 w-full sm:flex sm:items-start sm:h-full sm:m-0 sm:flex-col sm:justify-between">
        <ImageComponentfrom
          src={image}
          alt={title}
          width={width > 639 ? 80 : 50}
          height={width > 639 ? 80 : 50}
          className="mr-6"
        />
        <h2 className="font-normal sm:text-[24px]">{title}</h2>
      </div>
      <p className=" font-normal max-h-[100px] text-[14px] w-full sm:hidden ">
        {description}
      </p>
    </div>
  );
};

export default Slide;
