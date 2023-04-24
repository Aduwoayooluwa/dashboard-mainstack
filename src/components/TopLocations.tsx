import useGetData from '@/hooks/useGetData'
import { Location } from '@/utils/locations'
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
type Props = {}

const TopLocations = (props: Props) => {
    const { data, error, isLoading } = useGetData()

    const percentArr: any = []
    const countryArr: any = []

    data?.top_locations!== undefined && data.top_locations.map((item: any) => {
        percentArr.push(item.percent)
    })

    data?.top_locations!== undefined && data.top_locations.map((item: any) => {
        countryArr.push(item.country)
    })

    if (isLoading || data?.top_locations === undefined) {
        return <>Loading..</>
    }
    return (
        <div className='w-[500px] p-5 bg-white my-14 shadow-sm rounded-md border border-1-gray-500 h-[326px]'>
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>Top Locations</p>
                <p className='text-xs'>View Full Reports</p>
            </div>

            <div className='flex item-center justify-between'>
                <div className='mt-8'>
                    {/* {
                        Location.map((data: any, index: number) => {
                            return (
                                <div key={index} className='flex items-center font-medium leading-8 my-2'>
                                    <img className='mr-2' src={data.flag !== undefined ? data.flag : ''} alt={data.country} />
                                    <p className='font-medium'>{data.country}</p>
                                    <p className='font-semibold ml-2'>{data.percentage}%</p>
                                </div>
                            )
                        })
                    } */}

                    {
                        data?.top_locations!== undefined && data.top_locations.map((data:any, index:number) => {
                            return (
                                <div key={index} className='flex items-center font-medium leading-8 my-2'>
                                    {/* <img className='mr-2' src={data.flag !== undefined ? data.flag : ''} alt={data.country} /> */}
                                    <p className='font-medium'>{data.country}</p>
                                    <p className='font-semibold ml-2'>{data.percent}%</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='w-[200px]'>
                <PieChart
                    data={[
                        { title: countryArr[0], value: percentArr[0], color: '#E38627' },
                        { title: countryArr[1], value: percentArr[1], color: '#C13C37' },
                        { title: countryArr[2], value: percentArr[2], color: '#6A2135' },
                        { title: countryArr[3], value: percentArr[3], color: '#2efec3' },
                        { title: countryArr[4], value: percentArr[4], color: '#fefefe' },
                    ]}
                
                />;
                </div>
            </div>
        </div>
    )
}

export default TopLocations