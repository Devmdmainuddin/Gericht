import Cover from "../component/shared/Cover";
import spon from '../../public/spoon.png'
import Newnsletter from '../component/home/Newsletter'
import BookTable from "../component/home/BookTable";
import icon from '../../public/icon.png'
import CoverMenu from "../component/shared/CoverMenu";
const Services = () => {
    return (
        <div>
            <div>
                <div>
                    <Cover title='What We offer' titledescaption='Our Services'></Cover>
                </div>
                <div className="bg-[#0C0C0C]  pt-[196px]  px-6">
                    <div className=" max-w-[1627px] mx-auto">
                        <div className="max-w-[1128px]   mx-auto flex  items-center justify-center  flex-col z-20 ">
                            <p className="text-[16px] font-normal  text-[#AAAAAA]">Serving Quality</p>
                            <img src={spon} alt="" className="mt-3" />
                            <h2 className="md:text-[64px] text-3xl text-center font-semibold text-[#DCCA87] capitalize font-cormorant leading-normal">We at Gericth are serving our customers for over a decade.</h2>
                            <p className="text-[#AAAAAA] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                            <div className="flex justify-center gap-x-10">
                                <button className="bg-[#DCCA87] text-[16px]  font-bold md:py-2 md:px-8 py-1 px-3 text-center mt-8">Explore Menu</button>
                                <button className=" bg-transparent text-[#DCCA87] border border-text-[#DCCA87] font-bold py-2 px-8 text-center mt-8">Explore Menu</button>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <img className='lg:w-[132px] lg:h-[132px] w-[60px] h-[60px]  text-black  ' src={icon} alt="" />
                        </div>
                    </div>


                </div>
                <div className="">
                    <CoverMenu></CoverMenu>
                </div>
                <div className="bg-[#0C0C0C] pt-[152px] pb-[152px] px-6">
                    <div className="relative max-w-[1364px] mx-auto border border-[#ebe4bf] py-12 px-8">
                        <BookTable></BookTable>
                        <img className='lg:w-[132px] lg:h-[132px] w-[60px] h-[60px] absolute  -bottom-[66px]  -left-[80px] text-black  ' src={icon} alt="" />
                    </div>
                </div>

                <div>
                    <div className=" bg-[url('https://i.ibb.co/d2NXbzG/cov.jpg')] h-[679px] bg-center bg-fixed w-full bg-cover flex py-[152px] items-center justify-center">
                        <div className=" flex  items-center justify-center  flex-col z-20">
                            <h2 className="md:text-[64px] text-2xl font-semibold text-[#e4cc74] capitalize font-cormorant">Happy Hours</h2>

                            <p className="text-[16px] font-normal mt-8 text-white">Monday - Friday (4:00 Pm - 7:00 pm)</p>
                        </div>
                    </div>
                </div>




                <div className="bg-[#0C0C0C] pt-[113px]  px-6">
                    <div className="relative max-w-[1680px] mx-auto">
                        <Newnsletter></Newnsletter>
                        <img className='lg:w-[132px] lg:h-[132px] w-[60px] h-[60px] absolute  lg:-top-16 -top-8  -left-8 lg:left-[118px] text-black z-20' src={icon} alt="" />
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Services;