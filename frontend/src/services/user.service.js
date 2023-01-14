import { httpClient } from "./httpClient.service"

export async function createUser({ name, email, password }) {
    try {
        const client = await httpClient()
    
        if(!name || !email || !password) return { status: false, error: 'Existem campos não preenchidos, verifique e tente novamente' }
    
        const { data } = await client.post("user", { name, email, password, type: 'establishment' })
    
        return data
    } catch (error) {
        return error.response.data
    }
}

export async function login({ email, password }) {
    try {
        const client = await httpClient()
    
        if(!email || !password) return { status: false, error: 'Existem campos não preenchidos, verifique e tente novamente' }
    
        const { data } = await client.post("user/login", { email, password })
    
        return data
    } catch (error) {
        return error.response.data
    }
}

export async function getUser(userId) {
    try {
        const client = await httpClient()
        
        const { data } = await client.get(`user/${userId}`)
    
        return data
    } catch (error) {
        return error.response.data
    }
}