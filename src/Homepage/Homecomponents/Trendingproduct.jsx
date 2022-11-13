import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { TrendingProduct } from "../LocalDatabase/bannerData";
import { TrendCard } from "./TrendCard";

const Trendingproduct = () => {
  const data = TrendingProduct;
  return (
    <Box width={{ base: "40%", md: "50%", lg: "90%" }} flexDirection={"column"} margin={"auto"} my={10}>
      <Heading fontSize={{ base: "0.9em", md: "0.9em", lg: "1.5em" }} mb={"3"}>
        Trending Categories
      </Heading>
      <Stack flexDirection={["column", "row"]} justifyContent={"left"} width={"100%"} gap={"5%"} margin={"auto"}>
        {data.map((item, i) => {
          return <TrendCard key={i + 1} item={item} />;
        })}
      </Stack>
    </Box>
  );
};

export default Trendingproduct;
