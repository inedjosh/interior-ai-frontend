import {
    Box,
    Flex,
    Image,
    Input,
    Checkbox,
    Show,
    Heading,
    Text,
    Button,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { postRequest } from './../utils/request'
import { baseUrl } from './../config'
import loader from '../utils/loader'
import { toast } from 'react-toastify'

function ResetPassword() {
    const [details, setDetails] = useState({
        otp: '',
        email: '',
        password: '',
        confirm_password: '',
    })
    const navigate = useNavigate()

    const handleChange = (e: React.SyntheticEvent) => {
        let target = e.target as HTMLInputElement
        const name = target.name
        const value = target.value
        setDetails({ ...details, [name]: value })
    }

    const url = `/auth/reset_password`

    const resetPassword = async () => {
        try {
            loader('md')
            const data = await postRequest({ url, data: details })
            navigate('/')
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    return (
        <Box p={['10px', '10px', '20px', '10']}>
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
                            src="images/reg.png"
                            width={'100%'}
                            height={'100%'}
                            objectFit={'cover'}
                            alt="registration-image"
                        />
                    </Box>
                </Show>
                <Flex
                    flex=".5"
                    flexDirection={'column'}
                    ml={['0', '0', '0', '10']}
                    mt="5"
                    p={'15px'}
                >
                    <Heading fontSize="30" fontWeight="bold">
                        Reset Password
                    </Heading>
                    <Text fontSize="14" py="5">
                        Reset password and login again!
                    </Text>
                    <Flex flexDirection={['column']}>
                        <Flex
                            justifyContent={'space-between'}
                            flexDirection={['column', 'column', 'row']}
                            my="5"
                        >
                            <Box w={['100%', '100%', '47%']}>
                                <Text fontWeight="bold">OTP</Text>
                                <Input
                                    bg="#f5f5f5"
                                    borderColor={'#f5f5f5'}
                                    outline="#f5f5f5"
                                    borderRadius={'30'}
                                    height="12"
                                    my="3"
                                    placeholder="OTP"
                                    type="text"
                                    name={'otp'}
                                    onChange={handleChange}
                                    value={details.otp}
                                />
                            </Box>
                            <Box w={['100%', '100%', '47%']}>
                                <Text fontWeight="bold">Email</Text>
                                <Input
                                    bg="#f5f5f5"
                                    borderColor={'#f5f5f5'}
                                    outline="#f5f5f5"
                                    borderRadius={'30'}
                                    height="12"
                                    my="3"
                                    placeholder="Email"
                                    type="email"
                                    name={'email'}
                                    onChange={handleChange}
                                    value={details.email}
                                />
                            </Box>
                        </Flex>
                        <Flex
                            justifyContent={'space-between'}
                            flexDirection={['column', 'column', 'row']}
                            my="5"
                        >
                            <Box w={['100%', '100%', '47%']}>
                                <Text fontWeight="bold">Password</Text>
                                <Input
                                    bg="#f5f5f5"
                                    borderColor={'#f5f5f5'}
                                    outline="#f5f5f5"
                                    borderRadius={'30'}
                                    height="12"
                                    my="3"
                                    placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;"
                                    type="password"
                                    name={'password'}
                                    onChange={handleChange}
                                    value={details.password}
                                />
                            </Box>
                            <Box w={['100%', '100%', '47%']}>
                                <Text fontWeight="bold">Confirm Password</Text>
                                <Input
                                    bg="#f5f5f5"
                                    borderColor={'#f5f5f5'}
                                    outline="#f5f5f5"
                                    borderRadius={'30'}
                                    height="12"
                                    my="3"
                                    placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;"
                                    type="password"
                                    name={'confirm_password'}
                                    onChange={handleChange}
                                    value={details.confirm_password}
                                />
                            </Box>
                        </Flex>

                        <Box my="5">
                            <Button onClick={resetPassword} w="100%">
                                Create Account
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ResetPassword
