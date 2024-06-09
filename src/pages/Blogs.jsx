import { Link } from "react-router-dom";
import Cover from "../component/shared/Cover";
import Sidebar from "../component/shared/Sidebar";
import Newsletter from "../component/home/Newsletter";
import icon from '../../public/icon.png'

const Blogs = () => {
    return (
        <div>
            <div>
                <div>
                    <Cover title='Our Blogs' titledescaption='Our Blogs- With sidebar'></Cover>
                </div>
                <div className="bg-[#0C0C0C] ">
                <div className=" max-w-[1300px] mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-[69px] pt-[64px] px-6">
                    <div className=" lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 ">
                            <div>
                                <img className="h-[430px] w-full object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                <div className="flex justify-between items-center text-white mt-6">
                                    <p >16 Apr 2021</p>
                                    <p>- Annalisa L</p>
                                </div>
                                <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                                <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <Link to='/blogsDetaills' className="text-[#DCCA87] inline-block mt-8 mb-16">Read More</Link>

                            </div>
                            <div>
                                <img className="h-[430px] w-full object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                <div className="flex justify-between items-center text-white mt-6">
                                    <p >16 Apr 2021</p>
                                    <p>- Annalisa L</p>
                                </div>
                                <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                                <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <Link to='/blogsDetaills' className="text-[#DCCA87] inline-block mt-8 mb-16">Read More</Link>

                            </div>
                            <div>
                                <img className="h-[430px] w-full object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                <div className="flex justify-between items-center text-white mt-6">
                                    <p >16 Apr 2021</p>
                                    <p>- Annalisa L</p>
                                </div>
                                <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                                <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <Link to='/blogsDetaills' className="text-[#DCCA87] inline-block mt-8 mb-16">Read More</Link>

                            </div>
                            <div>
                                <img className="h-[430px] w-full object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                <div className="flex justify-between items-center text-white mt-6">
                                    <p >16 Apr 2021</p>
                                    <p>- Annalisa L</p>
                                </div>
                                <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                                <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <Link to='/blogsDetaills' className="text-[#DCCA87] inline-block mt-8 mb-16">Read More</Link>

                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                                <button className="bg-[#DCCA87] text-[16px] font-bold py-2 px-8 text-center mt-16 ">View More</button>
                            </div>
                    </div>
                    <Sidebar></Sidebar>
                </div>
                </div>
                

                <div className="bg-[#0C0C0C] pt-[113px]  px-6">
                    <div className="relative max-w-[1680px] mx-auto">
                        <Newsletter></Newsletter>
                        <img className='lg:w-[132px] lg:h-[132px] w-[60px] h-[60px] absolute  lg:-top-16 -top-8  -left-8 lg:left-[118px] text-black z-20' src={icon} alt="" />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Blogs;