import { useState } from 'react';
import icon from '../../../public/icon.png'
import spon from '../../../public/spoon.png'
import TimePicker from 'react-time-picker';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const BookTable = () => {
    const [value, onChange] = useState('10:00');
    return (
        <div className='bg-[#0C0C0C] w-full pb-[152px]'>
            <div className='relative max-w-[1680px] mx-auto '>
                <img className='w-[146px] h-[146px] absolute -top-[75px] right-0 text-black  ' src={icon} alt="" />
                <div className='pt-[200px]'>
                    <div className='text-center'>
                        <h5 className='text-[#AAAAAA] text-[32px]'>Reservations</h5>
                        <img className='my-2 mx-auto w-10' src={spon} alt="" />
                        <h2 className='text-[64px] font-semibold text-[#DCCA87] capitalize font-cormorant'>Book A Table</h2>
                    </div>

                    <div className='mt-[63px]' >
                        <form action="" >
                            <div className='flex justify-between items-center flex-col lg:flex-row lg:gap-x-8 gap-y-8'>
                                <select name="" id="" className='p-4 border border-[#DCCA87] text-[#AAAAAA] bg-inherit w-full'>
                                    <option value="one">1 Person</option>
                                    <option value="two">2 Person</option>
                                    <option value="theree">3 Person</option>
                                    <option value="four">4 Person</option>
                                    <option value="five">5 Person</option>
                                    <option value="six">6 Person</option>
                                </select>
                                <TimePicker onChange={onChange} value={value} className='p-4 border border-[#DCCA87] text-[#AAAAAA] bg-inherit w-full' />
                                <input type="date" name="" id="" className='p-4 border bg-inherit border-[#DCCA87] text-[#AAAAAA] w-full ' />

                            </div>
                            <div className='flex justify-center items-center'>
                                <button className="bg-[#DCCA87] text-[16px] font-bold py-2 px-8 text-center mt-16 ">Book Now</button>
                            </div>



                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default BookTable;