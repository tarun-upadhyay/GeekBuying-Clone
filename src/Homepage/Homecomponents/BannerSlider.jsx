import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";

import { Stack, HStack, VStack, Box, Container, Image } from "@chakra-ui/react";
import { bannerData } from "../LocalDatabase/bannerData";
const BannerSlider = () => {
  const data = bannerData;
  return (
    <Carousel
      width={"47vw"}
      dynamicHeight={"100%"}
      showThumbs={false}
      autoPlay={true}
      showStatus={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      transitionTime={200}
      stopOnHover={true}
    >
      {data.map((e, i) => {
        return <Image src={e.Image} key={i + 1} />;
      })}
    </Carousel>
  );
};

export default BannerSlider;
