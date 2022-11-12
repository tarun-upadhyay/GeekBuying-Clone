import { Heading, HStack, Stack } from "@chakra-ui/react";
import Slider from "react-slick";
import { Bestsell } from "../LocalDatabase/bannerData";
import { SellerCard } from "./SellerCard";

export const BestSeller = () => {
  const data = Bestsell;
  console.log(data.length);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Stack maxW={"88vw"} justifyContent={"center"} p={"2"} margin={"auto"}>
      <Heading fontSize={{ base: "0.7rem", md: "1.2rem", lg: "1.7rem" }}>Best Sellers</Heading>
      <HStack bgColor={"blue.400"} p={8} color={"white"}>
        <Slider {...settings} style={{ width: "80vw" }}>
          {data.map((item, i) => {
            {
              console.log(item);
            }
            return <SellerCard key={i + 1} item={item} />;
          })}
        </Slider>
      </HStack>
    </Stack>
  );
};
