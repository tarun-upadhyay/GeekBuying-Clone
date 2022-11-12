import { Badge, Box, Image, Text } from "@chakra-ui/react";

export const SellerCard = ({ item }) => {
  return (
    <Box>
      <Image src={"https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg"} />
      <Badge colorScheme={"red"} color={"white"} ml={"1"}>
        {item.discount}
      </Badge>
      <Text fontSize={{ base: "0.5rem", md: "0.7rem", lg: "1rem" }} colorScheme={"black"}>
        {"₹" + Math.floor(item.price - (item.price * item.discount) / 100)}
      </Text>
      <Text fontSize={{ base: "0.5rem", md: "0.7rem", lg: "1rem" }} as={"s"} opacity={"50%"} colorScheme={"black"}>
        {"₹" + item.price}
      </Text>
    </Box>
  );
};
