import axios from 'axios'
import { baseURL } from '../../env'
import { getToken } from './util.service'

const httpClient = async () => {
    const loginToken = await getToken()

    return axios.create({
        baseURL,
        headers: {
            Authorization: loginToken || '',
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
} 

export { httpClient }