import { Flex, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useRefresh from '../hooks/useRefresh'
import useAuth from './../hooks/useAuth'

function PersistLogin(props) {
    const { auth } = useAuth()
    const persist_user = localStorage.getItem('persist_user')
    const [loading, setLoading] = useState(true)
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

        if (!auth?.auth?.access_token && persist_user) {
            verifyResponseToken()
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <>
            {!persist_user ? (
                <Outlet />
            ) : loading ? (
                <Flex
                    flex={'1'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    w={'100vw'}
                    h={'100vh'}
                >
                    <Spinner />
                </Flex>
            ) : (
                <Outlet />
            )}
        </>
    )
}

export default PersistLogin
