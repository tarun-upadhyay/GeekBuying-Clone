import { Flex, Container, Heading, Stack, Spacer } from "@chakra-ui/react";
import { sliderData } from "../LocalDatabase/bannerData";
import ProductCard from "./ProductCard";
import Timer from "./Timer";
const TopBoxes = () => {
  const data = sliderData;
  return (
    <Stack>
      <Flex>
        <Heading fontSize={{ base: "1rem", md: "1.5rem", lg: "2.1rem" }}>Deal Of The Day</Heading><Spacer/> <Timer/>
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
