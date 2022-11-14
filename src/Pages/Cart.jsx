import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromCart, handleOrderDone } from "../Redux/action";

const Cart = () => {
  const data = useSelector((store) => store.AppReducer.cart);
  const dispatch = useDispatch();
  const handleDelete = (el) => {
    dispatch(deleteFromCart(el));
  };
  let finalPrice = 0;
  data.forEach((el) => {
    finalPrice = el.price*el.count + finalPrice;
//finalPrice  ;
    return finalPrice;
  });
  const handleOrder = ()=>{
    dispatch(handleOrderDone)
  }

  return (
    <Box w="80%" m="auto" mt="20px" mb="50px">
      <Text fontSize="20px" fontWeight="bold" mb="20px">
        Product Name & Detail
      </Text>
      <HStack p="15px" bg="#f1f1f1" justifyContent="space-between">
        <Box w="50%">
          <Text>Product Name & Detail</Text>
        </Box>
        <HStack w="50%" justifyContent="space-between">
          <Text>Unit Price</Text>
          <Text>Quantity</Text>
          <Text>Total</Text>
          <Text>Operation</Text>
        </HStack>
      </HStack>

      {data.map((el) => {
        return (
          <HStack border="1px solid" mt="50px" p="15px" key={el.id}>
            <Flex w="50%" alignItems="center">
              <Image w="150px" h="150px" src={el.img} />
              <Text w="380px" pl="15px">
                {el.title}
              </Text>
            </Flex>
            <HStack w="50%" justifyContent="space-between">
              <Text>₹ {el.price}</Text>

              <Text>{el.count}</Text>
             

              <Text>₹ { Number.parseFloat(el.price * el.count).toFixed(2)} </Text>
              <Text onClick={() => handleDelete(el)}>Delete</Text>
            </HStack>
          </HStack>
        );
      })}
      <Box textAlign="end" p="15px">
        <Text>
          Your Subtotal:{" "}
          <span style={{ fontSize: "22px", color: "red" }}>₹ {
           Number.parseFloat(finalPrice).toFixed(2)
          }</span>
        </Text>
      </Box>

      <HStack border="1px solid" p="25px" justifyContent="center">
        <Text m="10px">
          Your Subtotal:{" "}
          <span style={{ fontSize: "22px", color: "red" }}>₹{
            Number.parseFloat(finalPrice).toFixed(2)
          }</span>
        </Text>
        <Button colorScheme="blue" onClick={handleOrder}>
          <Link to={"/payment"}>Proceed to checkout</Link>
        </Button>
      </HStack>
    </Box>
  );
};

export default Cart;
