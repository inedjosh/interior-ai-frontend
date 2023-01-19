import {
    Box,
    Flex,
    Image,
    Input,
    Checkbox,
    Show,
    Text,
    Heading,
    Button,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl } from '../config'
import { postRequest } from '../utils/request'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const url = `/auth/forgot_password`

    const forgotPassword = async () => {
        try {
            const data = await postRequest({ url, data: email })
            console.log(data)

            navigate('/resetPassword')
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    return (
        <Box p="10">
            <Flex justifyContent={'flex-end'} w="100%">
                <Link
                    to="/"
                    style={{
                        color: '#7723FE',
                        textDecoration: 'underline',
                        fontSize: 13,
                        fontWeight: 500,
                    }}
                >
                    Go back to homepage
                </Link>
            </Flex>
            <Flex flexDirection={['column', 'column', 'column', 'row']}>
                <Show above="lg">
                    <Box
                        flex=".4"
                        h="90vh"
                        overflow={'hidden'}
                        borderRadius="40"
                    >
                        <Image
                            src="images/login.png"
                            w="100%"
                            h="100%"
                            objectFit={'cover'}
                            alt="login-description"
                        />
                    </Box>
                </Show>
                <Flex
                    flex=".5"
                    flexDirection={'column'}
                    ml={['0', '0', '0', '10']}
                    mt="5"
                    // justifyContent={'space-around'}
                    p={'0'}
                >
                    <Box>
                        <Heading fontSize="30" fontWeight="bold">
                            Forgot Password
                        </Heading>
                        <Text fontSize="14" py="5">
                            Input your email to reset your password and
                            continue!
                        </Text>
                    </Box>
                    <Flex mt={'30px'} flexDirection={'column'}>
                        <Box w="100%">
                            <Text fontWeight="bold">Email Address</Text>
                            <Input
                                bg="#f5f5f5"
                                borderColor={'#f5f5f5'}
                                outline="#f5f5f5"
                                borderRadius={'30'}
                                height="12"
                                my="3"
                                placeholder="inedu joshua"
                                name={'email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                        <Flex
                            my="2"
                            justifyContent={'space-between'}
                            alignItems="center"
                        >
                            <Flex>
                                <Text>Remembered Password?</Text>
                                <Link
                                    to="/login"
                                    style={{
                                        color: '#7723FE',
                                        textDecoration: 'underline',
                                        paddingLeft: 5,
                                    }}
                                >
                                    Login
                                </Link>
                            </Flex>
                        </Flex>
                        <Box my="5">
                            <Button onClick={forgotPassword} w="100%">
                                Get verification link
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ForgotPassword
