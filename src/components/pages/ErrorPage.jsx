/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import error from '../error.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div>
            <div className="lg:w-[1200px] mt-10 lg:h-[300px] mx-auto ">
                <Lottie animationData={error}></Lottie>
                <Link to={'/'}><button className="mx-auto w-full btn">Go Home</button></Link>
            </div>
           

        </div>
    );
};

export default ErrorPage;