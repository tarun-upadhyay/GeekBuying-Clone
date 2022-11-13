import { Box,Container,Flex, Heading,TableContainer,Table,Tr, Th, Tbody,Td,TableCaption, Thead,Tfoot, Spacer, Divider } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addData } from '../Redux/action'
import Tbodydata from './Tbody'

const Manage = () => {
  const dispatch = useDispatch();
  
  dispatch(addData);
  const data = useSelector((store)=> store.AppReducer.products)
  return (
    
    <Box>
       <Container maxW={"container"} padding="5" bg={"gray.500"}>
        <Flex gap="10" alignContent={"center"} justify="center">
          <Heading>
            <Link to="/admin/addproduct">Add Product</Link>
          </Heading>
          <Heading>
            <Link to="/admin/manage">Manage Product</Link>
          </Heading>
        </Flex>
      </Container>
      <Box>
      <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
    {
      data.map((el)=> <Tbodydata key={el.id} data={el}/>)
    }
    </Tbody>
    
   
  </Table>
</TableContainer>
      </Box>
    </Box>
  )
}

export default Manage