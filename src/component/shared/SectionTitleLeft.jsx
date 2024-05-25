
import spon from '../../../public/spoon.png'
const SectionTitleLeft = ({ titledescaption, title }) => {
    return (
        <div className=" flex items-start justify-center  flex-col z-20 mb-6">
            <p className="text-[16px] font-normal mt-8 text-[#AAAAAA]">{titledescaption}</p>

            <img className='mt-2' src={spon} alt="" />
            <h2 className="text-[64px] font-semibold text-[#DCCA87] capitalize font-cormorant">{title}</h2>

        </div>
    );
};

export default SectionTitleLeft;