import React, { useState, useContext } from 'react'
import axios from 'axios'

import { Box, Flex, Button } from '@chakra-ui/react'
import HeadingText from '../TextElements/Heading'
import BodyText from '../TextElements/BodyText'
import { colors } from '../../constants/colors'
import ImageTransform from './ImageTransform'
import TextToImage from './TextToImage'

const StartUsing = () => {
    const [text, setText] = useState('')
    const [resultUrl, setResultUrl] = useState('')
    const [imgDescribtion, setImgDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [img, setImg] = useState([])

    const [imageState, setImageState] = useState('image')

    return (
        <Box mb={'100px'}>
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                my={'50px'}
            >
                <HeadingText
                    color={'#202020'}
                    fontSize={['30px', '30px', '40px', '60px']}
                >
                    Start using Fushon AI
                </HeadingText>
                <BodyText color={'#202020'}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia ipsum mollitia natus fugit veniam praesentium quo
                    maxime quod, voluptas laborum.
                </BodyText>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'} mb={'35px'}>
                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    py={'15px'}
                    px={'20px'}
                    borderRadius={'10px'}
                    bg={colors.pryBck}
                    w={'fit-content'}
                >
                    <Button
                        bg={imageState === 'image' ? '#fff' : ''}
                        p={imageState === 'image' ? '10px' : ''}
                        borderRadius={imageState === 'image' ? '10px' : ''}
                        mr={'10px'}
                        onClick={() => setImageState('image')}
                    >
                        <BodyText
                            color={imageState === 'image' ? '#000' : '#fff'}
                        >
                            Use an image
                        </BodyText>
                    </Button>
                    <Button
                        bg={imageState === 'text' ? '#fff' : ''}
                        p={imageState === 'text' ? '10px' : ''}
                        borderRadius={imageState === 'text' ? '10px' : ''}
                        onClick={() => setImageState('text')}
                    >
                        <BodyText
                            color={imageState === 'text' ? '#000' : '#fff'}
                        >
                            Use text
                        </BodyText>
                    </Button>
                </Flex>
            </Flex>
            <Box>
                {imageState === 'image' ? <ImageTransform /> : <TextToImage />}
            </Box>
        </Box>
    )
}

export default StartUsing
