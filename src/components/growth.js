"use client";
import { useState } from 'react';
import Image from 'next/image';
import customer2 from '../assets/customer_avatar_2.png';
import Chart from './graph';
const Growth = () => {
    const [timeline, setTimeline] = useState('monthly');

    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='p-6 rounded-2xl bg-white'>
                <div className='flex justify-between items-center w-full'>
                    <div className='text-xl leading-normal font-semibold tracking-[-0.2px] '>Growth</div>
                    <div className='text-sm font-medium traacking-[-0.3px] flex items-center gap-1'>
                        <select onChange={(e) => setTimeline(e.target.value)} className="appearance-none outline-none focus:outline-none text-[#454545] bg-white">
                            <option value="monthly">Monthly</option>
                            <option value="daily">Daily</option>
                        </select>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path d="M3.5 5.86163L7 9.36163L10.5 5.86163" stroke="#7D7D7D" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <Chart timeline={timeline} />
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col justify-between p-2 sm:p-4 gap-4 bg-white leading-normal rounded-2xl'>
                    <h1 className='font-semibold tracking-[-0.4px] text-[#7D7D7D] '>Top month</h1>
                    <div className='flex flex-col tracking-[-0.2px] '>
                        <div className='text-md sm:text-2xl font-semibold text-[#734A00]'>November</div>
                        <div className='text-[#FFA500] '>2019</div>
                    </div>
                </div>
                <div className='flex flex-col justify-between p-2 sm:p-4 gap-4 bg-white leading-normal rounded-2xl'>
                    <h1 className='font-semibold tracking-[-0.4px] text-[#7D7D7D] '>Top year</h1>
                    <div className='flex flex-col tracking-[-0.2px] '>
                        <div className='text-2xl font-semibold text-[#734A00]'>2023</div>
                        <div className='text-[#454545] text-sm'>96K sold so far</div>
                    </div>
                </div>
                <div className='flex flex-col justify-between p-2 sm:p-4 gap-4 bg-white leading-normal rounded-2xl'>
                    <h1 className='font-semibold tracking-[-0.4px] text-[#7D7D7D] '>Top buyer</h1>
                    <div className='flex flex-col tracking-[-0.2px] '>
                        <Image src={customer2} alt="customer2" width={24} height={24} className='rounded-full' />
                        <div className='text-[10px] font-medium text-[#131313]'>Maggie Johnson</div>
                        <div className='text-[#454545] text-[10px]'>Oasis Organic Inc.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Growth