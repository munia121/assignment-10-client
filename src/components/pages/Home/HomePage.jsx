import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import CraftItems from './CraftItems';
import ExtraSection1 from './extraSection/ExtraSection1';
import ExtraRoute2 from './extraSection/ExtraRoute2';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import ArtAndCrafts from '../../ArtAndCrafts';
const HomePage = () => {

    const [datas, setDatas] = useState([]);
    console.log(datas)


    useEffect(() => {
        fetch(`http://localhost:5000/allCategory`)
            .then(res => res.json())
            .then(data => {
                setDatas(data)
            })
    }, [])


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
                                <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-white ' >Macrame Wall Hanging Kit</h1>
                                <p className='mt-4'>
                                    Create your own stunning macrame wall hangings with this complete kit, including cord, rings, and instructions.</p>

                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* ********* */}
                    <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/yNR2KMy/DSC08132-1100x733.jpg)` }}>

                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold text-white' >Knitting & Crocheting Starter Kitjdf</h1>

                                <p className='text-white mt-4'>
                                    Get started with knitting and crocheting with this comprehensive starter kit, including yarn, needles, and instructions.
                                </p>

                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    {/* ********** */}
                    <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(https://i.ibb.co/c88BQ6D/flower-embroidery-kit-0221-2000-efc994a1adb44fb789766384215cbd4b.jpg)` }}>
                            {/* <img className="w-full h-[600px] rounded-lg" src="https://i.ibb.co/3WfP2Yx/studenthousing1.jpg" alt="" /> */}
                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold ' > Textile Art Embroidery Kit</h1>

                                <p className='mt-4'>
                                    Create stunning textile art with this embroidery kit, perfect for beginners and experienced crafters alike.
                                </p>

                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* ********* */}
                    <SwiperSlide>
                        <div className='h-[600px] bg-no-repeat bg-cover rounded-lg ' style={{ backgroundImage: `url(https://i.ibb.co/YN1YWmN/5514af2d9fa8158f8a33c5dc5fe1ee20.jpg)` }}>
                            {/* <img className="w-full h-[600px] rounded-lg" src="https://i.ibb.co/vVShkWm/modern-townhouse-design-house-168058-939.jpg" alt="" /> */}
                            <div className='flex flex-col justify-center items-center pt-32 pl-20'>
                                <h1 data-aos="zoom-in" data-aos-duration='1500' className='text-5xl font-extrabold  ' >Tie-Dyeing Starter Kit</h1>

                                <p className='text-white  mt-4'>
                                    Begin your tie-dyeing journey with this all-inclusive starter kit, featuring dyes, rubber bands, and instructions.</p>

                                <p data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom" data-aos-duration='1500' className='flex items-center gap-3 mt-8 text-xl bg-gradient-to-r from-[#f5d3d0] to-[#f29c94] md:w-[200px] p-4'>Discover more <FaArrowRight></FaArrowRight> </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <section>
                    <div className='mt-20 bg-[#f29c94] py-5 rounded-md'>
                        <h2 className='text-3xl font-bold bg-[#f29c94]  rounded-md   text-center'>
                            Our Craft Items
                        </h2>
                        <p className='w-[800px] text-center mx-auto'>Welcome to Our Craft Items section, where creativity intertwines with craftsmanship to offer a unique assortment of handcrafted treasures. Dive into a world of artisanal excellence as you explore our carefully curated collection, showcasing the finest examples of traditional and contemporary craftsmanship. From intricately handwoven textiles that tell stories of cultural heritage to exquisite ceramic creations that capture the essence of artistic expression, each item in our range is a testament to the passion and skill of the artisans behind it.</p>
                    </div>
                    <div className='mt-10'>
                        <CraftItems></CraftItems>
                    </div>
                    <div>
                        <ExtraSection1></ExtraSection1>
                    </div>
                    <div className='mt-20'>
                        <h2 className='text-4xl text-center font-bold mb-6 text-[#f29c94]'>Art & Craft Categories Section</h2>
                        <hr />
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                            {
                                datas.map(data => <ArtAndCrafts key={data._id} data={data}></ArtAndCrafts>)
                            }
                        </div>
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