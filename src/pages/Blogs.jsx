import { Link } from "react-router-dom";
import Cover from "../component/shared/Cover";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";

const Blogs = () => {
    return (
        <div>
            <div>
                <div>
                    <Cover title='Our Blogs' titledescaption='Our Blogs- With sidebar'></Cover>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-[69px] bg-[#0C0C0C] pt-[152px]">
                    <div className=" lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-16">
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
                    <div className=" ">
                        <div className="p-8  bg-[#242424]">
                            <h2 className=" font-normal text-3xl font-cormorant text-[#f1cd4d]">Search Page</h2>
                            <form action="" className=" flex justify-between mt-6" >
                                <input type="search" name="" id="" placeholder="Example" className=" w-full outline-none  border-b-2  bg-transparent border-[#d4d3d3] " />
                                <IoSearchOutline className="text-white text-lg" />
                            </form>
                        </div>
                        <div className="p-8 mt-8 bg-[#242424]">
                            <h2 className=" font-normal text-3xl font-cormorant text-[#f1cd4d]">All Categories</h2>
                            <div>
                                <div className="flex gap-x-[15px] text-[#AAAAAA] items-center mt-8">
                                    <p>photography</p>
                                    <span className="h-px w-full bg-[#c9c9c9]"></span>
                                    <span>(1)</span>
                                </div>
                                <div className="flex gap-x-[15px] text-[#AAAAAA] items-center mt-8">
                                    <p>Baking</p>
                                    <span className="h-px w-full bg-[#c9c9c9]"></span>
                                    <span>(2)</span>
                                </div>
                                <div className="flex gap-x-[15px] text-[#AAAAAA] items-center mt-8">
                                    <p className=" w-full">Cooking Tips</p>
                                    <span className="h-px w-full bg-[#c9c9c9]"></span>
                                    <span className="">(3)</span>
                                </div>

                            </div>

                        </div>
                        <div className="p-8 mt-8 bg-[#242424]">
                            <h2 className=" font-normal text-3xl font-cormorant text-[#f1cd4d]">Our Latest Posts</h2>
                            <div>
                                <img className="h-[430px] w-full object-cover mt-8" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                                <div className="flex justify-between items-center text-white mt-6">
                                    <p >16 Apr 2021</p>
                                    <p>- Annalisa L</p>
                                </div>
                                <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                                <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                                <Link className="text-[#DCCA87] inline-block mt-8">Read More</Link>

                            </div>
                        </div>
                        <div className="p-8 mt-8 bg-[#242424]">
                            <h2 className=" font-normal text-3xl font-cormorant text-[#f1cd4d]">Related Tags</h2>
                            <div>
                                <div className="flex gap-x-[15px] text-[#AAAAAA] items-center mt-8">
                                    <p>Grilling</p>
                                    <span className="h-px w-full bg-[#c9c9c9]"></span>
                                    <p>Cooking</p>
                                    <span className="h-px w-full bg-[#c9c9c9]"></span>
                                    <p>Baking</p>
                                </div>
                                <div className="flex gap-x-[15px] text-[#AAAAAA] items-center mt-8">
                                    <p>Grilling</p>
                                    <span className="h-px w-full bg-[#c9c9c9]"></span>
                                    <p>Cooking</p>
                                    <span className="h-px w-full bg-[#c9c9c9]"></span>
                                    <p>Baking</p>
                                </div>

                            </div>
                        </div>
                        <div className="p-8 mt-8 bg-[#242424]">
                            <h2 className=" font-normal text-3xl font-cormorant text-[#f1cd4d]">Share</h2>
                            <div className='flex gap-x-4 justify-start mt-4'>
                                <FaFacebookF className='text-2xl text-[#F5EFDB]' />
                                <RiTwitterLine className='text-2xl text-[#F5EFDB]' />
                                <SiInstagram className='text-2xl text-[#F5EFDB]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;