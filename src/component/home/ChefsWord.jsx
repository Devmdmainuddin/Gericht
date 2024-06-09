import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from 'swiper/modules';
// import { Link } from "react-router-dom";
import signa from '../../../public/sig.png'


const ChefsWord = () => {
    return (
        <div className=" bg-[url('https://i.ibb.co/84spmT4/bg-1.jpg')]  w-full   bg-cover pt-[152px] pb-[128px] ">

            <div className="max-w-[1300px] mx-auto ">

                <div className=" h-full lg:h-[789px] flex flex-col lg:flex-row gap-y-12 lg:gap-x-12 justify-between items-center px-6  pt-12">
                    <div className="relative  flex justify-between items-center mx-6 ">
                        <div className="md:w-[435px] lg:h-[435px] w-[235px] h-[235px] bg-[#DCCA87] absolute z-0 -top-1 -right-1  md:-top-6 md:-right-6">
                        </div>
                        <div className="md:w-[586px] lg:h-[741px] w-[235px]  h-[425px] z-10  m-6">

                            <Swiper loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper">


                                <SwiperSlide> <img className="md:w-[586px] lg:h-[741px] w-[235px]  h-[425px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide> <img className="md:w-[586px] lg:h-[741px] w-[235px]  h-[425px] object-cover" src="https://i.ibb.co/fqCSqbS/pexels-cottonbro-4252136.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide> <img className=" md:w-[586px] lg:h-[741px] w-[235px]  h-[425px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide> <img className="md:w-[586px] lg:h-[741px] w-[235px]  h-[425px] object-cover" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide> <img className=" md:w-[586px] lg:h-[741px] w-[235px]  h-[425px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide> <img className=" md:w-[586px] lg:h-[741px] w-[235px]  h-[425px] object-cover" src="https://i.ibb.co/H4xBtXc/pexels-kampus-production-5920733.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide> <img className=" md:w-[586px] lg:h-[741px] w-[235px]  h-[425px] object-cover" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" /></SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="md:w-[435px] lg:h-[435px] w-[235px] h-[235px] bg-[#DCCA87] absolute z-0 -bottom-1 -left-1 md:-bottom-6 md:-left-6">
                        </div>

                    </div>
                    <div className="font-cormorant   ">
                        <h5 className="text-[23px] font-bold capitalize text-white">Chef’s Word</h5>
                        <h1 className="lg:text-[64px] text-3xl font-bold capitalize mt-6 text-[#DCCA87] font-cormorant leading-normal">What we believe in</h1>
                        <p className="text-[16px] font-normal lg:mt-8 mt-2 text-[#AAAAAA]"> <span className="text-[47px] w-[47px]">{`"`}</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>

                        <h2 className="text-[#DCCA87] text-[32px] mt-16">Kevin Luo</h2>
                        <p className="text-[16px] font-normal mt-8 text-[#AAAAAA]">Chef & Founder</p>
                        <img className="mt-16" src={signa} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ChefsWord;