import { Link } from "react-router-dom";
import Cover from "../component/shared/Cover";
import Sidebar from "../component/shared/Sidebar";

const Blogs = () => {
    return (
        <div>
            <div>
                <div>
                    <Cover title='Our Blogs' titledescaption='Our Blogs- With sidebar'></Cover>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-[69px] bg-[#0C0C0C] pt-[152px]">
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
                                <Link className="text-[#DCCA87] inline-block mt-8 mb-16">Read More</Link>

                            </div>
                            <div>
                                <img className="h-[430px] w-full object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                <div className="flex justify-between items-center text-white mt-6">
                                    <p >16 Apr 2021</p>
                                    <p>- Annalisa L</p>
                                </div>
                                <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                                <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <Link className="text-[#DCCA87] inline-block mt-8 mb-16">Read More</Link>

                            </div>
                            <div>
                                <img className="h-[430px] w-full object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                <div className="flex justify-between items-center text-white mt-6">
                                    <p >16 Apr 2021</p>
                                    <p>- Annalisa L</p>
                                </div>
                                <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                                <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <Link className="text-[#DCCA87] inline-block mt-8 mb-16">Read More</Link>

                            </div>
                            <div>
                                <img className="h-[430px] w-full object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                <div className="flex justify-between items-center text-white mt-6">
                                    <p >16 Apr 2021</p>
                                    <p>- Annalisa L</p>
                                </div>
                                <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                                <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <Link className="text-[#DCCA87] inline-block mt-8 mb-16">Read More</Link>

                            </div>
                        </div>
                    </div>
                    <Sidebar></Sidebar>
                </div>
            </div>

        </div>
    );
};

export default Blogs;