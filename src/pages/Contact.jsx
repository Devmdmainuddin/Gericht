import Cover from "../component/shared/Cover";
import gImage from '../../public/G.png'
import Newsletter from "../component/home/Newsletter";


const Contact = () => {
    return (
        <div className="">
            <div className="  mx-auto">
                <Cover title='contact Us' titledescaption='contact Us'></Cover>
                <div className="bg-[url('https://i.ibb.co/84spmT4/bg-1.jpg')]  w-full bg-cover py-[128px]">
                    <div className="flex justify-between flex-col lg:flex-row gap-y-[100px] items-center max-w-[1300px] mx-auto">
                        <div className=" w-[635px]">
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
                            <img className='absolute bottom-0 -left-9 w-[360px] h-[379px] text-white' src={gImage} alt="" />
                            <img className='object-cover w-[483px] h-[691px]' src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                        </div>

                    </div>
                </div>
                <Newsletter></Newsletter>
             

            </div>

        </div>
    );
};

export default Contact;