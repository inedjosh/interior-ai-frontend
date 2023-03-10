import axios from '../api/axios'
import sterilizeUser from '../utils/auth/sterilizeUser'
import useAuth from './useAuth'

function useRefresh() {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const getCookie = (name: any) => {
            const value = `; ${document.cookie}`
            const parts: any = value.split(`; ${name}=`)
            if (parts.length === 2) return parts.pop().split(';').shift()
        }
        console.log(getCookie('refresh_token'))

        try {
            const { data } = await axios.get('/auth/refresh')
            setAuth({
                auth: sterilizeUser(data)
            })
            return data.access_token
        } catch (error: any) {
            console.log(error)
        }
    }

    return refresh
}

export default useRefresh
