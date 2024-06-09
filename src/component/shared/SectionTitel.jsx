
import spon from '../../../public/spoon.png'
const SectionTitel = ({ titledescaption, title }) => {


    return (
        <div className=" flex  items-center justify-center  flex-col z-20 ">
            <p className="text-[16px] font-normal mt-8 text-[#AAAAAA]">{titledescaption}</p>

            <img src={spon} alt="" className='mt-2' />
            <h2 className=" lg:text-[64px] text-2xl md:text-3xl font-semibold mt-3 text-[#DCCA87] capitalize font-cormorant">{title}</h2>

        </div>
    );
};

export default SectionTitel;