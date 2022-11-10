import { Container } from "@chakra-ui/react"
import BannerSlider from "./Homecomponents/BannerSlider"
import Timer from "./Homecomponents/Timer";
const Main=()=>{
    return (
        <Container>
            <BannerSlider/>
            <Timer/>
        </Container>
    )
}
export default Main;