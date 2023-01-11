import React from 'react'
import './App.css'
import { Box, ChakraProvider, Text } from '@chakra-ui/react'
import { theme } from './theme'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Home from './page/Home'
import Profile from './page/Profile'
import Suscribe from './page/Suscribe'
import Login from './page/Login'
import Register from './page/Register'
import Verify from './page/Verify'

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/suscribtion" element={<Suscribe />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify" element={<Verify />} />
            </Routes>
            <Box>
                <Text>Hello</Text>
            </Box>
        </ChakraProvider>
    )
}

export default App
