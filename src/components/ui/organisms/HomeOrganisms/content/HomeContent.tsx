import React from 'react'
import IHomeContentProps from './HomeContent.types'

import { ProxyCard } from './ProxyCard'

const Home = ({ data }: IHomeContentProps) => {
    const sortedProxies = data.filter((f) => f.ping > 1 && f.ping < 1000).sort((a, b) => a.updateTime - b.updateTime)
    // const sortedProxies = data.filter((f) => f.ping > 1 && f.ping < 1000).sort((a, b) => a.ping - b.ping)
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {sortedProxies.map((item, i) => (
                <ProxyCard data={item} key={i} />
            ))}
        </div>
    )
}

export default Home
