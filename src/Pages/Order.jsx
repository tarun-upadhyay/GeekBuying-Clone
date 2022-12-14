import { Container,Flex, Image, Button,Text, Center } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
import OrderCard from '../Components/OrderCard'

const Order = () => {
    const orders = useSelector((store)=> store.AppReducer.order);
  return (
   <Container>
    {
        orders.length > 0 && orders.map((el)=>{
          return <Container key={el.id} mt={"1em"} border="1px">
         <Flex gap={"1rem"} key={el.id}>
          <Image src={el.img}></Image>
          <Text fontSize={"2xl"}>{el.title}</Text>
         </Flex>
     <Flex bg={el.status ? "teal.300" : "red"} color={"white"} textAlign="center" justifyContent={"center"}>
        <Center>

        <Text textAlign={"center"} fontSize={"2xl"}>{el.status ? "Out for Delivery" : "Waiting for accept"}</Text>
        </Center>
     </Flex>
        </Container>
        }) 
      }
   </Container>
  )
}

export default Order