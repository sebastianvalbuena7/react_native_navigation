import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const ContactsScreen = () => {
    const { signIn, authState: { isLoggedIn } } = useContext(AuthContext)
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                ContactsScreen
            </Text>
            {!isLoggedIn && <Button title='Sign In' onPress={signIn} />}
        </View>
    )
}