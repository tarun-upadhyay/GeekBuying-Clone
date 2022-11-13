import { Flex, Container, Heading, Stack, Spacer, Grid } from "@chakra-ui/react";
import { sliderData } from "../LocalDatabase/bannerData";
import ProductCard from "./ProductCard";
import Timer from "./Timer";
const TopBoxes = () => {
  const data = sliderData;
  return (
    <Stack>
      <Flex justifyContent={{ lg: "space-between" }} flexDirection={["column", "row"]}>
        <Heading fontSize={{ base: "1rem", md: "1.5rem", lg: "2.1rem" }}>Deal Of The Day</Heading>
        <Timer />
      </Flex>
      <Grid templateColumns={{ base: "repeat(2,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr" }} gap={"4.1em"}>
        {data.map((item, i) => {
          return <ProductCard key={i} item={item} />;
        })}
      </Grid>
    </Stack>
  );
};
export default TopBoxes;
