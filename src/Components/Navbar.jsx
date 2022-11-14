import { Flex, Image, Box,HStack, Text,Input, Spacer, VStack, Center } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../Redux/Auth/action';
import logo from "./Golden Minimal Floral Frame Design Studio Logo (1).png";

const Navbar = () => {
    const store = useSelector((store)=> store.AuthReducer);
    const productStore = useSelector((s)=> s.AppReducer)
const dispatch = useDispatch();
const handleLogout  = ()=>{
    dispatch(logOut)
}
  return (
    <Box w="100%">
        <Box bg="#1e2c40">
        <VStack >
        <HStack bg="#1e2c40" justifyContent="space-evenly">
               <Link to="/">
               <Image src={logo} width="250px" height="100px" >

</Image></Link>
            <Input bg="white" width="80em" margin="0px" border="0px"/>
            <Spacer/>
           
           {
            store.isAdmin || store.isAuth ? <Text color={"white"} fontSize="4xl" onClick={handleLogout}>Log out</Text> :  <Link to="/login"><Text fontSize='4xl' color="white">Sign In</Text></Link>
           } 
            </HStack>
            <Box  ><Center>

                <HStack p="1em" fontSize="3xl" gap="2em" bg="#1e2c40" color="white" w="100%">
                    <Text >
                        <Link to="/product">
                        New</Link>
                    </Text>
                    <Text>
                        <Link to="/product">
                        Best Selling</Link>
                    </Text>
                    <Text> 
                        <Link to="/product">
                        Brand</Link>
                    </Text>
                    <Text> 
                        <Link to="/product">
                        Clearance
                        </Link>
                    </Text>
                    <Text>Deals</Text>
                    <Text> Coupon</Text>
                    <Text> App only</Text>
                    {
                        store.isAdmin ? <Text>
                            <Link to="/admin">ADMIN</Link>
                        </Text> : productStore.orderAuth && <Text><Link to="/order">Orders</Link></Text>
                    }
                    <Link to={"/cart"}> 
                    <AiOutlineShoppingCart color="white" fontSize="3rem"/>
                    </Link>
                   {
                     store.isAdmin || store.isAuth ? "":  <Link to="/signup"> <Text> Sign Up</Text></Link>
                   }

                </HStack>
            </Center>
            </Box>
        </VStack>
                
        </Box>
    </Box>
  )
}

export default Navbar