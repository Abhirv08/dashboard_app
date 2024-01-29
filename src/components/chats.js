import React from 'react'
import customer1 from '../assets/customer_avatar_1.png'
import customer2 from '../assets/customer_avatar_2.png'
import customer3 from '../assets/customer_avatar_3.png'
import customer4 from '../assets/customer_avatar_4.png'
import Image from 'next/image'

const users = [
    {
        profile_pic: customer1,
        isActive: true,
    },
    {
        profile_pic: customer2,
        isActive: true,
    },
    {
        profile_pic: customer3,
        isActive: false,
    },
    {
        profile_pic: customer4,
        isActive: false,
    }
]

const Chats = () => {
    const isActive = true;

    return (
        <div className='flex flex-col p-6 gap-2 bg-white flex-[1_0_0] rounded-2xl'>
            <div className='pb-4 gap-4 flex flex-col leading-normal'>
                <div className='text-xl font-semibold tracking-[-0.2px]'>Chats</div>
                <div className='text-[#454545] text-sm tracking-[-0.3px]'>2 Unread Messages</div>
            </div>

            <div className='w-full flex gap-2 items-start flex-wrap'>
                {
                    users.map((user, index) => {
                        return (
                            <div key={index} className={`rounded-2xl cursor-pointer ${user.isActive ? 'bg-[#FFF7E8]' : 'bg-white cursor-pointer'} p-3`}>
                                <div className='relative'>
                                    <Image src={user.profile_pic} alt="customer1" width={32} height={32} />
                                    {user.isActive && <div className='absolute z-10 top-0.5 right-0 h-2 w-2 bg-[#EB5050] rounded-full border-2 border-white'>
                                    </div>}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Chats