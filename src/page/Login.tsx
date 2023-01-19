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

function Login() {
    const [details, setDetails] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()

    const handleChange = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLInputElement

        const name = target.name
        const value = target.value

        setDetails({ ...details, [name]: value })
    }

    const url = `/auth/login`

    const loginUser = async () => {
        try {
            const data = await postRequest({ url, data: details })
            console.log(data)
            localStorage.setItem('persist_user', JSON.stringify(true))
            navigate('/')
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
                    {' '}
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
                    justifyContent={'space-around'}
                    p={'0'}
                >
                    <Box>
                        <Heading fontSize="30" fontWeight="bold">
                            Welcome Back
                        </Heading>
                        <Text fontSize="14" py="5">
                            Login and continue!
                        </Text>
                    </Box>
                    <Flex mt={['0', '0', '-40px']} flexDirection={'column'}>
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
                                value={details.email}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box w="100%">
                            <Text fontWeight="bold">Password</Text>
                            <Input
                                bg="#f5f5f5"
                                borderColor={'#f5f5f5'}
                                outline="#f5f5f5"
                                borderRadius={'30'}
                                height="12"
                                my="3"
                                placeholder="inedu joshua"
                                type="password"
                                name={'password'}
                                value={details.password}
                                onChange={handleChange}
                            />
                        </Box>

                        <Flex
                            my="2"
                            justifyContent={'space-between'}
                            alignItems="center"
                        >
                            <Link
                                to="/forgot_password"
                                style={{
                                    color: '#7723FE',
                                    textDecoration: 'underline',
                                    fontSize: 14,
                                }}
                            >
                                Forgot Password
                            </Link>
                        </Flex>
                        <Box my="5">
                            <Button onClick={loginUser} w="100%">
                                Login
                            </Button>
                            <Text fontSize="14" mt="5" textAlign="center">
                                Dont have an account?{' '}
                                <Link
                                    to="/register"
                                    style={{
                                        color: '#7723FE',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    Register
                                </Link>
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Login
