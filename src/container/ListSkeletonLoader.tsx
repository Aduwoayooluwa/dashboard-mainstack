import React from 'react'
import ContentLoader from 'react-content-loader'

type Props = {}

const ListSkeletonLoader = (props: Props) => {
  return (
    <ContentLoader viewBox="0 0 400 150" height={130} width={400} {...props}>
    <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
    <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
  )
}

export default ListSkeletonLoader