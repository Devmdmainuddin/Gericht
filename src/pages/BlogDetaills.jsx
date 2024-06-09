import Cover from "../component/shared/Cover";
import Sidebar from "../component/shared/Sidebar";
import que from '../../public/que.png'
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegMessage } from "react-icons/fa6";
import Newsletter from "../component/home/Newsletter";
import icon from '../../public/icon.png'

const BlogDetaills = () => {
    return (

        <div>
            <Cover title='Our Details' titledescaption='Our Blogs- With sidebar'></Cover>
            <div className="bg-[#0C0C0C] ">

                <div className="max-w-[1300px] mx-auto">
                    <div className="flex justify-between items-center text-white pt-[152px]">
                        <p >16 Apr 2021</p>
                        <p>- Annalisa L</p>
                    </div>
                    <h2 className="text-[#DCCA87] mt-6 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                    <img className="h-[430px] w-full object-cover mt-10" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-[69px] bg-[#0C0C0C] pt-[152px]">
                        <div className=" lg:col-span-2">
                            <p className="  text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.</p>
                            <h2 className="text-[#DCCA87] mt-6 text-[32px] font-normal font-cormorant">How to prepare your grill</h2>
                            <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.</p>
                            <div className=" flex items-center gap-x-2 text-[#AAAAAA] text-[16px] mt-8">
                                <div className="w-8 h-[1px] bg-[#AAAAAA]"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className=" flex items-center gap-x-2 text-[#AAAAAA] text-[16px] mt-8">
                                <div className="w-8 h-[1px] bg-[#AAAAAA]"></div>
                                <p> Tincidunt pharetra ut lobortis id..</p>
                            </div>
                            <div className=" flex items-center gap-x-2 text-[#AAAAAA] text-[16px] mt-8">
                                <div className="w-8 h-[1px] bg-[#AAAAAA]"></div>
                                <p>Commodo sit libero lacus a egestas penatibus pretium quis lorem. </p>
                            </div>
                            <img className="h-[346px] w-full object-cover mt-10" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                            <p className="text-[#AAAAAA] text-[16px] mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.</p>
                            <div className="mt-10 bg-[#545454]">
                                <img src={que} alt="" />
                                <p className="text-white text-center text-[32px] font-cormorant mt-6">There is no love sincerer than the love of food.</p>
                                <img src={que} alt="" className="-rotate-180 ml-auto" />
                            </div>
                            <div className="flex justify-between items-center gap-x-8 mt-10">
                                <div>
                                    <h2 className="text-[#DCCA87]  text-[32px] font-normal font-cormorant">How to prepare your grill</h2>
                                    <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.</p>
                                    <div className=" flex items-center gap-x-2 text-[#AAAAAA] text-[16px] mt-8">
                                        <div className="w-8 h-[1px] bg-[#AAAAAA]"></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className=" flex items-center gap-x-2 text-[#AAAAAA] text-[16px] mt-8">
                                        <div className="w-8 h-[1px] bg-[#AAAAAA]"></div>
                                        <p> Tincidunt pharetra ut lobortis id..</p>
                                    </div>
                                    <div className=" flex items-center gap-x-2 text-[#AAAAAA] text-[16px] mt-8">
                                        <div className="w-8 h-[1px] bg-[#AAAAAA]"></div>
                                        <p>Commodo sit libero lacus a egestas penatibus pretium quis lorem. </p>
                                    </div>


                                </div>
                                <div>
                                    <img className="w-[301px] h-[310px]" src="https://i.ibb.co/SPFsxxt/pexels-ron-lach-8879653-1.jpg" alt="" />
                                </div>

                            </div>
                            <p className="text-[#AAAAAA] text-[16px] mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.</p>
                            <div className="flex justify-between items-center mt-[56px]">
                                <div className="flex gap-x-2 text-[#AAAAAA] ">
                                    <Link>#Grilling</Link>
                                    <Link>#Outdoors</Link>
                                    <Link>#Cooking</Link>
                                </div>
                                <div className="flex gap-x-8   ">
                                    <p className="flex items-center gap-x-2 text-[#DCCA87]"> <FaRegMessage />Comment</p>
                                    <p className="flex items-center gap-x-2 text-[#DCCA87]"> <FaRegHeart />Like</p>
                                </div>
                            </div>
                        </div>

                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
            <div className="bg-[#0C0C0C] pt-[113px]  px-6">
                    <div className="relative max-w-[1680px] mx-auto">
                        <Newsletter></Newsletter>
                        <img className='lg:w-[132px] lg:h-[132px] w-[60px] h-[60px] absolute  lg:-top-16 -top-8  -left-8 lg:left-[118px] text-black z-20' src={icon} alt="" />
                    </div>
                </div>
        </div>


    );
};

export default BlogDetaills;