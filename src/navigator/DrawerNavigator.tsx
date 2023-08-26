import { createDrawerNavigator } from '@react-navigation/drawer'
import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            // drawerPosition: 'right'
        }}>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} options={{
                title: 'Home'
            }} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{
                title: 'Settings'
            }} />
        </Drawer.Navigator>
    )
}