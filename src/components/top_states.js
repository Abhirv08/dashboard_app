import React from 'react'

const Top_states = () => {
    return (
        <div className='flex flex-col p-6 gap-2 flex-[1_0_0] rounded-2xl bg-white'>
            <div className='text-xl font-semibold tracking-[-0.2px] leading-normal mb-4'>Top States</div>
            <div className='flex flex-col gap-2 '>
                <div className='flex justify-between items-center w-full rounded-s gradient-bg px-2 py-1.5'>
                    <div className='font-semibold text-sm leading-normal'>NY</div>
                    <div className='font-medium text-[10px] leading-normal'>120K</div>
                </div>
                <div className='flex justify-between items-center w-4/5 rounded-s gradient-bg px-2 py-1.5'>
                    <div className='font-semibold text-sm leading-normal'>MA</div>
                    <div className='font-medium text-[10px] leading-normal'>80K</div>
                </div>
                <div className='flex justify-between items-center w-[70%] rounded-s gradient-bg px-2 py-1.5'>
                    <div className='font-semibold text-sm leading-normal'>NH</div>
                    <div className='font-medium text-[10px] leading-normal'>70K</div>
                </div>
                <div className='flex justify-between items-center w-1/2 rounded-s gradient-bg px-2 py-1.5'>
                    <div className='font-semibold text-sm leading-normal'>OR</div>
                    <div className='font-medium text-[10px] leading-normal'>50K</div>
                </div>
            </div>
        </div>
    )
}

export default Top_states