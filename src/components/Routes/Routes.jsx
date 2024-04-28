import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayOut from "../Mainlayout/MainLayOut";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddCraft from "../pages/Home/AddCraft";
import PrivetRoute from "../privetRout/PrivetRoute";
import CardDetails from "../pages/CardDetails";
import AllCraft from "../pages/AllCraft";
import ErrorPage from "../pages/ErrorPage";
import MyCraft from "../pages/MyCraft";
import UpdatePage from "../pages/UpdatePage";
import CategoryPage from "../pages/CategoryPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/addCraft',
                element: <PrivetRoute>
                    <AddCraft></AddCraft>
                </PrivetRoute>
            },
            {
                path:'/details/:id',
                element:<CardDetails></CardDetails>,
                
            },
            {
                path:'/allcraft',
                element:<AllCraft></AllCraft>
            },
            {
                path:'/mycraft',
                element:<PrivetRoute><MyCraft></MyCraft></PrivetRoute>
            },
            {
                path:'/update/:id',
                element:<UpdatePage></UpdatePage>,
                loader: ({params}) => fetch(`http://localhost:5000/textileArt/${params.id}`)
            },
            {
                path:'/category',
                element:<CategoryPage></CategoryPage>
            },

           

        ]
    },
]);