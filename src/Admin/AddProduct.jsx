import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Button,
  Container,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addData, addNewData } from "../Redux/action";
import { getLocalData } from "../Utils/localStorageData";
import { Link } from "react-router-dom";
const initState = {
  title: "",
  price: "",
  img: "",
  category: "",
  rating: "",
  id: '',
  status: false,
};
const AddProduct = () => {
  const dispatch = useDispatch();
  const storedata = useSelector((e)=>e.AppReducer.products)

  const [formData, setFormData] = useState(initState);
  const { title, price, img, category, rating } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    initState.id = storedata.length
    dispatch(addNewData(formData));
    setFormData(initState);
  };

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
      <Container
        maxW="container.lg"
        padding="10"
        align={"center"}
        justify="center"
        
      >
        <Flex h="80vh" bg={"#edf2f8"}>
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            
            justify={"center"}
            align={"center"}
          >
            <Heading>Add Product Details.</Heading>
            <SimpleGrid columns={2} columnGap={3} rowGap={4}>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Title:</FormLabel>
                  <Input
                    placeholder="Enter title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Price:</FormLabel>
                  <Input
                    placeholder="Enter Price"
                    name="price"
                    value={price}
                    onChange={handleChange}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Image url:</FormLabel>
                  <Input
                    placeholder="Enter url"
                    name="img"
                  
                    variant="outline"
                    colorScheme={"red"}
                    value={img}
                    onChange={handleChange}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Rating:</FormLabel>
                  <Input
                    placeholder="Enter rating"
                    name="rating"
                    value={rating}
                    onChange={handleChange}
                  ></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Category:</FormLabel>
                  <Select
                    name="category"
                    value={category}
                    onChange={handleChange}
                  >
                    <option value={"New"}>New Arrival</option>
                    <option value={"Best Selling"}>Best Selling</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel> Review:</FormLabel>
                  <Input placeholder="Enter review"></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Button
                  width={"full"}
                  size="lg"
                  bg={"green.400"}
                  onClick={handleSubmit}
                >
                  Add Product
                </Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default AddProduct;
