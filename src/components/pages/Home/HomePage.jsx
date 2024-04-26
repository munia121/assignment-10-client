import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import CraftItems from './CraftItems';
import ExtraSection1 from './extraSection/ExtraSection1';
import ExtraRoute2 from './extraSection/ExtraRoute2';
const HomePage = () => {
    return (
        <div>
            <div className='lg:mt-20'>  
                <Swiper
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    <SwiperSlide >
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/4gXZ0nN/3238745-e940-4.jpg)` }}>
                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                {/* <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-white ' >Mountain Retreat Cabin</h1> */}
                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* ********* */}
                    <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/yNR2KMy/DSC08132-1100x733.jpg)` }}>

                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                {/* <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-slate-400 ' >Beachfront Vacation Rental</h1> */}
                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* ********** */}
                    <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/c88BQ6D/flower-embroidery-kit-0221-2000-efc994a1adb44fb789766384215cbd4b.jpg)` }}>
                            {/* <img className="w-full h-[600px] rounded-lg" src="https://i.ibb.co/3WfP2Yx/studenthousing1.jpg" alt="" /> */}
                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                {/* <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold  text-white' >Student Housing Near Campus</h1> */}
                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* ********* */}
                    <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg bg-cover' style={{ backgroundImage: `url(https://i.ibb.co/YN1YWmN/5514af2d9fa8158f8a33c5dc5fe1ee20.jpg)` }}>
                            {/* <img className="w-full h-[600px] rounded-lg" src="https://i.ibb.co/vVShkWm/modern-townhouse-design-house-168058-939.jpg" alt="" /> */}
                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                {/* <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-white ' >Modern Townhouse</h1> */}
                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white md:w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <section>
                    <div className='mt-20'>
                        <h2 className='text-3xl font-bold bg-[#f29c94] py-5 rounded-md shadow-lg  text-center'>
                            Craft Items Section
                        </h2>
                    </div>
                    <div className='mt-10'>
                        <CraftItems></CraftItems>
                    </div>
                    <div>
                        <ExtraSection1></ExtraSection1>
                    </div>
                    <div className='mt-20'>
                        <h2 className='text-4xl text-center'>Art & Craft Categories Section</h2>
                    </div>
                    <div>
                        <ExtraRoute2></ExtraRoute2>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;