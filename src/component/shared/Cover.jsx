import { Link } from "react-router-dom";
// import cover from '../../assets/banner.png'
const Cover = ({title,titledescaption}) => {
    return (
        <div className=" bg-[url('https://i.ibb.co/n3hJMMh/cover-1.png')] h-[679px] bg-center bg-fixed w-full bg-cover flex  items-center justify-center">
          <div className=" flex  items-center justify-center  flex-col z-20">
          <h2 className="md:text-[64px] text-2xl font-semibold text-[#e4cc74] capitalize font-cormorant">{title}</h2>
          <hr className="bg-[#DCCA87] w-[220px] h-[2px] mt-12" />
          <p className="text-[16px] font-normal mt-8 text-white"><Link to='/'>Home</Link> {`>`} {titledescaption}</p>
          </div>
        </div>
    );
};

export default Cover;