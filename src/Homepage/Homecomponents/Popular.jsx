import { Heading, Image, Stack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

export const Popular = () => {
  return (
    <Stack maxW={"88vw"} justifyContent={"center"} margin={"auto"}>
      <Heading>Popular Brnads</Heading>
      <Stack borderRadius={"md"} justifyContent={"center"}>
        <Carousel
          width={"89vw"}
          dynamicHeight={"100%"}
          showThumbs={false}
          autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
          useKeyboardArrows={false}
          transitionTime={1400}
          stopOnHover={true}
        >
          <Image src="https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg" />
          <Image src="https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg" />
          <Image src="https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg" />
        </Carousel>
      </Stack>
    </Stack>
  );
};
