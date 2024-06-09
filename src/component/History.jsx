import SectionTitel from "./shared/SectionTitel";
import spon from '../../public/spoon.png'

const History = () => {
    return (
        <div className="px-6 max-w-[1300px] mx-auto">
            <div>
                <SectionTitel titledescaption={'Our History'} title={"serving customers for over a decade"}> </SectionTitel>
            </div>
            <div className="flex flex-col md:flex-row md:gap-x-[143px] gap-y-[143px]  pt-16">
                <div className="lg:w-[523px] w-full">
                    <p className="text-[#AAAAAA]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <img src="https://i.ibb.co/qJtKw48/histo.jpg" alt=""  className="w-full mt-10"/>
{/* <a href="https://ibb.co/qJtKw48"><img src="https://i.ibb.co/qJtKw48/histo.jpg" alt="histo" border="0"></a> */}
                </div>
                <div className="lg:w-[634px] w-full">
                    {/* <a href="https://ibb.co/xjbVC5B"><img src="https://i.ibb.co/xjbVC5B/his.jpg" alt="his" border="0"></a> */}
                <img src="https://i.ibb.co/xjbVC5B/his.jpg" alt="" className="w-full" />
                <h2 className="text-[#DCCA87] my-10 text-[45px] font-semibold font-cormorant">Over the years</h2>
                <div className="flex gap-x-16 items-center">
                    <div>
                        <h2 className="text-[#DCCA87] text-[45px] font-semibold font-cormorant"> 30 +</h2>
                        <img src={spon} alt="" className='mt-3' />
                        <p className="text-[#AAAAAA] text-[32px] font-semibold font-cormorant">Breakfast Options</p>

                    </div>
                    <div className="w-[2px] h-[100px] bg-[#DCCA87] rounded-sm">

                    </div>
                    <div>
                    <h2 className="text-[#DCCA87] text-[45px] font-semibold font-cormorant"> 50 +</h2>
                        <img src={spon} alt="" className='mt-3' />
                        <p className="text-[#AAAAAA] text-[32px] font-semibold font-cormorant">Dinner Options</p>

                    </div>
                    <div>

                    </div>
                    <div>
                    <h2 className="text-[#DCCA87] text-[45px] font-semibold font-cormorant"> 8</h2>
                        <img src={spon} alt="" className='mt-3' />
                        <p className="text-[#AAAAAA] text-[32px] font-semibold font-cormorant">New Locations</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default History;