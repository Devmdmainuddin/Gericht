import Cover from "../component/shared/Cover";
import spon from '../../public/spoon.png'
import Newnsletter from '../component/home/Newsletter'
import BookTable from "../component/home/BookTable";
const Services = () => {
    return (
        <div>
            <div>
                <div>
                    <Cover title='What We offer' titledescaption='Our Services'></Cover>
                </div>
                <div className="bg-[#0C0C0C]">
                    <div className="max-w-[1128px]  pt-[196px] mx-auto flex  items-center justify-center  flex-col z-20 ">
                        <p className="text-[16px] font-normal mt-8 text-[#AAAAAA]">Serving Quality</p>

                        <img src={spon} alt="" />
                        <h2 className="text-[64px] text-center font-semibold text-[#DCCA87] capitalize font-cormorant">We at Gericth are serving our customers for over a decade.</h2>
                        <p className="text-[#AAAAAA] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <div className="flex justify-center gap-x-10">
                    <button className="bg-[#DCCA87] text-[16px] font-bold py-2 px-8 text-center mt-8">Explore Menu</button>
                    <button className=" bg-transparent text-[#DCCA87] border border-text-[#DCCA87] font-bold py-2 px-8 text-center mt-8">Explore Menu</button>
                    </div>
                    </div>
                </div>
                <BookTable></BookTable>
                <Newnsletter></Newnsletter>
            </div>
        </div>
    );
};

export default Services;