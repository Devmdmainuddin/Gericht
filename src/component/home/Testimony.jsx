

import que from '../../../public/que.png'
import SectionTitel from '../shared/SectionTitel';

const Testimony = () => {
    return (
        <div className='bg-[#0C0C0C] w-full py-[152px]'>
            <div className=' max-w-[1300px]   mx-auto'>
              
                <SectionTitel className='mx-auto inline-block' titledescaption={'Testimony'} title={"Happy customers"}></SectionTitel>
                   
              
                <div className='grid grid-cols-1 md:grid-cols-2  gap-8 mt-[64px] px-6'>
                    <div className=' flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-8  mb-[64px]'>
                        <div className='relative'>
                            
                            <img className='w-full h-[430px] lg:w-[190px] lg:h-[190px] object-cover' src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                            <img src={que} alt="" className='absolute -bottom-5 -right-5 h-10 w-12' />
                        </div>

                        <div className=''>
                            <p className='text-[#AAAAAA] text-[16px] italic tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                            <h2 className='text-[#DCCA87] mt-4 font-cormorant'>Wade Warren</h2>
                            <h4 className='text-[#F5EFDB] mt-1'>Sommelier</h4>
                        </div>

                    </div>
                    <div className=' flex flex-col lg:flex-row  items-center gap-y-8 lg:gap-x-8 mb-[64px]'>
                        <div className='relative'>
                            
                            <img className='w-full h-[430px] lg:w-[190px] lg:h-[190px] object-cover' src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                            <img src={que} alt="" className='absolute -bottom-5 -right-5 h-10 w-12' />
                        </div>

                        <div>
                            <p className='text-[#AAAAAA] text-[16px] italic tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                            <h2 className='text-[#DCCA87] mt-4 font-cormorant'>Wade Warren</h2>
                            <h4 className='text-[#F5EFDB] mt-1'>Sommelier</h4>
                        </div>

                    </div>
                    <div className='  flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-8'>
                        <div className='relative'>
                            
                            <img className='w-full h-[430px] lg:w-[190px] lg:h-[190px] object-cover' src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                            <img src={que} alt="" className='absolute -bottom-5 -right-5 h-10 w-12' />
                        </div>

                        <div>
                            <p className='text-[#AAAAAA] text-[16px] italic tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                            <h2 className='text-[#DCCA87] mt-4 font-cormorant'>Wade Warren</h2>
                            <h4 className='text-[#F5EFDB] mt-1'>Sommelier</h4>
                        </div>

                    </div>
                    <div className='  flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-8'>
                        <div className='relative'>
                            
                            <img className='w-full h-[430px] lg:w-[190px] lg:h-[190px] object-cover' src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                            <img src={que} alt="" className='absolute -bottom-5 -right-5 h-10 w-12' />
                        </div>

                        <div>
                            <p className='text-[#AAAAAA] text-[16px] italic tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                            <h2 className='text-[#DCCA87] mt-4 font-cormorant'>Wade Warren</h2>
                            <h4 className='text-[#F5EFDB] mt-1'>Sommelier</h4>
                        </div>

                    </div>

                </div>

      
            </div>
        </div>

    );
};

export default Testimony;