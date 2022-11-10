import React from "react";
import { FormControl, FormLabel, Input,Select , Button} from "@chakra-ui/react";
const initState = {
    title:"",
    price: "",
    img: "",
    category: "",
    
}
const admin = () => {
  return (
    <div>
      <FormControl isRequired>
        <FormLabel>Product's title</FormLabel>
        <Input placeholder="Enter title" />
        <FormLabel>Price</FormLabel>
        <Input placeholder="Enter price"></Input>
        <Select placeholder="Category">
          <option>New</option>
          <option>Best Selling</option>
        </Select>
        <FormLabel>Image Url</FormLabel>
        <Input placeholder="Url" type={"url"}/>
        <FormLabel>Rating</FormLabel>
        <Input placeholder="Rating"/>
        <Button colorScheme='green'>Submit</Button>
      </FormControl>
    </div>
  );
};

export default admin;
