import React from 'react'
import quarter_goals from "@/assets/quarter_goals.png"
import Image from 'next/image'

const Quarter_goal = () => {
    return (
        <div className='p-6 bg-white flex flex-col gap-2 self-stretch flex-[1_0_0] items-center justify-between rounded-2xl'>
            <div className='flex flex-col items-center'>
                <div className='pb-4 text-xl font-semibold leading-normal tracking-[-0.2px]'>Quarter Goal</div>
                <div className='flex items-center gap-2'>
                    <div role="progressbar" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100" style={{ "--value": 84 }}></div>
                </div>
            </div>
            <div className='flex items-center pt-4'>
                <div className='text-[#734A00] text-sm'>All Goals</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829" stroke="#734A00" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

        </div>
    )
}

export default Quarter_goal