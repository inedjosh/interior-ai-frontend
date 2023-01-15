import { Button, Flex, Box, Image, Text } from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import PryBtn from '../UiElements/PryBtn'
import HeadingText from '../TextElements/Heading'
import BodyText from '../TextElements/BodyText'

const Hero = () => {
    const navigate = useNavigate()

    return (
        <Flex bg={'#202020'} borderRadius={'10px'} my={'20px'} color={'#fff'}>
            <Flex flexDirection={'column'} flex={'.5'} p={'20px'}>
                <HeadingText fontSize={'70px'}>
                    Get{' '}
                    <Text as="span" color={'#F602CA'}>
                        new
                    </Text>{' '}
                    interior designs in seconds
                </HeadingText>
                <BodyText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    necessitatibus consequuntur ipsum est beatae repudiandae,
                    animi hic voluptate tenetur voluptatibus enim ipsam alias
                    fuga cupiditate doloribus. Veritatis nam nobis deserunt?
                </BodyText>

                <Flex
                    my={'20px'}
                    justifyContent={['center']}
                    alignItems={'center'}
                    w={'100%'}
                >
                    <PryBtn bg={'#C81AD2'} w={['100%', '100%', '80%', '900%']}>
                        <Link to="/"> Buy trials</Link>
                    </PryBtn>
                </Flex>
            </Flex>

            <Flex flex={'.5'}>
                <Flex h={'100%'} flex={'.5'} flexDirection={'column'}>
                    <Box
                        borderBottomRightRadius={'10px'}
                        borderBottomLeftRadius={'10px'}
                        mx={'10px'}
                        overflow={'hidden'}
                        h={'70%'}
                        mt={'0px'}
                    >
                        <Image
                            h={'100%'}
                            src="./images/img-one.jpeg"
                            objectFit={'cover'}
                            alt=""
                        />
                    </Box>
                    <Box
                        borderTopRightRadius={'10px'}
                        w={'95%'}
                        borderTopLeftRadius={'10px'}
                        mx={'10px'}
                        overflow={'hidden'}
                        h={'30%'}
                        mt={'10px'}
                    >
                        <Image
                            h={'100%'}
                            objectFit={'cover'}
                            w={'100%'}
                            src="./images/img-two.jpeg"
                            alt=""
                        />
                    </Box>
                </Flex>
                <Flex h={'100%'} flex={'.5'} flexDirection={'column'}>
                    <Box
                        borderBottomRightRadius={'10px'}
                        w={'90%'}
                        borderBottomLeftRadius={'10px'}
                        mx={'10px'}
                        overflow={'hidden'}
                        h={'30%'}
                        mt={'0px'}
                    >
                        <Image
                            h={'100%'}
                            objectFit={'cover'}
                            w={'100%'}
                            src="./images/img-three.jpeg"
                            alt=""
                        />
                    </Box>
                    <Box
                        borderTopRightRadius={'10px'}
                        borderTopLeftRadius={'10px'}
                        mx={'10px'}
                        overflow={'hidden'}
                        h={'70%'}
                        mt={'10px'}
                    >
                        <Image
                            h={'100%'}
                            src="./images/img-four.jpeg"
                            objectFit={'cover'}
                            alt=""
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Hero
