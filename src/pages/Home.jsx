import BookTable from "../component/home/BookTable";
import Hero from "../component/home/Hero";
import About from "./About";


const Home = () => {
    return (
        <div>
            <Hero></Hero>

            <About></About>
            <BookTable></BookTable>
        </div>
    );
};

export default Home;