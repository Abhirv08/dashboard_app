import React from 'react'

const new_deals_topics = [
    "Fruits2Go", "Marshall's MKT", "CCNT", "Joana Mini-market",
]

const New_deals = () => {
    return (
        <div className='flex flex-col bg-white p-6 gap-2 flex-[1_0_0] rounded-2xl'>
            <div className='text-xl font-semibold tracking-[-0.2px] leading-normal mb-4'>New deals</div>
            <div className='flex flex-wrap gap-2'>
                {
                    new_deals_topics.map((topic, index) => (
                        <div key={index} className='flex bg-[#FFF7E8] rounded-2xl gap-2 items-center justify-center py-3 pl-3 pr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M15 12.6116H9M12 9.61163V15.6116M12 3.61163C19.2 3.61163 21 5.41163 21 12.6116C21 19.8116 19.2 21.6116 12 21.6116C4.8 21.6116 3 19.8116 3 12.6116C3 5.41163 4.8 3.61163 12 3.61163Z" stroke="#FFA500" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className='text-sm tracing-[-0.3px] leading-normal'>{topic}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default New_deals