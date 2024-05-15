import BookTable from "../component/home/BookTable";
import ChefsWord from "../component/home/ChefsWord";
import Hero from "../component/home/Hero";
import SpecialMenu from "../component/home/SpecialMenu";
import About from "./About";


const Home = () => {
    return (
        <div>
            <Hero></Hero>

            <About></About>
            <BookTable></BookTable>
            <SpecialMenu></SpecialMenu>
            <ChefsWord></ChefsWord>
        </div>
    );
};

export default Home;