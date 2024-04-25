import {
    createBrowserRouter,
    
} from "react-router-dom";
import MainLayOut from "../Mainlayout/MainLayOut";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/register',
                element:<RegisterPage></RegisterPage>
            }
        ]
    },
]);