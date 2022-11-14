import {
  Container,
  Flex,
  Button,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Button } from "react-scroll";
import OrderCard from "../Components/OrderCard";
import { AcceptingOrder, addData, addNewData } from "../Redux/action";

const Admin = () => {
  const dispatch = useDispatch();
  const orders = useSelector((e) => e.AppReducer.order);

  dispatch(addData);
  const AcceptOrder = (e) => {
    let old = orders.filter((el) => el.title !== e.title);

    let changin = { ...e, status: true };
    old.push(changin);
    alert("order will dispatch");
    dispatch(AcceptingOrder(old));
  };
  let DeleteOrder = (e) => {
    let old = orders.filter((el) => el.title !== e.title);
    alert("Order is Deleted");
    dispatch(AcceptingOrder(old));
  };

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
      <Container>
        {orders.length > 0 &&
          orders.map((el) => {
            return (
              <Container key={el.id} mt={"1em"}>
                <Flex gap={"1rem"} key={el.id}>
                  <Image src={el.img}></Image>
                  <Text fontSize={"2xl"}>{el.title}</Text>
                </Flex>
                <Flex mt={"1rem"}>
                  {!el.status && (
                    <Button
                      bg="green"
                      color={"white"}
                      onClick={() => AcceptOrder(el)}
                    >
                      Accept
                    </Button>
                  )}
                  {el.status && (
                    <Button
                      ml={"1rem"}
                      bg="red"
                      color={"white"}
                      onClick={() => DeleteOrder(el)}
                    >
                      Delete
                    </Button>
                  )}
                </Flex>
              </Container>
            );
          })}
      </Container>
    </Container>
  );
};

export default Admin;
