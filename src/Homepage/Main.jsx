import { Container } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import BannerSlider from "./Homecomponents/BannerSlider"
import Timer from "./Homecomponents/Timer";
import TopBoxes from "./Homecomponents/TopBoxes";
const Main=()=>{
   
    return (
        <Container>
            <BannerSlider/>
            <TopBoxes/>
            <Timer/>
        </Container>
    )
}
export default Main;