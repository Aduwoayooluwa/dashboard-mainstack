import React from 'react'
import ContentLoader from 'react-content-loader'
type Props = {}

const PieChartSkeleton = (props: Props) => {
  return (
    <ContentLoader width={200} height={200} viewBox="0 0 200 200" {...props}>
        
        <circle cx="60" cy="60" r="60" />
    </ContentLoader>
  )
}

export default PieChartSkeleton