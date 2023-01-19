import axios from '../api/axios'
import useAuth from './useAuth'

function useRefresh() {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const { data } = await axios.get('/auth/refresh')
        console.log(data)
        setAuth((prev) => {
            return {
                ...prev,
                access_token: data.access_token,
            }
        })
        return data.access_token
    }

    return refresh
}

export default useRefresh
