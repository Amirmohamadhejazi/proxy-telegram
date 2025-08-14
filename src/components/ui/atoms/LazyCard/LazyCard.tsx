import { PropsWithChildren } from 'react'
import { useInView } from 'react-intersection-observer'

const LazyCard = ({ children }: PropsWithChildren) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    })

    return (
        <div ref={ref} className='h-full'>
            {inView ? children : <div className='min-h-[503px] rounded-lg bg-black/30 shadow' />}
        </div>
    )
}
export default LazyCard
