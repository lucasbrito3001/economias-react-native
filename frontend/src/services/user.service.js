import { httpClient } from "./httpClient.service"

export async function createUser({ name, email, password }) {
    try {
        const client = await httpClient()
    
        if(!name || !email || !password) return { status: false, error: 'Missing informations, check and try again' }
    
        const { data } = await client.post("user", { name, email, password, type: 'establishment' })
    
        return data
    } catch (error) {
        return error.response.data
    }
}