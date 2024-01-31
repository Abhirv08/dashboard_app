"use client";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import companyLogo from '../assets/Logomark.png'
import Avatar from "../assets/Avatar.png"

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { SidebarItems } from "../utils";

const Sidebar = () => {
    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef();

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    const Nav_animation = isTabletMid
        ? {
            open: {
                x: 0,
                width: "280px",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                x: -320,
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                },
            },
        }
        : {
            open: {
                width: "280px",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                width: "80px",
                transition: {
                    damping: 40,
                },
            },
        };


    return (
        <div className="rounded-2xl">
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 max-h-full z-[998] bg-black/50 ${open ? "block" : "hidden"
                    } `}
            ></div>
            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{ x: isTabletMid ? -250 : 0 }}
                animate={open ? "open" : "closed"}
                className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed h-full rounded-2xl"
            >
                <div className={`flex gap-1.5 items-center w-fit px-6 pt-4 pb-3 relative h-[68px] `}>
                    <Image src={companyLogo} alt="companyLogo" height={21} width={21} />
                    {open && <p className='font-bold'>OrangeFarm</p>}
                </div>

                <div className="flex flex-col max-h-3/5 overflow-y-auto ">
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
                        <li>
                            <div className={`m-3 mt-0 ${open ? "py-3 px-4" : "w-[40px] justify-center"} border-[1px] border-[#F1F1F1] rounded-[20px] flex items-center gap-2 h-[40px]`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14 14L10 10M2 6.66667C2 7.2795 2.12071 7.88634 2.35523 8.45252C2.58975 9.01871 2.93349 9.53316 3.36683 9.9665C3.80018 10.3998 4.31462 10.7436 4.88081 10.9781C5.447 11.2126 6.05383 11.3333 6.66667 11.3333C7.2795 11.3333 7.88634 11.2126 8.45252 10.9781C9.01871 10.7436 9.53316 10.3998 9.9665 9.9665C10.3998 9.53316 10.7436 9.01871 10.9781 8.45252C11.2126 7.88634 11.3333 7.2795 11.3333 6.66667C11.3333 6.05383 11.2126 5.447 10.9781 4.88081C10.7436 4.31462 10.3998 3.80018 9.9665 3.36683C9.53316 2.93349 9.01871 2.58975 8.45252 2.35523C7.88634 2.12071 7.2795 2 6.66667 2C6.05383 2 5.447 2.12071 4.88081 2.35523C4.31462 2.58975 3.80018 2.93349 3.36683 3.36683C2.93349 3.80018 2.58975 4.31462 2.35523 4.88081C2.12071 5.447 2 6.05383 2 6.66667Z" stroke="#7D7D7D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {open && <input type="text" className=' w-full focus:outline-none outline-none placeholder:text-[#7D7D7D] placeholder:text-sm leading-3 placeholder:tracking-[-0.25px]' placeholder='Search' />}
                            </div>
                        </li>
                        {
                            SidebarItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className='px-5 py-3 cursor-pointer hover:bg-[#FFF7E8] hover:rounded-lg items-center justify-between flex h-[40px]'>
                                            <div className='flex items-center gap-3'>
                                                {item.icon}
                                                {open && <p>{item.name}</p>}
                                            </div>
                                            {(item.subItems && open) && <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                    <path d="M4 6.5L8 10.5L12 6.5" stroke="#7D7D7D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <motion.div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    animate={
                        open
                            ? {
                                rotate: 0,
                            }
                            : {
                                rotate: 180,
                            }
                    }
                    transition={{ duration: 0 }}
                    className={`absolute w-6 h-6 p-1 md:block z-[999] hidden ${open ? "-right-3" : "-right-2"} bottom-44 rounded-lg cursor-pointer `}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <rect x="12" width="12" height="12" rx="4" transform="rotate(90 12 0)" fill="#F7F6F3" />
                        <path d="M7.5 3L4.5 6L7.5 9" stroke="#454545" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>

                <div className={` w-full bg-white px-2 pt-4 pb-6 flex flex-col gap-3 items-start`}>
                    <div className={`flex items-center gap-3 ${open ? "px-5" : "px-3"} h-[40px] w-fit`}>
                        <Image src={Avatar} alt="avatar" height={32} width={32} />
                        {open && <div className='flex flex-col gap-1'>
                            <p className='text-sm font-medium leading-normal tracking-[-0.25px]'>Gustavo Xavier</p>
                            <div className='rounded-[24px] px-1.5 text-center bg-[#FFCD71] text-[10px] leading-4 tracking-[-0.5px] w-fit '>Admin</div>
                        </div>}
                    </div>
                    <div className="w-full">
                        <div className='w-full px-5 py-3 cursor-pointer hover:bg-[#FFF7E8] hover:rounded-lg flex items-center gap-3 h-[40px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M13.25 4.17998C13.4791 4.31029 13.6694 4.4993 13.8012 4.72755C13.933 4.95581 14.0016 5.21507 14 5.47865V10.3346C14 10.874 13.7047 11.3713 13.228 11.6333L8.728 14.48C8.5049 14.6025 8.25451 14.6667 8 14.6667C7.74549 14.6667 7.4951 14.6025 7.272 14.48L2.772 11.6333C2.53878 11.5059 2.34408 11.3181 2.20827 11.0896C2.07247 10.8612 2.00053 10.6004 2 10.3346V5.47798C2 4.93865 2.29533 4.44198 2.772 4.17998L7.272 1.52665C7.50169 1.40001 7.75971 1.33359 8.022 1.33359C8.28429 1.33359 8.54231 1.40001 8.772 1.52665L13.272 4.17998H13.25Z" stroke="#7D7D7D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 7.99999C6 8.53042 6.21071 9.03913 6.58579 9.4142C6.96086 9.78928 7.46957 9.99999 8 9.99999C8.53043 9.99999 9.03914 9.78928 9.41421 9.4142C9.78929 9.03913 10 8.53042 10 7.99999C10 7.46956 9.78929 6.96085 9.41421 6.58578C9.03914 6.2107 8.53043 5.99999 8 5.99999C7.46957 5.99999 6.96086 6.2107 6.58579 6.58578C6.21071 6.96085 6 7.46956 6 7.99999Z" stroke="#7D7D7D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {open && <p className='text-sm font-medium leading-normal tracking-[-0.25px]'>Settings</p>}
                        </div>
                        <div className='px-5 py-3 cursor-pointer hover:bg-[#FFF7E8] hover:rounded-lg  flex items-center gap-3 h-[40px] w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M9.33333 5.33332V3.99999C9.33333 3.64637 9.19286 3.30723 8.94281 3.05718C8.69276 2.80713 8.35362 2.66666 8 2.66666H3.33333C2.97971 2.66666 2.64057 2.80713 2.39052 3.05718C2.14048 3.30723 2 3.64637 2 3.99999V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1928 2.97971 13.3333 3.33333 13.3333H8C8.35362 13.3333 8.69276 13.1928 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667M6 7.99999H14M14 7.99999L12 5.99999M14 7.99999L12 9.99999" stroke="#B01212" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {open && <p className='text-sm text-[#B01212] font-medium leading-[14px] tracking-[-0.25px]'>Log out</p>}
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="md:hidden" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='cursor-pointer'>
                    <path d="M3 6H17M3 10H17M3 14H17" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

        </div>
    );
};

export default Sidebar;