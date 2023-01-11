import axios from 'axios'

export const getRequest = async (url: string) => {
    try {
        const { data } = await axios.get(url)

        return data.data
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}

export const postRequest = async ({
    url,
    body,
    headers,
}: {
    url: string
    body: any
    headers: any
}) => {
    try {
        if (headers) {
            const { data } = await axios.post(url, body, { headers })

            return data.data
        } else {
            const { data } = await axios.post(url, body)

            return data.data
        }
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}

export const puRequest = async ({
    url,
    body,
    headers,
}: {
    url: string
    body: any
    headers: any
}) => {
    try {
        if (headers) {
            const { data } = await axios.put(url, body, { headers })

            return data.data
        } else {
            const { data } = await axios.put(url, body)

            return data.data
        }
    } catch (error: any) {
        throw new Error(error.reponse.data)
    }
}
