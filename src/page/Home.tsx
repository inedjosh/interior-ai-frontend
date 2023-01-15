import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import StartUsing from '../components/home/StartUsing'

function home() {
    return (
        <Box p={'20px'}>
            <Header />
            <Hero />
            <StartUsing />
            <Footer />
        </Box>
    )
}

export default home
