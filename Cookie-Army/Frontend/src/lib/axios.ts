import Axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

const axios = Axios.create({
    baseURL: baseURL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
})

export const comet = Axios.create({
    baseURL: `https://${process.env.COMETCHAT_ID}.api-${process.env.COMETCHAT_REGION}.cometchat.io/v3`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        apikey: process.env.COMETCHAT_API
    }
})

export const csrf = () => axios.get(baseURL + '/sanctum/csrf-cookie')

export default axios