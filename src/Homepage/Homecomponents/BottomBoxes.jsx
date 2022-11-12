import { Flex, Container, Heading, Stack, Spacer } from "@chakra-ui/react";
import { sliderData } from "../LocalDatabase/bannerData";
import ProductCard from "./ProductCard";
import Timer from "./Timer";
const TopBoxes = () => {
  const data = sliderData;
  return (
    <Stack>
      <Flex>
        <Heading size={"lg"}>Deal Of The Day</Heading>
      </Flex>
      <Flex>
        {data.map((item, i) => {
          return <ProductCard key={i} item={item} />;
        })}
      </Flex>
    </Stack>
  );
};
export default TopBoxes;
