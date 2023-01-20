import axios from '../api/axios'
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
            console.log(data.data)
            setAuth({
                auth: {
                    email: data.data.user.email,
                    first_name: data.data.user.first_name,
                    access_token: data.data.access_token,
                    trials: data.data.user.trials,
                    roles: data.data.user.role,
                    verified: data.data.user.account_verified
                },
            })
            return data.access_token
        } catch (error: any) {
            console.log(error)
        }
    }

    return refresh
}

export default useRefresh
