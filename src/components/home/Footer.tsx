import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import BodyText from '../TextElements/BodyText'

const Footer = () => {
    return (
        <Flex flexDirection={'column'}>
            <Flex flexDirection={'column'}>
                <BodyText color={'#000'}>FASHUN.AI</BodyText>
                <Flex>
                    {/* <Box>
                        <BodyText color={'#000'}>SOCIALS</BodyText>
                        <Box ></Box>
                        <Box></Box>
                        <Box></Box>
                    </Box> */}
                    <Box>
                        {/* <BodyText color={'#000'}>FUSHUN</BodyText> */}
                        <Flex flexDirection={'column'}>
                            <Link to="/" color={'#000'}>
                                Company
                            </Link>
                            <Link to="/" color={'#000'}>
                                About Us
                            </Link>
                            <Link to="/" color={'#000'}>
                                FAQ
                            </Link>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
            <Box mt={['20px', '20px', '0']}>
                <BodyText color={'#000'} textAlign={'center'}>
                    Built by a <Text as="span">Beamstudio</Text> on the
                    shoulders of <Text as="span">machine learning giants</Text>.
                    Funshi AI is a registered trademark and subject to copyright
                    worldwide.
                </BodyText>
            </Box>
        </Flex>
    )
}

export default Footer
