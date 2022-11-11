import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { TrendingProduct } from "../LocalDatabase/bannerData";
import { TrendCard } from "./TrendCard";

const Trendingproduct = () => {
  const data = TrendingProduct;
  return (
    <Box width={"90%"} flexDirection={"column"} margin={"auto"}>
      <Heading fontSize={"23px"}>Trending Categories</Heading>
      <Stack flexDirection={["column", "row"]} width={"100%"} gap={"3%"} margin={"auto"}>
        {data.map((item, i) => {
          return <TrendCard key={i + 1} item={item} />;
        })}
      </Stack>
    </Box>
  );
};

export default Trendingproduct;
