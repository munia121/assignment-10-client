import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import FooterSection from "../FooterSection";


const MainLayOut = () => {
    return (
        <div>
            <div className="lg:w-[1600px] mx-auto w-full">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <FooterSection></FooterSection>
        </div>
    );
};

export default MainLayOut;