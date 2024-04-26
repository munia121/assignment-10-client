import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
const HomePage = () => {
    return (
        <div>
            <div>
                <Swiper
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    <SwiperSlide >
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/m6t7fC2/640ecf23a93664001d8e2bbc.jpg)` }}>
                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                {/* <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-white ' >Mountain Retreat Cabin</h1> */}
                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* ********* */}
                    <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/mq4x261/images-10.jpg)` }}>

                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                {/* <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-slate-400 ' >Beachfront Vacation Rental</h1> */}
                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* ********** */}
                    <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/MMC2hsb/190205150343-kitfo.jpg)` }}>
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
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/MfZDvP7/images-11.jpg)` }}>
                            {/* <img className="w-full h-[600px] rounded-lg" src="https://i.ibb.co/vVShkWm/modern-townhouse-design-house-168058-939.jpg" alt="" /> */}
                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                {/* <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-white ' >Modern Townhouse</h1> */}
                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-white md:w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default HomePage;