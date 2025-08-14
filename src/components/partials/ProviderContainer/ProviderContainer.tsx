'use client'
import { DirectionProvider, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const ProviderContainer = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: false,
                        refetchOnWindowFocus: false,
                        refetchOnReconnect: false,
                        //set stale time to 5 minutes
                        staleTime: 0,
                        gcTime: 0,
                    },
                },
            })
    )
    return (
        <QueryClientProvider client={queryClient}>
            <DirectionProvider>
                <MantineProvider>
                    <div className='h-screen w-full'>
                        <div className='mx-auto h-full lg:container'>{children}</div>
                    </div>
                </MantineProvider>
            </DirectionProvider>
            <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
        </QueryClientProvider>
    )
}

export default ProviderContainer
