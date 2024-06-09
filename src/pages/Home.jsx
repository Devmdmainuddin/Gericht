import Awards from "../component/home/Awards";
import Blogs from "../component/home/Blogs";
import BookTable from "../component/home/BookTable";
import ChefsWord from "../component/home/ChefsWord";
import Gallery from "../component/home/Gallery";
import Hero from "../component/home/Hero";
import Newsletter from "../component/home/Newsletter";
import SpecialMenu from "../component/home/SpecialMenu";
import Testimony from "../component/home/Testimony";
import About from "./About";
import icon from '../../public/icon.png'
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Gericht | Home </title>
            </Helmet>
            <Hero></Hero>

            <About></About>
            <div className="bg-[#0C0C0C] pt-[152px] pb-[152px] px-6">
                <div className="relative max-w-[1364px] mx-auto border border-[#ebe4bf] py-12 px-8">
                    <BookTable></BookTable>
                    <img className='lg:w-[132px] lg:h-[132px] w-[60px] h-[60px] absolute  -bottom-[66px]  -left-[80px] text-black  ' src={icon} alt="" />
                </div>
            </div>

            <SpecialMenu></SpecialMenu>
            <ChefsWord></ChefsWord>
            <Testimony></Testimony>
            <div className="flex flex-col justify-center items-center">
                <img className="h-[763px] w-full object-cover " src="https://i.ibb.co/61rdqpQ/jason-leung-po-I7-Del-Fi-VA-unsplash-1.jpg" alt="" />
            </div>
            <Awards></Awards>
            <Blogs></Blogs>
           
                    <Gallery></Gallery>
              

            <div className="bg-[#0C0C0C] pt-[113px]  px-6">
                <div className="relative max-w-[1680px] mx-auto">
                    <Newsletter></Newsletter>
                    <img className='lg:w-[132px] lg:h-[132px] w-[60px] h-[60px] absolute  lg:-top-16 -top-8  -left-8 lg:left-[118px] text-black z-20' src={icon} alt="" />
                </div>
            </div>


        </div>
    );
};

export default Home;