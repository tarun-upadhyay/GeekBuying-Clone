import { Container, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addData, addNewData } from "../Redux/action";

const Admin = () => {
  const dispatch = useDispatch();

  dispatch(addData);

  


  return (
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
  );
};

export default Admin;
