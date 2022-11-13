import { Box, Image, Stack, Text } from "@chakra-ui/react";

export const TrendCard = ({ item }) => {
  return (
    <Stack borderWidth="1px" mt={2} overflow="hidden" width={"30%"}>
      <Image mt={0} src={item.img} width={"100%"} height={"-webkit-fit-content"} />
      <Text
        p={{ base: "0.1em", md: "0.3em", lg: "0.5em" }}
        fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.2rem" }}
        fontWeight={"medium"}
        colorScheme={"black"}
      >
        {item.title}
      </Text>
      <Text
        p={{ base: "0.1em", md: "0.3em", lg: "0.5em" }}
        my={1}
        fontSize={{ base: "0.5rem", md: "0.7rem", lg: "1.1rem" }}
        opacity={"90%"}
        colorScheme={"black"}
      >
        {item.description}
      </Text>
    </Stack>
  );
};
