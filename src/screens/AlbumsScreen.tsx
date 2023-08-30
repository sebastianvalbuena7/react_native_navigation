import { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const AlbumsScreen = () => {
    const {logout, authState: {isLoggedIn}} = useContext(AuthContext)
    return (
        <View>
            <Text>
                AlbumsScreen
            </Text>
            {isLoggedIn && <Button title='Logout' onPress={logout} />}
        </View>
    )
}