import { Link } from "react-router-dom";


const Cover = ({title,titledescaption}) => {
    return (
        <div className=" bg-[url('https://i.ibb.co/Gk8r4c2/contact-banner.jpg')] h-[679px]  w-full bg-cover flex  items-center justify-center">
          <div className=" flex  items-center justify-center  flex-col z-20">
          <h2 className="text-[64px] font-semibold text-[#e4cc74] capitalize font-cormorant">{title}</h2>
          <hr className="bg-[#DCCA87] w-[220px] h-1" />
          <p className="text-[16px] font-normal mt-8 text-white"><Link to='/'>Home</Link> {`>`} {titledescaption}</p>
          </div>
        </div>
    );
};

export default Cover;