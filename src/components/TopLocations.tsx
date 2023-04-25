import ListSkeletonLoader from '@/container/ListSkeletonLoader'
import PieChartSkeleton from '@/container/PieChartSkeleton'
import { PieChart } from 'react-minimal-pie-chart'

type Props = {
    data:any
    error:any
    isLoading: boolean
}

const TopLocations = ({data, error, isLoading }: Props) => {
    // const {  data, error, isLoading } = useGetData()

    const percentArr: any = []
    const countryArr: any = []

    // data?.top_locations!== undefined && data.top_locations.map((item: any) => {
    //     percentArr.push(item.percent)
    // })

    if (typeof data !== null && typeof data !== 'undefined') {
        data.top_locations.map((item: any) => {
            percentArr.push(item.percent)
        })
    }

    // data?.top_locations!== undefined && data.top_locations.map((item: any) => {
    //     countryArr.push(item.country)
    // })

    if (typeof data !== null && typeof data !== 'undefined') {
        data.top_locations.map((item: any) => {
            countryArr.push(item.country)
        })
    }

    

    if (isLoading) {
        return <>
        <div className='w-[500px] p-5  bg-white my-14 shadow-sm rounded-md border border-1-gray-500 h-[326px]'>
            <div className='flex text-black justify-between items-center'>
                <p className='font-semibold'>Top Locations</p>
                <p className='text-xs'>View Full Reports</p>
            </div>

            <div className='flex item-center justify-between'>
                <div className='mt-8'>

                    <ListSkeletonLoader />
                </div>

                <div className='w-[200px]'>
                    <PieChartSkeleton />
                </div>
            </div>
        </div>
            
        </>
    }
    return (
        <div className='w-[500px] p-5 bg-white my-14 shadow-sm rounded-md border border-1-gray-500 h-[326px]'>
            <div className='flex text-black justify-between items-center'>
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
                                <div key={index} className='flex text-black items-center font-medium leading-8 my-2'>
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
                lineWidth={35} 
                    data={[
                        { title: countryArr[0], value: percentArr[0], color: '#599EEA' },
                        { title: countryArr[1], value: percentArr[1], color: '#844FF6' },
                        { title: countryArr[2], value: percentArr[2], color: '#0FB77A' },
                        { title: countryArr[3], value: percentArr[3], color: '#FAB70A' },
                        { title: countryArr[4], value: percentArr[4], color: '#F09468' },
                    ]}
                
                />;
                </div>
            </div>
        </div>
    )
}

export default TopLocations