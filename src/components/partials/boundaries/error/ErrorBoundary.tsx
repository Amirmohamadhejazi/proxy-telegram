import { cn } from '@/core/utils/common/cn'
import { type IErrorBoundaryProps } from './resources'
import { BiError } from 'react-icons/bi'

const ErrorBoundary = ({ className = '', message, iconSize = 45 }: IErrorBoundaryProps) => {
    return (
        <div className={cn('flex h-full w-full flex-col items-center justify-center text-red-600', className)}>
            <div className='flex flex-col items-center gap-2'>
                <BiError size={iconSize} />
                {message && <span className='text-2xl font-bold'>{message}</span>}
            </div>
        </div>
    )
}

export default ErrorBoundary
