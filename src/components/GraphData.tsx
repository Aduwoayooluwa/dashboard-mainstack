import BarChart from '@/container/ChartSkeleton';
import useGetData  from '@/hooks/useGetData'
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';

type Props = {}

const GraphData = (props: Props) => {
    const { isLoading, data, error } = useGetData()


    // console.log(Object?.keys(data?.graph_data.views))
    // const xVal = Object?.keys(data?.graph_data.views)
  
    // console.log()
    const myDate  = new Date()
    let arrayDataX: any = []
    let arrayDataY: any = []
    if (typeof data !== null && typeof data !== 'undefined') {
      arrayDataX = [...Object?.keys(data?.graph_data.views)]
      arrayDataY = [...Object?.values(data?.graph_data.views)]
    }
    
    // console.log(arrayDataY)

    // const arrays: any = [
    //   { name: Object.keys(data.graph_data.views), uv: Object.values(data.graph_data.views)
    //   }
    // ]
    const datas = [
      {
        "x": arrayDataX[0],
        "y": arrayDataY[0],
      },
      {
        "x": arrayDataX[1],
        "y": arrayDataY[1],
      },
      {
        "x": arrayDataX[2],
        "y": arrayDataY[2],
      },
      {
        "x": arrayDataX[3],
        "y": arrayDataY[3],
      },
      {
        "x": arrayDataX[4],
        "y": arrayDataY[4],
      },
      {
        "x": arrayDataX[5],
        "y": arrayDataY[5],
      },

    ]

    if (isLoading) return <div className='my-6'>
      <BarChart />
    </div>

    if (error) return <div>Error in Program</div>
    // console.log(arrays)
  return (
    <div>
      <div className='my-6 '>
        <p className='font-semibold font-lg'>Page Views</p>
        <p>All Time</p>
      </div>
      
      <div></div>
      <AreaChart width={800} height={250} data={datas}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#FF5403" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#FF5403" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#FF5403" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#FF5403" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="x" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="y" stroke="#FF5403" fillOpacity={1} fill="url(#colorUv)" />
  </AreaChart>
    </div>
  )
}

export default GraphData