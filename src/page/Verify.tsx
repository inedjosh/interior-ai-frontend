import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BiMailSend } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Header from '../components/home/Header'

function Verify() {
    const resendVerificationMail = async () => {}

    return (
        <Box>
            <Header />
            <Box h={'50vh'} w={'100vw'}>
                <Flex
                    h={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                >
                    <Icon as={BiMailSend} fontSize={'150px'} />
                    <Text>
                        We have sent an email to the mail you registered with,
                        click the button to verify your account, get 3 free
                        trials and continue
                    </Text>
                    <Flex>
                        <Text>Didn't get the mail?</Text>
                        <Text
                            pl={'10px'}
                            color={'green'}
                            textDecoration={'underline'}
                            onClick={resendVerificationMail}
                        >
                            Resend
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default Verify
