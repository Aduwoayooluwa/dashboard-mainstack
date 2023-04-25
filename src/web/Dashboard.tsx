import SideBar from '@/Layout/SideBar'
import GraphData from '@/components/GraphData'
import TopLocations from '@/components/TopLocations'
import TopReferralSource from '@/components/TopReferralSource'
import useGetData from '@/hooks/useGetData'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    const {  data, error, isLoading } = useGetData()

    return (
    <>
        <SideBar>
            <div className='w-full'>
                <p className='font-semibold text-black'>Dashboard</p>
                
                <div className='flex justify-between mt-10 items-center w-full'>
                    <div className='text-black'>
                        <p className='text-dark font-semibold text-[24px]'>Good morning Blessing</p>
                        <small>Check out your dashboard summary.</small>
                    </div>

                    <div>
                        <p className='text-[#FF5403]'>View Analytics</p>
                    </div>
                </div>

                <section className='flex items-center text-black w-2/3 my-10 justify-evenly'>
                    <div className='rounded-full font-semibold p-2 w-full '>
                        1 Day
                    </div>

                    <div className='rounded-full p-2 w-full'>
                        <p className='font-semibold'>3 Days</p>
                    </div>

                    <div className='rounded-full p-2 w-full'>
                        <p className='font-semibold'>7 Days</p>
                    </div>

                    <div className='rounded-full p-2 w-full'>
                        <p className='font-semibold'>30 Days</p>
                    </div>

                    <div className='rounded-full p-2 w-full bg-[#FFDDCD] text-[#FF5403] font-semibold border-[#FF5403] border grid place-items-center'>
                        <p>All Time</p>
                    </div>

                    <div className='rounded-full p-2 w-full ml-3 '>
                        <p className='text-sm font-semibold'>Custom Date</p>
                    </div>
                </section>
                
                {/* graph data representation */}
                <section>
                    <GraphData data={data} error={error} isLoading={isLoading}/>
                </section>

                {/* top datats */}
                <section className='flex justify-between items-center w-full'>
                    <div>
                        <TopLocations data={data} error={error} isLoading={isLoading}/>
                    </div>

                    <div>
                        <TopReferralSource data={data} error={error} isLoading={isLoading}/>
                    </div>
                </section>
            </div>
        </SideBar>
    </>
  )
}

export default Dashboard