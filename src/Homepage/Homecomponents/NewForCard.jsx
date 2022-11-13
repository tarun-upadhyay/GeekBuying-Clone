import { Box, GridItem, Image, Stack, Text } from "@chakra-ui/react";

export const NewForCard = ({ item }) => {

  return (
    <Box backgroundColor={"white"} p={3} height={"100%"} width={"100%"}>
      <Image src={item.img} width={{ base: "30%", md: "50%", lg: "60%" }} />
      <Text fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.2rem" }} colorScheme={"black"}>
        {item.title}
      </Text>
      <Text
        fontSize={{ base: "0.3rem", md: "0.5rem", lg: "0.9rem" }}
        opacity={"90%"}
        width={"50%"}
        colorScheme={"black"}
      >
        ₹{item.price}
      </Text>
    </Box>
  );
};
