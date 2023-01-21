import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function AuthenticateUser() {
    const { auth } = useAuth()
    const location = useLocation()

    return !auth?.auth?.access_token ? (
        <Navigate to="/login" state={{ from: location }} replace />
    ) : (
        <Outlet />
    )
}

export default AuthenticateUser
