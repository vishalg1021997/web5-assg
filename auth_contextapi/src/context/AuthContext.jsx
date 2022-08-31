import React from 'react'

export const AuthContext = React.createContext();

export function AuthContextProvider({children}){

    const [flag,setFlag] = React.useState(false)
    const [toggel,setToggel] = React.useState('Login')
    const [token,setToken] = React.useState('')

    const isAuth = (val) => {
        setFlag(!flag)
        // setToken(flag ? val:'')
        setToken(val)
        console.log('isAuth',flag,token)
    }

    const toggleAuth = () => {
        setToggel(flag ? 'Log Out':'Login')
        console.log('toggelAuth')
    }

    return (
        <AuthContext.Provider value={{flag,token,isAuth,toggel,toggleAuth}}>
            {children}
        </AuthContext.Provider>
    );
}
