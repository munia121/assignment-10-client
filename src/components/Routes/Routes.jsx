import {
    createBrowserRouter,
    
} from "react-router-dom";
import MainLayOut from "../Mainlayout/MainLayOut";
import HomePage from "../pages/Home/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>
            }
        ]
    },
]);