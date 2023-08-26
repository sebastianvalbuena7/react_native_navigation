import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'

export const Tab1Screen = () => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Tab1Screen</Text>
            <Text>
                <Icon name="airplane-outline" size={50} color={colores.primary} />
            </Text>
        </View>
    )
}