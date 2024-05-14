import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="pt-12  bg-[#0C0B08] ">
            <div className="max-w-[1680px] mx-auto relative">
            <div className="absolute top-1/2 left-0 -rotate-90 flex gap-x-8 text-white"><Link>#Gericht</Link> <Link>#Bar</Link></div>
            <div className="flex flex-col lg:flex-row gap-y-12 justify-around items-center">
                <div className="font-cormorant max-w-[453px]">
                    <h5 className="text-[23px] font-bold capitalize text-white">Chase the new Flavour</h5>
                    <h1 className="text-[90px] font-bold capitalize mt-6 text-[#DCCA87]">The key to Fine dining</h1>
                    <p className="text-[16px] font-normal mt-8 text-[#AAAAAA]">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    <button className="bg-[#DCCA87] text-[16px] font-bold py-2 px-8 text-center mt-8">Explore Menu</button>
                </div>
                <div className="relative flex justify-center items-center">
                    <div className="w-[435px] h-[435px] bg-[#DCCA87] absolute z-0 top-0 right-0">

                    </div>
                    <div className="w-[619px] h-[688px] z-10  m-6">

                        <Swiper loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper">
                            <SwiperSlide> <img className="w-[619px] h-[688px] object-cover" src="https://i.ibb.co/wLBK61M/22.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[619px] h-[688px] object-cover" src="https://i.ibb.co/wLBK61M/22.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[619px] h-[688px] object-cover" src="https://i.ibb.co/wLBK61M/22.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[619px] h-[688px] object-cover" src="https://i.ibb.co/wLBK61M/22.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[619px] h-[688px] object-cover" src="https://i.ibb.co/wLBK61M/22.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[619px] h-[688px] object-cover" src="https://i.ibb.co/wLBK61M/22.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[619px] h-[688px] object-cover" src="https://i.ibb.co/wLBK61M/22.jpg" alt="" /></SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="w-[435px] h-[435px] bg-[#DCCA87] absolute z-0 bottom-0 left-0">

                    </div>

                </div>
            </div>
            </div>
           
        </div>
    );
};

export default Hero;