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


const Home = () => {
    return (
        <div>
            <Hero></Hero>

            <About></About>
            <BookTable></BookTable>
            <SpecialMenu></SpecialMenu>
            <ChefsWord></ChefsWord>
            <Testimony></Testimony>
            <div className="flex flex-col justify-center items-center">
                <img className="h-[763px] w-full object-cover " src="https://i.ibb.co/61rdqpQ/jason-leung-po-I7-Del-Fi-VA-unsplash-1.jpg" alt="" />
            </div>
            <Awards></Awards>
            <Blogs></Blogs>
            <Gallery></Gallery>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;