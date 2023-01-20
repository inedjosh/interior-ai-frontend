import React, { createContext, useContext, useState } from 'react'

// type UserType = (
//     first_name: string,
//     last_name: string,
//     email: string,
//     roles: number,
//     tr
// )

interface State {
    auth: any
}

interface MyContextProps {
    auth: State
    setAuth: React.Dispatch<React.SetStateAction<State>>
}

const initialState: State = { auth: {} }

const AuthContext = createContext<MyContextProps>({
    auth: initialState,
    setAuth: () => {},
})

const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState(initialState)

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }
