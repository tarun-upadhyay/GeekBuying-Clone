import { Box, Container, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import BannerSlider from "./Homecomponents/BannerSlider";
import { BestSeller } from "./Homecomponents/BestSeller";
import { Enjoylife } from "./Homecomponents/Enjoylife";
import { Floadable } from "./Homecomponents/Floadable";
import { Headphone } from "./Homecomponents/Headphone";
import { Homeapp } from "./Homecomponents/Homeapp";
import { Laser } from "./Homecomponents/Laser";
import { NewFor } from "./Homecomponents/NewFor";
import { Popular } from "./Homecomponents/Popular";
import { Printer } from "./Homecomponents/Printer";
import Timer from "./Homecomponents/Timer";
import TopBoxes from "./Homecomponents/TopBoxes";
import Trendingproduct from "./Homecomponents/Trendingproduct";
import { Vaccum } from "./Homecomponents/Vaccum";
const Main = () => {
  return (
    <Box>
      <HStack border={"10px"} width={"90vw"} m={"auto"}>
        <Flex border={"2px"} width={"100vw"} margin={"auto"} my={"5"}>
          <BannerSlider />
          <VStack>
            <TopBoxes />
          </VStack>
        </Flex>
        <Stack></Stack>
      </HStack>
      <Trendingproduct />
      <NewFor />
      <Enjoylife />
      <BestSeller />
      <Popular />
      <Laser />
      <Floadable />
      <Headphone />
      <Printer />
      <Vaccum />
      <Homeapp />
    </Box>
  );
};
export default Main;
