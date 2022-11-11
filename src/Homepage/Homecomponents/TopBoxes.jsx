import { Flex, Container, Heading } from "@chakra-ui/react";
import { sliderData } from "../LocalDatabase/bannerData";
import ProductCard from "./ProductCard";
import Timer from "./Timer";
const TopBoxes = () => {
  const data = sliderData;
  return (
    <Container>
      <Flex>
        <Heading>Deal Of The Day</Heading> <Timer></Timer>
      </Flex>
      <Flex>
        {data.map((item, i) => {
          return <ProductCard key={i} item={item} />;
        })}
      </Flex>
    </Container>
  );
};
export default TopBoxes;
