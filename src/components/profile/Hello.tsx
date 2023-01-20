import { Box, Flex, Spinner, Image, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { colors } from '../../constants/colors'
import BodyText from '../TextElements/BodyText'
import HeadingText from '../TextElements/Heading'
import PryBtn from '../UiElements/PryBtn'

const Hello = ({user}: any) => {
    const auth = {
        account_type: 'free',
        trials: 0,
        billing: {
            card_last_4digits: '1234',
            expiry: 'tomorrow',
        },
    }

    const navigate = useNavigate()

    const handlePro = () => {}

    const handleLogout = () => {}

    return (
        <Box color={'#000'}>
            <Flex
                justifyContent={['flex-start', 'flex-start', 'space-between']}
                borderRadius={'20px'}
                border={'2px dashed #ccc'}
                mt={'20px'}
                py={'50px'}
                px={['10px', '60px']}
                bg={colors.pryBck}
                flexDirection={['column', 'column', 'row']}
            >
                <Flex alignItems={['flex-start', 'flex-start', 'center']}>
                    <Image src="./images/userProfile.png" w={'80px'} alt="" />

                    <Box pl={'10px'}>
                        <HeadingText
                            color={'#fff'}
                            textTransform={'uppercase'}
                            fontSize={'50px'}
                        >
                            Hello!
                        </HeadingText>
                        <BodyText fontSize={'20px'} color={'#fff'}>
                            {user.first_name}
                        </BodyText>
                    </Box>
                </Flex>

                <Flex
                    mt={['20px', '20px', '0']}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Image src="./images/cloud.png" alt="" />
                </Flex>
            </Flex>

            {auth.account_type === 'free' ? (
                <Box
                    bg={colors.pryBck}
                    mt={'50px'}
                    w={'100%'}
                    p={'30px'}
                    borderRadius={'20px'}
                >
                    <Box py={'10px'}>
                        <HeadingText color={'#fff'}>
                            Account overview
                        </HeadingText>

                        <Box py={'10px'} color={'#fff'}>
                            <BodyText color={'#fff'}>Your plan</BodyText>
                            <BodyText color={'#fff'}>
                                PREMIUM INDIVIDUAL
                            </BodyText>
                        </Box>

                        <Box py={'10px'}>
                            <Box>
                                <BodyText color={'#fff'}>
                                    You have - {user.trials} trials more
                                </BodyText>
                                <BodyText py={'10px'} color={'#fff'}>
                                    Learn more about your plan
                                </BodyText>
                            </Box>

                            <Box py={'10px'}>
                                <BodyText color={'#fff'}>
                                    Payment details
                                </BodyText>
                                <BodyText color={'#fff'}>
                                    Your next bill is for 900.00 NGN on monday.
                                </BodyText>
                                <Box>
                                    <BodyText color={'#fff'}>
                                        Your card ending on{' '}
                                        {auth.billing?.card_last_4digits}{' '}
                                    </BodyText>
                                    <BodyText color={'#fff'}>
                                        Expires on {auth.billing?.expiry}
                                    </BodyText>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Button>Renew payment</Button>
                </Box>
            ) : (
                <Box>
                    <Flex justifyContent={'center'} alignItems={'center'}>
                        <Box
                            bg={colors.pryBck}
                            mt={'50px'}
                            w={'100%'}
                            p={'30px'}
                            borderRadius={'20px'}
                        >
                            <HeadingText color={'#fff'}>
                                Account overview
                            </HeadingText>

                            <Box py={'10px'}>
                                <BodyText color={'#fff'}>Your plan</BodyText>
                                <BodyText color={'#fff'}>FREE PLAN</BodyText>
                            </Box>

                            <Box>
                                <Box py={'10px'}>
                                    <BodyText color={'#fff'}>
                                        You have - {auth.trials} trials more
                                    </BodyText>
                                    <BodyText py={'30px'} color={'#fff'}>
                                        Learn more about our free plans
                                    </BodyText>
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex mt={'30px'}>
                        <PryBtn onClick={handlePro}>Buy trials</PryBtn>
                        <PryBtn ml={'30px'} onClick={handleLogout}>
                            Logout
                        </PryBtn>
                    </Flex>
                </Box>
            )}
        </Box>
    )
}

export default Hello
