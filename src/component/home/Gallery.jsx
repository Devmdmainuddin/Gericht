import SectionTitleLeft from "../shared/SectionTitleLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/free-mode';
import { Autoplay,FreeMode } from 'swiper/modules';
const Gallery = () => {
    return (
        <div className="bg-[#0C0C0C] pt-[331px] pb-[152px] ">
            <div className="w-full lg:gap-x-[111px] px-8  mx-auto">
                <div className="flex justify-between ">
                    <div className="w-[491px] inline-block">
                    <SectionTitleLeft titledescaption={'Instagram'} title={"Photo Gallery"} ></SectionTitleLeft>
                    <p className=" text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                    <button className="bg-[#DCCA87] text-[16px] font-bold py-2 px-8 text-center mt-6">View More</button>
                    </div>
                    

                    <div className="w-[970px] h-[688px] z-10">
                        <Swiper 
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={2}
                        freeMode={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay,FreeMode]}
                            className="gallery">


                            <SwiperSlide> <img className="w-[301px] h-[447px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] h-[447px] object-cover" src="https://i.ibb.co/fqCSqbS/pexels-cottonbro-4252136.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] h-[447px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] h-[447px] object-cover" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] h-[447px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] h-[447px] object-cover" src="https://i.ibb.co/H4xBtXc/pexels-kampus-production-5920733.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="w-[301px] h-[447px] object-cover" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" /></SwiperSlide>

                        </Swiper>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Gallery;