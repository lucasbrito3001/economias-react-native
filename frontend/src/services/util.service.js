import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getToken() {
    const storedToken = await AsyncStorage.getItem('USER_TOKEN')

    return storedToken
}

export async function getId() {
    const storedId = await AsyncStorage.getItem('USER_ID')

    return storedId
}

export async function storeToken(token) {
    await AsyncStorage.setItem('USER_TOKEN', token)
}

export async function storeId(id) {
    await AsyncStorage.setItem('USER_ID', id)
}