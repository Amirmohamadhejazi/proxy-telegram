import { cn } from '@/core/utils/common/cn'
import React from 'react'
import TProxyCardProps from './ProxyCard.types'
import { Button, CopyButton } from '@mantine/core'
import Link from 'next/link'
import { MdContentCopy } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'
import { pingCardColor, formattedDate } from './ProxyCard.utils'
import { LazyCard } from '@/components/ui/atoms/LazyCard'

const ProxyCard = ({ data }: TProxyCardProps) => {
    return (
        <LazyCard>
            <div
                className={cn(
                    'flex min-h-[503px] flex-col rounded-lg border-4 border-slate-200 bg-gradient-to-b from-0% to-100% p-4 break-words shadow',
                    pingCardColor(data.ping, 'gradient')
                )}
            >
                <div className='flex grow flex-col gap-3 *:border-slate-300'>
                    <div className='flex grow items-start justify-start'>
                        <div className='flex items-center gap-2 rounded-lg text-sm'>
                            <div className={cn('animate-pulse rounded-full p-2', pingCardColor(data.ping, 'single'))} />
                            {data.ping}
                        </div>
                    </div>

                    {/* host name */}
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between gap-2'>
                            <span className='text-md font-bold'>Server (Host name):</span>
                            <CopyButton value={data.host}>
                                {({ copy, copied }) => (
                                    <Button
                                        variant='transparent'
                                        onClick={copy}
                                        disabled={copied}
                                        classNames={{
                                            root: 'disabled:!bg-transparent disabled:opacity-50 group/button',
                                            label: 'text-black group-disabled/button:text-black/10',
                                        }}
                                    >
                                        {copied ? (
                                            <FaCheck size={22} className='text-black' />
                                        ) : (
                                            <MdContentCopy size={22} />
                                        )}
                                    </Button>
                                )}
                            </CopyButton>
                        </div>
                        <span className='truncate text-sm font-medium'>{data.host}</span>
                    </div>

                    <hr />

                    {/* port */}
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between gap-2'>
                            <span className='text-md font-bold'>Port:</span>
                            <CopyButton value={data.port.toString()}>
                                {({ copy, copied }) => (
                                    <Button
                                        variant='transparent'
                                        onClick={copy}
                                        disabled={copied}
                                        classNames={{
                                            root: 'disabled:!bg-transparent disabled:opacity-50 group/button',
                                            label: 'text-black group-disabled/button:text-black/10',
                                        }}
                                    >
                                        {copied ? (
                                            <FaCheck size={22} className='text-black' />
                                        ) : (
                                            <MdContentCopy size={22} />
                                        )}
                                    </Button>
                                )}
                            </CopyButton>
                        </div>
                        <span className='truncate text-sm font-medium'>{data.port}</span>
                    </div>

                    <hr />

                    {/* secret */}
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between gap-2'>
                            <span className='text-md font-bold'>Secret:</span>
                            <CopyButton value={data.secret.toString()}>
                                {({ copy, copied }) => (
                                    <Button
                                        variant='transparent'
                                        onClick={copy}
                                        disabled={copied}
                                        classNames={{
                                            root: 'disabled:!bg-transparent disabled:opacity-50 group/button',
                                            label: 'text-black group-disabled/button:text-black/10',
                                        }}
                                    >
                                        {copied ? (
                                            <FaCheck size={22} className='text-black' />
                                        ) : (
                                            <MdContentCopy size={22} />
                                        )}
                                    </Button>
                                )}
                            </CopyButton>
                        </div>
                        <span className='truncate text-sm font-medium'>{data.secret}</span>
                    </div>

                    <hr />

                    {/* time */}
                    <div className='flex flex-col'>
                        <span className='text-md font-bold'>Updated:</span>
                        <span className='text-sm font-medium'>{formattedDate(data.updateTime)}</span>
                    </div>

                    <hr />

                    <div className='flex flex-col'>
                        <span className='text-md font-bold'>Created:</span>
                        <span className='text-sm font-medium'>{formattedDate(data.addTime)}</span>
                    </div>
                </div>
                <div className='mt-8 flex gap-2'>
                    <CopyButton value={`tg://proxy?server=${data.host}&port=${data.port}&secret=${data.secret}`}>
                        {({ copy, copied }) => (
                            <Button
                                variant='filled'
                                color='dark'
                                onClick={copy}
                                disabled={copied}
                                classNames={{ label: 'text-lg font-bold' }}
                                size='md'
                            >
                                {copied ? <FaCheck size={22} className='text-black' /> : <MdContentCopy size={22} />}
                            </Button>
                        )}
                    </CopyButton>
                    <Button
                        component={Link}
                        href={`tg://proxy?server=${data.host}&port=${data.port}&secret=${data.secret}`}
                        variant='filled'
                        color='dark'
                        size='md'
                        classNames={{ root: 'grow' }}
                    >
                        Go to link
                    </Button>
                </div>
            </div>
        </LazyCard>
    )
}

export default ProxyCard
