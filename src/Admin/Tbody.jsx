import { Tr,Td, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,useDisclosure,FormControl,Input, FormLabel,
    ModalBody,
    ModalCloseButton, } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteData } from '../Redux/action'
import Edit from './Edit'

const Tbodydata = (data) => {
    
const { img, title, price, category,id } = data.data
const dispatch = useDispatch()

const handleDelete = (del)=>{
    dispatch(deleteData(del))
    
}
  return (
    
    <>
      <Tr key={id} >
        <Td>
            <img src={img} alt="" width="50px" />
        </Td>
        <Td>{title}</Td>
        
        <Td>RS:  <b>{price}</b></Td>
        <Td >{category}</Td>
        <Td>
            <Button colorScheme={"yellow"} onClick={()=><Edit/>}>Edit</Button>
        </Td>
        <Td>
            <Button colorScheme={"red"} onClick={()=>handleDelete(data.data)}>Delete</Button>
        </Td>
      </Tr>
      
    </>
  )
}

export default Tbodydata
