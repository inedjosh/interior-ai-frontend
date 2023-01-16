import {
    Box,
    Flex,
    Image,
    Input,
    Spinner,
    Text,
    Select,
} from '@chakra-ui/react'
import React, { useState, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import PryBtn from '../UiElements/PryBtn'

function TextToImage() {
    const [text, setText] = useState('')
    const [error, setError] = useState('')

    const [details, setDetails] = useState({
        gender: '',
        size: '',
        sleeve: '',
        material: '',
        color: '',
        renders: 1,
        realism: '',
    })
    const [image, setImage] = useState('')
    const [resultUrl, setResultUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [imgBlob, setImgBlob] = useState()

    //   useEffect(() => {
    //     if (details.gender === "male" && accountType === "free") {
    //       freeCategory.push(...freeMenCategory);
    //     } else {
    //       freeCategory.push(...freeWomenCategory);
    //     }
    //   }, [details.gender]);

    //   useEffect(() => {
    //     if (details.gender === "male" && accountType !== "free") {
    //       proCategory.push(...proMenCategory);
    //     } else {
    //       proCategory.push(...proWemenCategory);
    //     }
    //   }, [details.gender]);

    //   useEffect(() => {
    //     console.log("free", freeCategory);
    //     console.log("pro", proCategory);
    //   }, [details.gender]);

    const handleChange = () => {
        // const name = e.target.name;
        // const value = e.target.value;
        // setDetails((data) => ({ ...data, [name]: value }));
        // console.log(details);
    }

    return (
        <Flex
            w={'100%'}
            mt={'20px'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            mb={'40px'}
        >
            {resultUrl ? (
                <Image
                    src={resultUrl}
                    borderRadius={'20px'}
                    w={['90%', '90%', '95%']}
                    h={'400px'}
                    objectFit={'cover'}
                />
            ) : (
                <Flex
                    w={'100%'}
                    mt={'20px'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    <Box
                        w={'90%'}
                        bg={'#202020'}
                        h={'50px'}
                        borderRadius={'10px'}
                    >
                        <Input
                            border={'none'}
                            outline={'none'}
                            appearance={'none'}
                            bg={'#202020'}
                            placeholder={'Image description'}
                            color={'#fff'}
                            opacity={'.5'}
                            h={'50px'}
                            name="gender"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            borderRadius={'10px'}
                        />
                    </Box>
                    <Flex
                        w={'90%'}
                        mt={'20px'}
                        justifyContent={'space-between'}
                        flexDirection={['column', 'column', 'row']}
                    >
                        <Box
                            bg={'#202020'}
                            h={'50px'}
                            w={['100%', '100%', '48%', '48%']}
                            borderRadius={'10px'}
                        >
                            <Select
                                border={'none'}
                                outline={'none'}
                                appearance={'none'}
                                bg={'#202020'}
                                placeholder={'Gender'}
                                color={'#fff'}
                                opacity={'.5'}
                                h={'50px'}
                                name="gender"
                                onChange={handleChange}
                                borderRadius={'10px'}
                            >
                                <option value={'male'}>Male</option>
                                <option value={'female'}>Female</option>
                            </Select>
                        </Box>
                        <Box
                            bg={'#202020'}
                            h={'50px'}
                            w={['100%', '100%', '48%', '48%']}
                                borderRadius={'10px'}
                                mt={[ '20px', '20px', '0']}
                        >
                            <Select
                                border={'none'}
                                outline={'none'}
                                appearance={'none'}
                                bg={'#202020'}
                                placeholder={'Category'}
                                color={'#fff'}
                                opacity={'.5'}
                                h={'50px'}
                                onChange={handleChange}
                                name={'category'}
                                borderRadius={'10px'}
                            >
                                {/* {accountType === "free"
                  ? freeWomenCategory.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.name}
                      </option>
                    ))
                  : proMenCategory.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.name}
                      </option>
                    ))} */}
                            </Select>
                        </Box>
                    </Flex>
                    <Flex
                        w={'90%'}
                        py={'20px'}
                        justifyContent={'space-between'}
                        flexDirection={['column', 'column', 'row']}
                    >
                        <Flex
                            w={['100%', '100%', '48%', '48%']}
                            justifyContent={'space-between'}
                            h={'50px'}
                        >
                            <Flex
                                w={['47%']}
                                bg={'#202020'}
                                borderRadius={'10px'}
                            >
                                <Select
                                    border={'none'}
                                    outline={'none'}
                                    appearance={'none'}
                                    bg={'#202020'}
                                    placeholder={'Size'}
                                    color={'#fff'}
                                    opacity={'.5'}
                                    h={'50px'}
                                    onChange={handleChange}
                                    name={'size'}
                                    borderRadius={'10px'}
                                >
                                    {/* {size.map((size, index) => (
                    <option key={index} value={size.value}>
                      {size.name}
                    </option>
                  ))} */}
                                </Select>
                            </Flex>
                            <Flex
                                w={['47%']}
                                bg={'#202020'}
                                h={'50px'}
                                borderRadius={'10px'}
                            >
                                <Select
                                    border={'none'}
                                    outline={'none'}
                                    appearance={'none'}
                                    bg={'#202020'}
                                    placeholder={'Sleeve'}
                                    color={'#fff'}
                                    opacity={'.5'}
                                    h={'50px'}
                                    onChange={handleChange}
                                    name={'sleeve'}
                                    borderRadius={'10px'}
                                >
                                    {/* {sleeve.map((item, index) => (
                    <option key={index} value={item.value}>
                      {item.name}
                    </option>
                  ))} */}
                                </Select>
                            </Flex>
                        </Flex>
                        <Flex
                            w={['100%', '100%', '48%', '48%']}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Flex
                                w={['47%']}
                                mt={['30px', '30px', '0']}
                                bg={'#202020'}
                                h={'50px'}
                                borderRadius={'10px'}
                            >
                                <Select
                                    border={'none'}
                                    outline={'none'}
                                    appearance={'none'}
                                    bg={'#202020'}
                                    placeholder={'Color'}
                                    color={'#fff'}
                                    opacity={'.5'}
                                    h={'50px'}
                                    onChange={handleChange}
                                    name={'color'}
                                    borderRadius={'10px'}
                                >
                                    {/* {accountType === "free"
                    ? freeColor.map((item, index) => (
                        <option value={item.value} key={index}>
                          {item.name}
                        </option>
                      ))
                    : proColor.map((item, index) => (
                        <option value={item.value} key={index}>
                          {item.name}
                        </option>
                      ))} */}
                                </Select>
                            </Flex>
                            <Flex
                                w={['47%']}
                                mt={['30px', '30px', '0']}
                                bg={'#202020'}
                                h={'50px'}
                                borderRadius={'10px'}
                            >
                                <Select
                                    border={'none'}
                                    outline={'none'}
                                    appearance={'none'}
                                    bg={'#202020'}
                                    placeholder={'Material'}
                                    color={'#fff'}
                                    opacity={'.5'}
                                    h={'50px'}
                                    onChange={handleChange}
                                    name={'color'}
                                    borderRadius={'10px'}
                                >
                                    {/* {accountType === "free" ? (
                    <option value={"Pro"}>Pro version only</option>
                  ) : (
                    clothMaterial.map((item, index) => (
                      <option value={item.value} key={index}>
                        {item.name}
                      </option>
                    ))
                  )} */}
                                </Select>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        w={'90%'}
                        justifyContent={'space-between'}
                        flexDirection={['column', 'column', 'row']}
                    >
                        <Flex
                            my={['20px', '20px', '10px']}
                            justifyContent={'space-between'}
                            w={['100%', '100%', '48%']}
                        >
                            <Flex
                                w={['47%']}
                                bg={'#202020'}
                                h={'50px'}
                                borderRadius={'10px'}
                            >
                                <Select
                                    border={'none'}
                                    outline={'none'}
                                    appearance={'none'}
                                    bg={'#202020'}
                                    placeholder={'Realism'}
                                    color={'#fff'}
                                    opacity={'.5'}
                                    h={'50px'}
                                    onChange={handleChange}
                                    name={'realism'}
                                    borderRadius={'10px'}
                                >
                                    {/* {accountType === "free"
                    ? freeRealism.map((item, index) => (
                        <option value={item.value} key={index}>
                          {item.name}
                        </option>
                      ))
                    : proRealism.map((item, index) => (
                        <option value={item.value} key={index}>
                          {item.name}
                        </option>
                      ))} */}
                                </Select>
                            </Flex>
                            <Flex
                                w={['47%']}
                                bg={'#202020'}
                                h={'50px'}
                                borderRadius={'10px'}
                            >
                                <Select
                                    border={'none'}
                                    outline={'none'}
                                    appearance={'none'}
                                    bg={'#202020'}
                                    placeholder={'No of Render'}
                                    color={'#fff'}
                                    opacity={'.5'}
                                    h={'50px'}
                                    onChange={handleChange}
                                    name={'renders'}
                                    borderRadius={'10px'}
                                >
                                    {/* {accountType === "free" ? (
                    <option value={1}>1</option>
                  ) : (
                    noOfrenders.map((item, index) => (
                      <option value={item.value} key={index}>
                        {item.name}
                      </option>
                    ))
                  )} */}
                                </Select>
                            </Flex>
                        </Flex>
                        ;
                    </Flex>
                    <Flex
                        w={'100%'}
                        mt={'60px'}
                        flexDirection={['column']}
                        alignItems={'center'}
                    >
                        <PryBtn mt={['-40px', '-40px', '0']} w={['90%', '90%', '50%']} bg={'#791AE9'}>
                            {loading ? <Spinner /> : 'Generate Image'}
                        </PryBtn>
                        {/* {error && (
              <BodyText color={"red"} ml={"10px"} fontSize={"12px"}>
                {error}
              </BodyText>
            )} */}
                    </Flex>
                </Flex>
            )}
        </Flex>
    )
}

export default TextToImage
