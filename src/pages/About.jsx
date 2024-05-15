import gimg from '../../public/G.png'
import knip from '../../public/kn.png'
import spon from '../../public/spoon.png'
const About = () => {
    return (
        <div className=" bg-[url('https://i.ibb.co/84spmT4/bg-1.jpg')]  w-full bg-cover py-[128px]">

            <div className='max-w-[1300px]  lg:h-[703px] h-full mx-auto relative   flex justify-center items-center flex-col lg:flex-row gap-x-[85px]'>

                <div className="w-[523px]  h-[292px] flex lg:items-end items-center  flex-col z-20">
                    <h2 className="text-[64px] font-semibold text-[#DCCA87] capitalize font-cormorant">About Us</h2>
                    <img className='-rotate-180' src={spon} alt="" />
                    <p className="text-[16px] font-normal mt-8 text-[#AAAAAA]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <button className="bg-[#DCCA87] text-[16px] font-bold py-2 px-8 text-center mt-8">Know More</button>
                </div>
                <div className=' z-20   flex justify-center items-center '>
                    <img className='w-[84px] h-[703px]' src={knip} alt="" />
                </div>
                <div className="w-[391px] h-[415px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0">
                        <img className='w-full h-full' src={gimg} alt="" />
                    </div>
                <div className="w-[523px] h-[292px] flex lg:items-start items-center  flex-col z-20">
                    <h2 className="text-[64px] font-semibold text-[#DCCA87] capitalize font-cormorant">Our History</h2>
                    <img src={spon} alt="" />
                    <p className="text-[16px] font-normal mt-8 text-[#AAAAAA]">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                    <button className="bg-[#DCCA87] text-[16px] font-bold py-2 mb-8 lg:mb-0 px-8 text-center mt-8">Know More</button>
                </div>
            </div>



        </div>
    );
};

export default About;