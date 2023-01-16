import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BiMailSend } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Header from '../components/home/Header'

function Verify() {
    const resendVerificationMail = async () => {}

    return (
        <Box p={'10px'}>
            <Header />
            <Box h={'50vh'} w={'100vw'}>
                <Flex
                    h={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    p={'10px'}
                    mt={'10px'}
                >
                    <Icon as={BiMailSend} fontSize={'150px'} />
                    <Text>
                        We have sent an email to the mail you registered with,
                        click the button to verify your account, get 3 free
                        trials and continue
                    </Text>
                    <Flex mt={'20px'}>
                        <Text>Didn't get the mail?</Text>
                        <Text
                            pl={'5px'}
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
