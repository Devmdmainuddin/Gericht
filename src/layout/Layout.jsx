import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const Layout = () => {
    return (
        <div className="">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="md:min-h-[calc(100vh-647px)]  mx-auto">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;