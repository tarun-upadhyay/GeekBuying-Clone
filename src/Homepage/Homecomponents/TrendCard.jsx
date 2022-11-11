import { Box, Image, Stack, Text } from "@chakra-ui/react";

export const TrendCard = ({ item }) => {
  return (
    <Stack borderWidth="1px" mt={0} overflow="hidden" width={"30%"}>
      <Image mt={0} src={item.img} width={"100%"} height={"-webkit-fit-content"} />
      <Text fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.2rem" }} colorScheme={"black"}>
        {item.title}
      </Text>
      <Text my={1} fontSize={{ base: "0.3rem", md: "0.5rem", lg: "0.8rem" }} opacity={"90%"} colorScheme={"black"}>
        {item.description}
      </Text>
    </Stack>
  );
};
