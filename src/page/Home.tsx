import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/home/Header'

function index() {
    return (
        <Box>
            <Header />
            <Text color={'#000'}>Hello</Text>
        </Box>
    )
}

export default index;
