import { Badge, Box, Image, Text } from "@chakra-ui/react";

export const SellerCard = ({ item }) => {
  return (
    <Box>
      <Image src={item.img} />
      <Badge
        colorScheme={"red"}
        bgColor={"red"}
        px={{ base: "0.2em", md: "0.5em", lg: "0.7em" }}
        color={"white"}
        ml={"1"}
        borderRadius={"md"}
      >
        {item.discount + "%"}
      </Badge>
      <Text fontWeight={"bold"} fontSize={{ base: "0.5em", md: "0.7em", lg: "0.9em" }} width={"90%"}>
        {item.title}
      </Text>
      <Text fontSize={{ base: "0.5rem", md: "0.7rem", lg: "1rem" }} colorScheme={"black"}>
        {"₹" + " " + Math.floor(item.price - (item.price * item.discount) / 100)}
      </Text>
      <Text fontSize={{ base: "0.5rem", md: "0.7rem", lg: "1rem" }} as={"s"} opacity={"50%"} colorScheme={"black"}>
        {"₹" + " " + item.price}
      </Text>
    </Box>
  );
};
