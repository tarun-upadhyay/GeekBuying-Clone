import { Box,Image,Badge,Text } from "@chakra-ui/react"

const ProductCard=({item})=>{
    return(
        <Box>
        <Image src={item.img}/>
        <Badge borderRadius='full' px='2' colorScheme='teal'>
            {item.discount}
          </Badge>
          <Text fontSize='md' colorScheme={black} >{item.price}</Text>
          <Text fontSize='sm' as={[s,sup]} colorScheme={black} >{item.price}</Text>
          <Flex>
          <Progress value={item.value} size='xs' colorScheme='blue' />
          <Spacer/>
          <Text fontSize="xs" as={sup}  >{item.stock}</Text>
          </Flex>
        </Box>      
    )
}