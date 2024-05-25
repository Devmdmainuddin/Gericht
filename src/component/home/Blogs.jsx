import { Link } from "react-router-dom";
import SectionTitel from "../shared/SectionTitel";



const Blogs = () => {
    return (
        <div className="bg-[#0C0C0C] pt-[331px] pb-[152px] ">
           <div className="max-w-[1300px] lg:gap-x-[111px]   mx-auto">
           <div className="">
                <SectionTitel  titledescaption={'Blogs'} title={"Gerícht updates"}></SectionTitel>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                <div>
                    <img className="h-[430px] w-full object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                    <div className="flex justify-between items-center text-white mt-6">
                        <p >16 Apr 2021</p>
                        <p>- Annalisa L</p>
                    </div>
                    <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                    <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                    <Link className="text-[#DCCA87] inline-block mt-8">Read More</Link>

                </div>
                <div>
                    <img className="h-[430px] w-full object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                    <div className="flex justify-between items-center text-white mt-6">
                        <p >16 Apr 2021</p>
                        <p>- Annalisa L</p>
                    </div>
                    <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                    <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                    <Link className="text-[#DCCA87] inline-block mt-8">Read More</Link>

                </div>
                <div>
                    <img className="h-[430px] w-full object-cover" src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                    <div className="flex justify-between items-center text-white mt-6">
                        <p >16 Apr 2021</p>
                        <p>- Annalisa L</p>
                    </div>
                    <h2 className="text-[#DCCA87] mt-8 text-[32px] font-normal font-cormorant">tips for prepping and caring for your grill</h2>
                    <p className=" mt-8 text-[#AAAAAA] text-[16px]">Lorem ipsum dolor sit mate, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
                    <Link className="text-[#DCCA87] inline-block mt-8">Read More</Link>

                </div>
            </div>
            <div className='flex justify-center items-center'>
                    <button className="bg-[#DCCA87] text-[16px] font-bold py-2 px-8 text-center mt-16 ">View More</button>
                </div>
           </div>
           
            
            
        </div>
    );
};

export default Blogs;