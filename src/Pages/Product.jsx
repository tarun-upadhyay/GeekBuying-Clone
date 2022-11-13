import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, detailPage } from "../Redux/action";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  dispatch(addData);
  const data = useSelector((store) => store.AppReducer.products);
  

  const [newData, setNewData] = useState(data);

  const handleChange = (e) => {
    let val = e.target.value;
    if (val == "htl") {
      setNewData([...newData.sort((a, b) => a.price - b.price)]);
    } else {
      setNewData([...newData.sort((b, a) => a.price - b.price)]);
    }
  };
  const sendData = (e) => {
    // console.log(e)
    dispatch(detailPage(e));
  };

  return (
    <Box bg="#f2f2f2" w="100%">
      <Box textAlign="center" p="30px" fontSize="30px" bg="white">
        New Arrivals
      </Box>
      <Flex w="85%" justifyContent="space-between" margin="auto" bg="#f2f2f2">
        <Box bg="white" w="330px" m="15px">
          <Text mb="20px" pl="5px" fontWeight="bold">
            All Categories
          </Text>
          <Stack pl="5px">
            <Select variant="unstyled" placeholder="Consumer Electronics">
              <option>Earbud Headphones</option>
              <option>FDM 3D Printers</option>
              <option>Laser Engravers & Cutters</option>
              <option>3D Printer Accessories</option>
              <option>Heat Press Machine</option>
              <option>Projectors</option>
              <option>Accessories</option>
              <option>Measurement & Analysis</option>
              <option>Maintenance & Repair Tools</option>
              <option>Handheld Game Consoles</option>
              <option>PlayStation</option>
              <option>Others</option>
            </Select>
            <Select variant="unstyled" placeholder="Sports & Outdoors">
              <option>Fitness & Body Building</option>
              <option>Water Sports</option>
              <option>Bikes</option>
              <option>Electric Scooters</option>
              <option>Winter Sports</option>
              <option>Travel Supplies</option>
              <option>Other Accessories</option>
            </Select>
            <Select variant="unstyled" placeholder="Smart Home & Garden">
              <option>Robot Vacuum Cleaners</option>
              <option>Cordless Vacuum Cleaners</option>
              <option>Cookware</option>
              <option>Kitchen Appliances</option>
              <option>Personal Care</option>
              <option>Oral Care</option>
              <option>LED Outdoor Lights</option>
              <option>Robot Vacuum Cleaner</option>
              <option>Cordless Vacuum Cleaner</option>
              <option>Others</option>
            </Select>
            <Select
              variant="unstyled"
              placeholder="Computers, Tablets & Accessories"
            >
              <option>Android Tablets</option>
              <option>Wired Keyboards</option>
              <option>Wired Mouse</option>
              <option>Adapters</option>
              <option>SSD & HDD & Enclosures</option>
              <option>Other Accessories</option>
              <option>Ultrabooks</option>
              <option>Monitors</option>
            </Select>
            <Select variant="unstyled" placeholder="Toys & Hobbies">
              <option>RC Quadcopters</option>
              <option>RC Boats</option>
              <option>RC Cars</option>
            </Select>
            <Select variant="unstyled" placeholder="Wearable Devices"></Select>
            <Select
              variant="unstyled"
              placeholder="TV Boxes & Mini PCs"
            ></Select>
            <Select
              variant="unstyled"
              placeholder="Automobiles & Motorcycles"
            ></Select>
          </Stack>
        </Box>
        <Box>
          <Box m="15px" bg="white" p="15px">
            <Stack direction="row" spacing={4} align="center">
              <Text w="100px">New Arrived :</Text>
              <Button colorScheme="black" variant="outline" h="25px" w="60px">
                7 days
              </Button>
              <Button colorScheme="black" variant="outline" h="25px" w="60px">
                15 days
              </Button>
              <Button colorScheme="black" variant="outline" h="25px" w="60px">
                30 days
              </Button>
            </Stack>
            <Stack mt="30px" direction="row" spacing={4} align="center">
              <Text w="100px">Filter :</Text>
              <Select
                variant="outline"
                placeholder="Ship From"
                w="200px"
                h="25px"
              />
            </Stack>
            <Stack mt="30px" direction="row" spacing={4} align="center">
              <Text w="100px">Sort By :</Text>
              <Button colorScheme="black" variant="outline" h="25px" w="120px">
                Best Match
              </Button>
              <Button colorScheme="black" variant="outline" h="25px" w="120px">
                New Arrival
              </Button>
              {/* <Button colorScheme='black' variant='outline' h="25px" w="60px"></Button> */}
              <Select
                variant="outline"
                placeholder="Price"
                w="90px"
                h="25px"
                onChange={handleChange}
              >
                <option value="lth">High To Low</option>
                <option value="htl">Low To High</option>
              </Select>
            </Stack>
          </Box>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
            m="15px"
          >
            {newData.map((el) => {
              return (
                <Link to={"/detail"} key={el.id}>
                  <GridItem
                    key={el.id}
                    bg="white"
                    p="5px"
                    onClick={() => sendData(el)}
                  >
                    <Image src={el.img}></Image>
                    <Text lineHeight="22px">{el.title}</Text>
                    <Text mt="2px" fontSize="20px" fontWeight="bold">
                      ₹ {el.price}
                    </Text>
                    <Box display="flex" mt="5">
                      <BsHeart />
                      <Text ml="5px" mt="-1">
                        {el.rating}
                      </Text>
                    </Box>
                  </GridItem>
                </Link>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Product;
