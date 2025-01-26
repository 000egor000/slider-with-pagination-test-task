"use client";
import Image from "next/image";
import { useState } from "react";

const ImageComponent = ({ src, alt, width, height }: ImageComponentProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc("/not-found.png");
  };

  return (
    <Image
      className="mr-6"
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default ImageComponent;
