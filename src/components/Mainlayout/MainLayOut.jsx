import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";


const MainLayOut = () => {
    return (
        <div className="lg:w-[1600px] mx-auto w-full">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;