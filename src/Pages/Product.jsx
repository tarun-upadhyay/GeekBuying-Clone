import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import products from "../data.json"

const Product = () => {
 
  return (
    <Box>
      <Box border="1px solid red" textAlign="center" p="30px" fontSize="30px">New Arrivals</Box>
      <Flex w="80%">
        <Box border="1px solid"></Box>
        <Box border="1px solid">
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
              {
                products.products.map((el)=>{
                 return <GridItem key={el.id}>
                    <Image src={el.img}></Image>
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