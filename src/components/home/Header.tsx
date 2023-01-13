import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Box>
            <Flex
                justifyContent={['space-between']}
                px={['20px']}
                py={['10px']}
            >
                <Heading flex={['.5']}>Interior AI</Heading>
                <Flex flex={'.5'} justifyContent={'flex-end'}>
                    <Flex w={'200px'} justifyContent={'space-between'}>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header
