// getAgreementsFetchFn.ts
import axios from 'axios'
import TProxyRequestType from '@/core/types/api/proxy/proxy-request-type'

const getProxyFetchFn = async () => {
    const url = `https://mtpro.xyz/api/?type=mtproto&_=${Date.now()}`
    return axios.get<TProxyRequestType[]>(url)
}

export default getProxyFetchFn
