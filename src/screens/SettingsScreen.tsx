import { useContext } from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { colores, styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'

export const SettingsScreen = () => {
    const { authState } = useContext(AuthContext)

    return (
        <View>
            <Text style={styles.title}>SettingsScreen</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>

            <Icon name={authState.favoriteIcon as never} size={150} color={colores.primary}/>
        </View>
    )
}