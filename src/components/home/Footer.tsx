import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import BodyText from '../TextElements/BodyText'

const Footer = () => {
    return (
        <Flex className="text-white sm:h-[500px] sm:px-10 py-20 flex flex-col justify-between 3xl:mx-auto 3xl:container">
            <Flex className="font-semibold text-lg flex flex-col sm:flex-row justify-between sm:w-[70%]">
                <h1 className="text-2xl py-5 sm:py-0">FASHUN.AI</h1>

                <Flex className="flex flex-col sm:flex-row text-stone-700 font-bold py-5 sm:py-0">
                    <Box className="sm:px-10">
                        <BodyText>SOCIALS</BodyText>

                        {/* <Flex className='flex'>
                        <div className='w-[50px] h-[50px] rounded-full bg-[#202020] mx-1 my-3'></div>
                        <div className='w-[50px] h-[50px] rounded-full bg-[#202020] mx-1 my-3'></div>
                        <div className='w-[50px] h-[50px] rounded-full bg-[#202020] mx-1 my-3'></div>
                      </div> */}
                    </Box>

                    <Box className="sm:px-10">
                        <BodyText>FUSHUN</BodyText>

                        <Box className="text-white text-xl sm:text-2xl my-3">
                            <BodyText className="py-2 font-normal">
                                Company
                            </BodyText>
                            <BodyText className="py-2 font-normal">
                                About Us
                            </BodyText>
                            <BodyText className="py-2 font-normal">
                                FAQ
                            </BodyText>
                        </Box>
                    </Box>
                </Flex>
            </Flex>

            <Box className="w-full xl:w-[47%]">
                <BodyText>
                    Built by a <Text as="span">Beamstudio</Text> on the
                    shoulders of{' '}
                    <Text as="span" className="underline">
                        machine learning giants
                    </Text>
                    . Funshi AI is a registered trademark and subject to
                    copyright worldwide.
                </BodyText>
            </Box>
        </Flex>
    )
}

export default Footer
