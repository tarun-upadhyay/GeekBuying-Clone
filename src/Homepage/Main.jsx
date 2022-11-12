import { Box, Container, Flex, HStack, Stack, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import BannerSlider from "./Homecomponents/BannerSlider";
import { Enjoylife } from "./Homecomponents/Enjoylife";
import { NewFor } from "./Homecomponents/NewFor";
import Timer from "./Homecomponents/Timer";
import TopBoxes from "./Homecomponents/TopBoxes";
import Trendingproduct from "./Homecomponents/Trendingproduct";
const Main = () => {
  return (
    <Box>
      <HStack border={"10px"} width={"80%"} m={"auto"}>
        <Flex border={"2px"} width={"100%"} margin={"auto"} my={20}>
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
    </Box>
  );
};
export default Main;
