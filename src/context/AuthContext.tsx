import { createContext, useReducer } from "react"
import { authReducer } from "./authReducer"

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
    signIn: () => void,
    changeFavoriteIcon: (iconName: string) => void,
    logout: () => void,
    changeUsername: (username: string) => void
}

// Create Context
export const AuthContext = createContext({} as AuthContextProps)

// Component provider of state
export const AuthProvider = ({ children }: any) => {
    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const changeUsername = (username: string) => {
        dispatch({type: 'changeUsername', payload: username})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}