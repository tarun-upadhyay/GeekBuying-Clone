import { Container } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import BannerSlider from "./Homecomponents/BannerSlider"
const Main=()=>{
   
    return (
        <Container>
            <BannerSlider/>
        </Container>
    )
}
export default Main;