import axios from 'axios'

export const postRequest = async ({
    url,
    data,
}: {
    url: string
    data: any
}) => {
    try {
        const response = await axios.post(url, data)
        return response.data
    } catch (error: any) {
        console.log(error)
        throw new Error(error.response.data.message)
    }
}

export const putReqest = async ({ url, data }: { url: string; data: any }) => {
    try {
        const response = await axios.put(url, data)
        console.log(response.data)
        return response.data
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

export const getRequest = async (url: string) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

export const deleteRequest = async (url: string) => {
    try {
        const response = await axios.delete(url)
        return response.data
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}
