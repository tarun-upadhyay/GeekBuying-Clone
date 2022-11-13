import { Box, Image, Badge, Text, Flex, Progress, Spacer, GridItem } from "@chakra-ui/react";

const ProductCard = ({ item }) => {
  // console.log(item.value)
  return (
    <GridItem pl={"1em"} width={"95%"}>
      <Image src={item.img} width={"100%"} />
      <Badge borderRadius="full" px="10" color={"red"} colorScheme="red">
        {item.discount}%
      </Badge>
      <Text fontSize={{ base: "0.5rem", md: "0.7rem", lg: "1rem" }} colorScheme={"black"}>
        {"₹" + Math.floor(item.price - (item.price * item.discount) / 100)}
      </Text>
      <Text fontSize={{ base: "0.5rem", md: "0.7rem", lg: "1rem" }} as={"s"} opacity={"50%"} colorScheme={"black"}>
        {"₹" + item.price}
      </Text>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Progress value={item.value} borderRadius={"full"} width={"70%"} size="md" colorScheme="blue" />

        <Text
          fontSize={{ base: "0.5rem", md: "0.7rem", lg: "1rem" }}
          opacity={"50%"}
          mt={"3"}
          pr={"1"}
          as={"sup"}
          color={"black"}
        >
          {item.stock}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default ProductCard;
