import Compro from "./About/Compro";
import Rumah from "./Home";
import Homey from "./Home/nav/Homey";
import Service from "./Services/service";

export default function LandingPage(){
    return(
        <div>
        <Homey/>
        <Compro/>
        <Service/>
        </div>
    )
}