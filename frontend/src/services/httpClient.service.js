import axios from 'axios'
import { baseURL } from '../../env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const httpClient = async () => {
    const loginToken = await AsyncStorage.getItem('JWT')

    return axios.create({
        baseURL,
        Authorization: loginToken || '',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    })
} 

export { httpClient }