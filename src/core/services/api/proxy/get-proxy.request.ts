// getAgreementsFetchFn.ts
import axios from 'axios'
import TProxyRequestType from '@/core/types/api/proxy/proxy-request-type'

const getProxyFetchFn = async () => {
    // const url = `https://mtpro.xyz/api/?type=mtproto&_=${Date.now()}`
    const url = `https://raw.githubusercontent.com/hookzof/socks5_list/master/tg/mtproto.json?${Date.now()}`
    return axios.get<TProxyRequestType[]>(url)
}

export default getProxyFetchFn
