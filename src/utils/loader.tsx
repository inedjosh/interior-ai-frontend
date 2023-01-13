import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

function loader(size: string) {
    return (
        <Box>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size={size}
            />
        </Box>
    )
}

export default loader
