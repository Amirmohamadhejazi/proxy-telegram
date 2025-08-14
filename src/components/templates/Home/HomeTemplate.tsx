'use client'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import TProxyRequestType from '@/core/types/api/proxy/proxy-request-type'
import getAgreementsFetchFn from '@/core/services/api/proxy/get-proxy.request'
import { cn } from '@/core/utils/common/cn'
import { HomeContent } from '@/components/ui/organisms/HomeOrganisms/content'
import { Button } from '@mantine/core'
import { SlRefresh } from 'react-icons/sl'
import { LoadingBoundary } from '@/components/partials/boundaries/loading'
import { ErrorBoundary } from '@/components/partials/boundaries/error'
import { BsTelegram } from 'react-icons/bs'

const HomeTemplate = () => {
    const { data, isFetching, isSuccess, error, refetch } = useQuery<AxiosResponse<TProxyRequestType[]>>({
        queryKey: ['proxy-list'],
        queryFn: getAgreementsFetchFn,
    })

    const renderComponents = () => {
        if (isFetching) return <LoadingBoundary />
        if (error) return <ErrorBoundary message={(error as Error)?.message} />
        if (isSuccess) {
            return <HomeContent data={data.data} />
        }
    }

    return (
        <div className='flex size-full flex-col gap-5 py-5'>
            <div className='flex flex-wrap justify-between gap-2 bg-white px-3 text-3xl font-black'>
                <div className='flex items-center gap-3'>
                    <BsTelegram />
                    <span>Proxies</span>
                </div>
                <div className='flex items-center'>
                    <Button onClick={() => refetch()} disabled={isFetching} color='cyan'>
                        <SlRefresh />
                    </Button>
                </div>
            </div>
            <div
                className={cn('w-full grow overflow-auto px-3', {
                    'grid place-items-center': isFetching,
                })}
            >
                {renderComponents()}
            </div>
        </div>
    )
}

export default HomeTemplate
