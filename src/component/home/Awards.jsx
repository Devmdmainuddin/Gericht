
import g2 from '../../../public/g2.png'
import gImage from '../../../public/G.png'

import SectionTitleLeft from '../shared/SectionTitleLeft';
const Awards = () => {
    return (
        <div className=" bg-[url('https://i.ibb.co/84spmT4/bg-1.jpg')]  w-full bg-cover py-[128px]">
            <div className="flex justify-between flex-col lg:flex-row gap-y-[100px] items-center max-w-[1300px] lg:gap-x-[111px]   mx-auto">
                <div>
                    <SectionTitleLeft  titledescaption={'Awards & recognition'} title={"Our Laurels"}></SectionTitleLeft>
              
                <div className='grid grid-cols-2 gap-x-8 gap-y-16 '>
                    <div className='flex gap-x-8'>
                        <img src={g2} alt="" />
                        <div>
                            <h3 className='text-[#DCCA87]'> Bib Gourmond</h3>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>

                    </div>
                    <div className='flex gap-x-8'>
                        <img src={g2} alt="" />
                        <div>
                            <h3 className='text-[#DCCA87]'> Bib Gourmond</h3>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>

                    </div>
                    <div className='flex gap-x-8'>
                        <img src={g2} alt="" />
                        <div>
                            <h3 className='text-[#DCCA87]'> Bib Gourmond</h3>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>

                    </div>
                    <div className='flex gap-x-8'>
                        <img src={g2} alt="" />
                        <div>
                            <h3 className='text-[#DCCA87]'> Bib Gourmond</h3>
                            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>

                    </div>
                </div>

                </div>
                <div className='relative'>
                    <img className='absolute bottom-0 -left-9 w-[360px] h-[379px] text-white' src={gImage} alt="" />
                <img className='object-cover w-[483px] h-[691px]' src="https://i.ibb.co/QM0knDP/Mask-Group.jpg" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Awards;