import { Link } from "react-router-dom";


const CoverMenu = () => {
    return (
        <div className="w-full h-[927px] bg-[url('https://i.ibb.co/GCvRFCT/cover.jpg')] bg-center bg-cover">
            <div className="max-w-[1680px] mx-auto"> 
            <ul className=" text-white  h-[991px] flex justify-center flex-col ">
                <li><Link className= " text-[64px] font-normal">Bar Menu </Link></li>
                <li><Link className= " text-[64px] font-normal">Food Menu</Link></li>
                <li><Link className= " text-[64px] font-normal">Desserts Menu </Link></li>
            </ul>
            </div>
            
         
            
        </div>
    );
};

export default CoverMenu;