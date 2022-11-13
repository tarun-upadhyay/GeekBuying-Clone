import { Box, Grid, Heading, HStack, Image, Stack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Newforyou } from "../LocalDatabase/bannerData";
import { NewForCard } from "./NewForCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NewFor = () => {
  const data = Newforyou;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Stack bgColor={"blue.50"} border={"1px"} width={"90%"} m={"auto"} mt={10}>
      <Box p={9}>
        <Box>
          <Heading fontSize={{ base: "0.7rem", md: "1.2rem", lg: "1.7rem" }} mb={5}>
            New For You
          </Heading>
        </Box>
        <HStack maxW={"90vw"}>
          <Image src={"https://img.gkbcdn.com/bn/2211/5-636a188c2b40c958a00d243d._p1_.jpg"} />
          <HStack maxW={"100%"}>
            <Slider {...settings} style={{ width: "70vw" }}>
              {data.map((item, i) => {
                return <NewForCard key={i + 1} item={item} />;
              })}
            </Slider>
          </HStack>
        </HStack>
      </Box>
    </Stack>
  );
};
