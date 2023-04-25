import React from 'react'
import { others_1, others_2, sideBarMenu } from './sidebarMenu'

type Props = {
    children: React.ReactElement
}

const SideBar = (props: Props) => {
  return (
    <>
        <main className='flex items-start w-full h-full bg-white'>
            <div className='bg-white w-[304px] h-full p-10'>
                <img src='/assets/main_logo.svg' alt='' />
                    <section className='mb-8'>
                        {
                            sideBarMenu.map((items:any, index: number) => {
                                return (
                                    <div key={index} className='cursor-pointer items-center flex my-3'>
                                        <img className='mr-3' src={items.icon} alt={items.name} />
                                        <p className='font-medium text-[#4D5760] text-[16px]'>{items.name}</p>
                                    </div>
                                )
                            })
                        }   
                    </section>
                    {/* other section.... */}
                    <section className='mb-8'>
                        <p className='text-[#4D5760]'>Others 2</p>
                        {
                                others_1.map((items:any, index: number) => {
                                    return (
                                        <div key={index} className='cursor-pointer flex items-center my-3'>
                                            <img className='mr-3' src={items.icon} alt={items.name} />
                                            <p className='font-medium text-[#4D5760] text-[16px]'>{items.name}</p>
                                        </div>
                                    )
                                })
                        }
                    </section>

                    {/* other 2 section */}

                    <section className='mb-8'>
                        <p className='text-[#4D5760]'>Others 1</p>
                        {
                            others_2.map((items:any, index: number) => {
                                return (
                                    <div key={index} className='cursor-pointer flex items-center my-3'>
                                        <img className="mr-3" src={items.icon} alt={items.name} />
                                        <p className='font-medium text-[#4D5760] text-[16px]'>{items.name}</p>
                                    </div>
                                )
                            })
                        }
                    </section>

                    <section className='text-[#4D5760] mt-28 flex items-center'>
                        <img className='rounded-full mr-2' src='/assets/blessing_main.svg' alt='' loading='lazy' />
                        <p>Blessing Daniels</p>
                    </section>
            </div>

            <div className='w-full p-8'>
                { props.children }
            </div>
        </main>
       
    </>
  )
}

export default SideBar