import React from 'react'

const Revenue = () => {
    return (
        <div className='p-6 bg-white flex flex-col gap-2 self-stretch flex-[1_0_0] items-start justify-between rounded-2xl'>
            <div>
                <div className='pb-4 text-xl font-semibold leading-normal tracking-[-0.2px]'>Revenues</div>
                <div className='flex items-center gap-2'>
                    <div className='text-5xl font-medium leading-normal tracking-[-0.2px]'>15%</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M22.6667 9.33334L9.33334 22.6667M22.6667 9.33334H10.6667M22.6667 9.33334V21.3333" stroke="#25CD25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className='text-[#454545] text-sm tracking-[-0.3px] leading-normal'>Increase compared to last week</div>
            </div>
            <div className='flex items-center pt-4'>
                <div className='text-[#734A00] text-sm'>Revenues report</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829" stroke="#734A00" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

        </div>
    )
}

export default Revenue