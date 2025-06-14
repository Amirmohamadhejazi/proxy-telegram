import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
    const cookieStore = (await cookies()).get('MY_NEXT_APP_LOCALE')?.value || 'en'
    const locale = cookieStore

    return {
        locale,
        messages: (await import(`../../constants/messages/${locale}.json`)).default,
    }
})
