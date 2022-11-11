import { Box, Button, Flex, Grid, GridItem, Image, Select, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../Redux/action';
import { BsHeart } from "react-icons/bs";

const Product = () => {
  const dispatch = useDispatch();
  dispatch(addData)
  const data = useSelector((store)=> store.products)
  const [ newData , setNewData ]  = useState(data)
console.log(newData.sort((a,b)=>a.price - b.price))
  
  return (
    <Box bg="#f2f2f2">
    <Box textAlign="center" p="30px" fontSize="30px" bg="white">New Arrivals</Box>
    <Flex w="85%" justifyContent="space-between" margin="auto" bg="#f2f2f2">
      <Box bg="white" w="330px" m="15px">
        <Text mb="20px" pl="5px" fontWeight="bold">All Categories</Text>
        <Stack pl="5px">
        <Select variant='unstyled' placeholder='Consumer Electronics'></Select>
        <Select variant='unstyled' placeholder='Sports & Outdoors'></Select>
        <Select variant='unstyled' placeholder='Smart Home & Garden'></Select>
        <Select variant='unstyled' placeholder='Computers, Tablets & Accessories'></Select>
        <Select variant='unstyled' placeholder='Toys & Hobbies'></Select>
        <Select variant='unstyled' placeholder='Wearable Devices'></Select>
        <Select variant='unstyled' placeholder='TV Boxes & Mini PCs'></Select>
        <Select variant='unstyled' placeholder='Automobiles & Motorcycles'></Select>
        </Stack>
      </Box>
      <Box>
        <Box m="15px" bg="white" p="15px">
          <Stack direction='row' spacing={4} align='center'>
          <Text w="100px">New Arrived :</Text>
          <Button colorScheme='black' variant='outline' h="25px" w="60px">7 days</Button>
          <Button colorScheme='black' variant='outline' h="25px" w="60px">15 days</Button>
          <Button colorScheme='black' variant='outline' h="25px" w="60px">30 days</Button>
          </Stack>
          <Stack mt="30px" direction='row' spacing={4} align='center'>
          <Text w="100px">Filter :</Text>
          <Select variant='outline' placeholder='Ship From' w="200px" h="25px"/>
          </Stack>
          <Stack mt="30px" direction='row' spacing={4} align='center'>
          <Text w="100px">Sort By :</Text>
          <Button colorScheme='black' variant='outline' h="25px" w="100px">Best Match</Button>
          <Button colorScheme='black' variant='outline' h="25px" w="100px">New Arrival</Button>
          <Button colorScheme='black' variant='outline' h="25px" w="60px" >Price</Button>
          </Stack>
        </Box>
          <Grid templateColumns='repeat(4, 1fr)' gap={6} m="15px">
            {
              data.map((el)=>{
               return <GridItem key={el.id} bg="white" p="5px">
                  <Image src={el.img}></Image>
                  <Text lineHeight="22px">{el.title}</Text>
                  <Text mt="2px" fontSize="20px" fontWeight="bold">₹ {el.price}</Text>
                  <Box display="flex" mt="5"><BsHeart/><Text ml="5px" mt="-1">{el.rating}</Text></Box>
                </GridItem>
              })
            }
          </Grid>
      </Box>
    </Flex>
  </Box>
  )
}

export default Product