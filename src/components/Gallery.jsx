import React from "react";
import img1 from "../assets/record.png";
import img2 from "../assets/Dashboard-1.png";
import img3 from "../assets/diacom-record.png";
import img4 from "../assets/Dicom-view.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const Gallery = () => {
  return (
    <div>
      <ImageGallery />
    </div>
  );
};

export default Gallery;

function ImageGallery({ width }) {
  return (
    <Carousel width="100%" autoPlay={true} interval={1500}>
      <div>
        <Image src={img1} alt="gallery" />
        <p className="legend">Legend 1</p>
      </div>

      <div>
        <Image src={img2} alt="gallery" />
        <p className="legend">Legend 1</p>
      </div>

      <div>
        <Image src={img3} alt="gallery" />
        <p className="legend">Legend 1</p>
      </div>

      <div>
        <Image src={img4} alt="gallery" />
        <p className="legend">Legend 1</p>
      </div>

      <div>
        <Image src={img1} alt="gallery" />
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  );
}
