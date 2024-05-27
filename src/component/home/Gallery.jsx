import SectionTitleLeft from "../shared/SectionTitleLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/free-mode';
import { Autoplay } from 'swiper/modules';
const Gallery = () => {
    return (
        <div className="bg-[#0C0C0C] pt-[280px] pb-[128px] ">
            <div className="w-full lg:gap-x-[111px] px-8  mx-auto">
                <div className="flex justify-center flex-col lg:flex-row gap-y-16 lg:gap-x-16">
                    <div className="max-w-[491px] inline-block">
                        <SectionTitleLeft titledescaption={'Instagram'} title={"Photo Gallery"} ></SectionTitleLeft>
                        <p className=" text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                        <button className="bg-[#DCCA87] text-[16px] font-bold py-2 px-8 text-center mt-6">View More</button>
                    </div>


                    <div className="w-[970px] h-[688px] z-10">
                        <Swiper
                            loop={true}
                            slidesPerView={1}
                            spaceBetween={1}
                            breakpoints={{
                                  768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                  },
                                  1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                  },
                              }}
                            // freeMode={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}

                            modules={[Autoplay]}
                            className="gallery">

{/* md:w-[301px] md:h-[447px] w-[301px] */}
                            <SwiperSlide> <img className=" w-[301px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] object-cover" src="https://i.ibb.co/fqCSqbS/pexels-cottonbro-4252136.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] object-cover" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] object-cover" src="https://i.ibb.co/H4xBtXc/pexels-kampus-production-5920733.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] object-cover" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" /></SwiperSlide>

                        </Swiper>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Gallery;