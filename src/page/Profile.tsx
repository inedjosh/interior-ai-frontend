import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../config'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import Header from '../components/home/Header'
import Hello from '../components/profile/Hello'

const Profile = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    if (loading) {
        return (
            <Box h={'100vw'}>
                <Flex
                    h={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                >
                    <Spinner />
                </Flex>
            </Box>
        )
    }

    return (
        <div>
            <Header />
            <Hello />
        </div>
    )
}

export default Profile
