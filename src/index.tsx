import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            
            <AuthProvider>
                  <ChakraProvider theme={theme}>
                <Routes>
                  
                        <Route path="/*" element={<App />} />
                
                    </Routes>
                        </ChakraProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
