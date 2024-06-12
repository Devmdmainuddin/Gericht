import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import spon from '../../../public/spoon.png'
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className=" bg-[#0C0B08] pb-[120px] pt-12">
             <div className="fixed top-1/2 left-0 -rotate-90 flex gap-x-8 text-white z-20"><Link>#Gericht</Link> <Link>#Bar</Link></div>
            <div className="max-w-[1680px] mx-auto relative">
           
            <div className="max-w-[1300px] mx-auto px-6  flex flex-col lg:flex-row gap-y-12 justify-between md:items-center pt-12 z-10">
                <div className="font-cormorant w-full max-w-[453px]">

                    <h5 className="text-[23px] font-bold capitalize text-white">Chase the new Flavour</h5>
                    <img className="mt-2" src={spon} alt="" />
                    <h1 className="lg:text-[90px] text-3xl font-bold capitalize mt-6 text-[#DCCA87] leading-normal">The key to Fine dining</h1>
                    <p className="text-[16px] font-normal mt-8 text-[#AAAAAA]">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    <Link to='/blogs' className="bg-[#DCCA87] text-[16px] font-bold inline-block py-2 px-8 text-center mt-8">Explore Menu</Link>
                </div>
                <div className="relative w-full max-w-[667px] flex justify-center items-center">
                    <div className="md:w-[435px] md:h-[435px] w-[235px] h-[235px] bg-[#DCCA87] absolute z-0 top-4 md:top-0  -right-2 lg:right-0">
                    </div>
                    <div className="md:w-[619px] md:h-[688px] w-full h-[425px] z-10  m-6">

                        <Swiper loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper">

                                
                            <SwiperSlide> <img className=" md:w-[619px] md:h-[688px] w-full h-[425px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="md:w-[619px] md:h-[688px] w- w-full h-[425px] object-cover" src="https://i.ibb.co/fqCSqbS/pexels-cottonbro-4252136.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="md:w-[619px] md:h-[688px] w- w-full h-[425px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="md:w-[619px] md:h-[688px] w- w-full h-[425px] object-cover" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="md:w-[619px] md:h-[688px] w- w-full h-[425px] object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className= "md:w-[619px] md:h-[688px] w- w-full h-[425px] object-cover" src="https://i.ibb.co/H4xBtXc/pexels-kampus-production-5920733.jpg" alt="" /></SwiperSlide>
                            <SwiperSlide> <img className="md:w-[619px] md:h-[688px] w- w-full h-[425px] object-cover" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" /></SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="md:w-[435px] md:h-[435px] w-[235px] h-[235px] bg-[#DCCA87] absolute z-0 bottom-4 md:bottom-0 -left-2 lg:left-0">

                    </div>

                </div>
            </div>
            </div>
           
        </div>
    );
};

export default Hero;