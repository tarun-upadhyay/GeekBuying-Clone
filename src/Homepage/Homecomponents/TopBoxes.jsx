import {Flex,Container} from "@chakra-ui/react"
import {sliderData} from "../LocalDatabase/bannerData"
import ProductCard from "./ProductCard";
const TopBoxes=()=>{
    const data=sliderData;
    return(
        <Container>
            <Flex>
            {
                data.map((item,i)=>{
                    return(
                        <ProductCard key={i} item={item}/>
                    )
                })
            }
            </Flex>
        </Container>
    )
}
export default TopBoxes;