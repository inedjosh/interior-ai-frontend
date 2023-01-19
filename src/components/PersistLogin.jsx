import { Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useRefresh from '../hooks/useRefresh'
import useAuth from './../hooks/useAuth'

function PersistLogin(props) {
    const { auth } = useAuth()
    const persist_user = localStorage.getItem(JSON.stringify('persist_user'))
    const [loading, setLoading] = useState(false)
    const refresh = useRefresh()

    useEffect(() => {
        let isMounted = true

        const verifyResponseToken = async () => {
            try {
                await refresh()
            } catch (error) {
                console.log(error)
            } finally {
                isMounted && setLoading(false)
            }
        }

        !auth?.access_token && persist_user
            ? verifyResponseToken()
            : setLoading(false)
    }, [])

    return (
        <>{!persist_user ? <Outlet /> : loading ? <Spinner /> : <Outlet />}</>
    )
}

export default PersistLogin
