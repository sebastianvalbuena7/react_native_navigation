import { createContext } from "react"

// Define that look the information that i have
export interface AuthState {
    isLoggedIn: boolean
    username?: string
    favoriteIcon?: string
}

// Initial State
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// We use for say it to React how look at and expose the context
export interface AuthContextProps {
    authState: AuthState
    signIn: () => void
}

// Create Context
export const AuthContext = createContext({} as AuthContextProps)

// Component provider of state
export const AuthProvider = ({children}: any) => {
    
    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => {}
        }}>
            {children}
        </AuthContext.Provider>
    )
}