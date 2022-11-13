import { Container, Flex, HStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import BannerSlider from "./Homecomponents/BannerSlider";
import Timer from "./Homecomponents/Timer";
import TopBoxes from "./Homecomponents/TopBoxes";
const Main = () => {
  return (
    <HStack width="100%" margin={"auto"}>
      <Flex border={"2px"} margin={"auto"}>
        <BannerSlider />
        <Flex>
          <TopBoxes />
        </Flex>
      </Flex>
      </HStack>
  );
};
export default Main;
