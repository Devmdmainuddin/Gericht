import ChefsWord from "../component/home/ChefsWord";
import Gallery from "../component/home/Gallery";
import Newsletter from "../component/home/Newsletter";
import Testimony from "../component/home/Testimony";
import Cover from "../component/shared/Cover";
import icon from '../../public/icon.png'
import History from "../component/History";


const AboutUs = () => {
    return (
        <div>
            <div>
                <Cover title='Welcome to Gerícht' titledescaption='About Us'></Cover>
            </div>
            <div className="bg-[#0C0C0C] py-[152px]">
                <History></History>
            </div>

            <ChefsWord></ChefsWord>
            <Testimony></Testimony>
            <Gallery></Gallery>
            <div className="bg-[#0C0C0C] pt-[113px]  px-6">
                <div className="relative max-w-[1680px] mx-auto">
                    <Newsletter></Newsletter>
                    <img className='lg:w-[132px] lg:h-[132px] w-[60px] h-[60px] absolute  -top-16  left-[118px] text-black z-20' src={icon} alt="" />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;