import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (<Box>
        <Flex>
            <Box>
                <Heading>Interior AI</Heading>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </Box>
            </Flex>
    </Box>)
}

export default Header
