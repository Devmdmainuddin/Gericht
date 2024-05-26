
import { Link } from 'react-router-dom';
import logo from '../../public/logo-1.png'
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import spon from '../../public/spoon.png'
const Footer = () => {
    return (
        <div className=" bg-[url('https://i.ibb.co/84spmT4/bg-1.jpg')]  w-full bg-cover py-[128px]">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1300px] mx-auto'>
                <div className="text-center">
                    <h2 className="text-[#F5EFDB] text-3xl font-cormorant font-normal">Contact Us</h2>
                    <h5 className="text-[16px] text-[#AAAAAA] font-normal mt-6">9 W 53rd St, New York, NY 10019, USA</h5>
                    <p className="text-[16px] text-[#AAAAAA] font-normal mt-2">+1 212-344-1230</p>
                    <p className="text-[16px] text-[#AAAAAA] font-normal">+1 212-344-1230</p>
                </div>
                <div className="flex justify-center flex-col items-center ">
                <Link><img src={logo} alt="" /></Link>
                <p className='text-[16px] text-white font-normal max-w-[438px] mt-8 text-center'>{`"`}The best way to find yourself is to lose yourself in the service of others.{`"`}</p>
                  <img src={spon} alt="" />
                   <div className='flex gap-x-4 justify-center mt-4'>
                   <FaFacebookF className='text-2xl text-[#F5EFDB]'  />
                   <RiTwitterLine className='text-2xl text-[#F5EFDB]' />
                   <SiInstagram className='text-2xl text-[#F5EFDB]'/>
                   </div>
                </div>
                <div className="text-center">
                    <h2 className="text-[#F5EFDB] text-3xl font-cormorant font-normal">Working Hours</h2>
                    <h5 className="text-[16px] text-[#AAAAAA] font-normal mt-6 flex flex-col items-center">Monday-Friday: <span>08:00 am -12:00 am</span></h5>
                    <h5 className="text-[16px] text-[#AAAAAA] font-normal mt-6 flex flex-col items-center">Monday-Friday: <span>08:00 am -12:00 am</span></h5>
                </div>
            </div>
            <p className='text-center mt-20 text-[#AAAAAA]'>2021 Gerícht. All Rights reserved.</p>
            
        </div>
    );
};

export default Footer;