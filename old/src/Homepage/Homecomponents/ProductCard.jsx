import { Box, Image, Badge, Text, Flex, Progress, Spacer } from "@chakra-ui/react";

const ProductCard = ({ item }) => {
  return (
    <Box width={"auto"}>
      <Image src={item.img} />
      <Badge borderRadius="full" px="2" color={"red"} colorScheme="red">
        {item.discount}%
      </Badge>
      <Text fontSize="md" colorScheme={"black"}>
        {item.price}
      </Text>
      <Text fontSize="sm" as={"s"} opacity={"50%"} colorScheme={"black"}>
        {item.price}
      </Text>
      <Flex>
        <Progress py={5} value={Number(item.value)} size="xs" colorScheme="blue" />
        <Spacer />

        <Text fontSize="xs" as={"sup"}>
          {item.stock}
        </Text>
      </Flex>
    </Box>
  );
};

export default ProductCard;
