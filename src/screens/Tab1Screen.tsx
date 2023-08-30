import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableIcon } from '../components/TouchableIcon'

export const Tab1Screen = () => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Tab1Screen</Text>
            <Text>
                <TouchableIcon nameIcon='airplane-outline'/>
                <TouchableIcon nameIcon='bandage-outline'/>
                <TouchableIcon nameIcon='car-sport-outline'/>
            </Text>
        </View>
    )
}