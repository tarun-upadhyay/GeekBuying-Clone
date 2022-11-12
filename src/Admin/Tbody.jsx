import {
  Tr,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
  Button,
  ModalBody,Select,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData, editData } from "../Redux/action";

const Tbodydata = (data) => {
  const { img, title, price, category, id ,rating} = data.data;
  const initState = {
    img: img,
    title: title,
    price: price,
    category: category,
    id: id,
    rating: rating,
  }
  const [ editFormData , setEdited ] = useState(initState);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const handleDelete = (del) => {
    dispatch(deleteData(del));
  };
  const handleChange = (e)=>{
const { name, value } = e.target
setEdited({...editFormData, [name]: value})

  }
  const handleSubmit = (onclose)=>{
   
    dispatch(editData(editFormData))
    onClose()
  }
  return (
    <>
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent key={id}>
          <ModalHeader>Edit you product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title of Product</FormLabel>
              <Input value={editFormData.title} onChange={handleChange}  name="title" placeholder='Title' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder='Price' value={editFormData.price} onChange={handleChange} name="price"/>
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Image Url</FormLabel>
              <Input placeholder='Url' value={editFormData.img} onChange={handleChange} name="img" />
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Select
                    name="category"
                    value={editFormData.category}
                    onChange={handleChange}
                  >
                    <option value={"New"}>New Arrival</option>
                    <option value={"Best Selling"}>Best Selling</option>
                  </Select>
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Rating</FormLabel>
              <Input placeholder='Rating' value={editFormData.rating} onChange={handleChange} name="rating"/>
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>handleSubmit(onclose)}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Tr key={id}>
        <Td>
          <img src={img} alt="" width="50px" />
        </Td>
        <Td>{title}</Td>

        <Td>
        <b>₹</b> <b>{price}</b>
        </Td>
        <Td>{category}</Td>
        <Td>
          <Button colorScheme={"yellow"} onClick={onOpen}>Edit</Button>
        </Td>
        <Td>
          <Button colorScheme={"red"} onClick={() => handleDelete(data.data)}>
            Delete
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default Tbodydata;
