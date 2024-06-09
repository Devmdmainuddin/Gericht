import SectionTitleLeft from "../shared/SectionTitleLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/free-mode';
// import { Autoplay } from 'swiper/modules';
const Gallery = () => {
    return (
        <div className="bg-[#0C0C0C] pt-[280px] pb-[128px] ">
            <div className="px-8  mx-auto">
                <div className="flex justify-center flex-col h-[449px] lg:flex-row lg:gap-y-16 gap-y-6 lg:gap-x-16 lg:items-center">
                    <div className="md:w-[491px] w-full block">
                        <SectionTitleLeft titledescaption={'Instagram'} title={"Photo Gallery"} ></SectionTitleLeft>
                        <p className=" text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                        <button className="bg-[#DCCA87] text-[16px] font-bold py-2 px-8 text-center mt-6">View More</button>
                    </div>
                 

                    <div className="lg:w-[662px]  w-full z-10">
                        <Swiper
                            loop={true}
                            slidesPerView={1}
                            spaceBetween={1}
                            breakpoints={{
                                1065: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                  },
                                  768: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                  },
                                
                              }}
                     
                            className="gallery h-[447px] ">


                            <SwiperSlide> <img className="w-full  h-[447px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className=" w-full  h-[447px]  object-cover" src="https://i.ibb.co/fqCSqbS/pexels-cottonbro-4252136.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className=" w-full  h-[447px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className=" w-full h-[447px] object-cover" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className=" w-full  h-[447px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className=" w-full  h-[447px] object-cover" src="https://i.ibb.co/H4xBtXc/pexels-kampus-production-5920733.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className=" w-full  h-[447px]  object-cover" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" /></SwiperSlide>

                        </Swiper>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Gallery;