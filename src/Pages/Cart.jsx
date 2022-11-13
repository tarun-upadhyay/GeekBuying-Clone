import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'


const Cart = () => {
 
  return (
    <Box w="80%" m="auto" mt="20px" mb="50px">
      <Text fontSize="20px" fontWeight="bold" mb="20px">Product Name & Detail</Text>
      <HStack p="15px" bg="#f1f1f1" justifyContent="space-between">
        <Box w="50%"><Text>Product Name & Detail</Text></Box>
        <HStack w="50%" justifyContent="space-between">
        <Text>Unit Price</Text>
        <Text>Quantity</Text>
        <Text>Total</Text>
        <Text>Operation</Text>
        </HStack>
      </HStack>

      <HStack border="1px solid" mt="50px" p="15px">
        <Flex w="50%" alignItems="center">
          <Image w="150px" h="150px" src='https://img.gkbcdn.com/p/2022-07-13/JJRC-H106-Foldable-RC-Drone-with-Obstacle-Avoidance-Two-Cameras-Black-508813-0._w280_.jpg'/>
          <Text w="380px" pl="15px">JJRC H106 4K Adjustable Camera All-Round Obstacle Avoidance Foldable RC Drone Dual Camera Three Batteries - Black</Text>
        </Flex>
        <HStack w="50%" justifyContent="space-between">
        <Text>€ 51.13</Text>
        {/* <Text>3</Text> */}
        <HStack>
          <Button isAttached variant='outline'>-</Button>
          <Text>3</Text>
          <Button isAttached variant='outline'>+</Button>
        </HStack>
        <Text>€ 153.39</Text>
        <Text>Delete</Text>
        </HStack>
      </HStack>
      <Box textAlign="end" p="15px"><Text>Your Subtotal: <span style={{"fontSize":"22px","color":"red"}}>€ 153.39</span></Text></Box>

      <HStack border="1px solid" p="25px" justifyContent="center">
      <Text m="10px">Your Subtotal: <span style={{"fontSize":"22px","color":"red"}}>€ 153.39</span></Text>
      <Button colorScheme='blue'>Proceed to checkout</Button>
      </HStack>

    </Box>
  )
}

export default Cart