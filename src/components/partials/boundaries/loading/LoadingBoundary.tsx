import { cn } from '@/core/utils/common/cn'
import { type ILoadingBoundaryProps } from './resources'
import { IoReloadOutline } from 'react-icons/io5'

const LoadingBoundary = ({ className = '', iconSize = 35 }: ILoadingBoundaryProps) => {
    return (
        <div className={cn('flex h-full w-full flex-col items-center justify-center', className)}>
            <IoReloadOutline className={cn('animate-spin', className)} size={iconSize} />
        </div>
    )
}

export default LoadingBoundary
