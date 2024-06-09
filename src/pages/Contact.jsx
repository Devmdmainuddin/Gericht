import Cover from "../component/shared/Cover";
import gImage from '../../public/G.png'
import Newsletter from "../component/home/Newsletter";
import icon from '../../public/icon.png'

const Contact = () => {
    return (
        <div className="">
            <div className="  mx-auto">
                <Cover title='contact Us' titledescaption='contact Us'></Cover>
                <div className="bg-[url('https://i.ibb.co/84spmT4/bg-1.jpg')]  w-full bg-cover py-[128px]">
                    <div className="flex justify-between flex-col lg:flex-row gap-y-[100px] items-center max-w-[1300px] mx-auto">
                        <div className=" md:w-[635px] w-full px-6">
                            <form action="" className="flex flex-col justify-center items-center">
                                <input className="w-full bg-transparent border border-gray-400 py-4 px-[18px] mt-8" type="text" name="" id="" placeholder=" full name" />
                                <input type="email" placeholder="johndoe@example.com" className="block bg-transparent border mt-8 border-gray-400 w-full px-5 py-4 text-gray-700 placeholder-gray-400  " />
                                <textarea className="block w-full h-32 px-5 py-2.5 resize-none bg-transparent border border-gray-400 mt-8 text-gray-700 placeholder-gray-400  " placeholder="Message"></textarea>
                                <div className="flex flex-col items-start justify-start w-full  mt-8">
                                    <input type="submit" value="Subscribe" className="bg-[#DCCA87]  text-[16px] font-bold py-2 px-8 " />
                                </div>

                            </form>

                        </div>

                        <div className='relative'>
                            <img className='absolute bottom-0 -left-9 md:w-[360px] md:h-[379px] w-[220px] text-white' src={gImage} alt="" />
                            <img className='object-cover md:w-[483px] md:h-[691px] w-[375px]' src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                        </div>

                    </div>
                </div>

                <div className="bg-[#0C0C0C] pt-[113px]  px-6">
                    <div className="relative max-w-[1680px] mx-auto">
                        <Newsletter></Newsletter>
                        <img className='lg:w-[132px] lg:h-[132px] w-[60px] h-[60px] absolute  lg:-top-16 -top-8  -left-8 lg:left-[118px] text-black z-20' src={icon} alt="" />
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Contact;