import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass"
import InformationContainer from "./InformationCotainer";
import SocialNetworks from "./SocialNetworks";



const Sidebar = () => {
    return (
       <aside id="sidebar">
        <img src={Avatar} alt="Rafael Lorenzi" />
        <p className="title">FullStack Developer</p>
        <SocialNetworks />
        <InformationContainer/>
        <a href="https://drive.google.com/file/d/1dzTrbABqdbfF4t1qFvsRl0QgsGPXrIro/view?usp=sharing" className="btn">
            Download CV
        </a>
       </aside>  
       
    )

}

export default Sidebar