import '@mantine/core/styles.css'
import '@/styles/globals.css'

import { Metadata } from 'next'
import { ProviderContainer } from '@/components/partials/ProviderContainer'
import { PropsWithChildren } from 'react'

export async function generateMetadata(): Promise<Metadata> {
    return {
        icons: {
            icon: '/images/logo.jpg',
        },
        title: 'proxy telegram',
    }
}

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang={'en'}>
            <body>
                <ProviderContainer>{children}</ProviderContainer>
            </body>
        </html>
    )
}
