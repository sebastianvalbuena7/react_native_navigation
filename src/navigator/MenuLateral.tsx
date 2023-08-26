import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { colores, styles } from '../theme/appTheme'
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator()

export const MenuLateral = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="Tabs" component={Tabs} />
        </Drawer.Navigator>
    )
}

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Part of avatar */}
            <View style={styles.avatarContainer}>
                <Image source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
                }} style={styles.avatar} />
        </View>

            {/* Menu options */}
            <View style={styles.menuContainer}>
                <TouchableOpacity style={{
                    ...styles.menuButton,
                    flexDirection: 'row'
                    }} onPress={() => navigation.navigate('Tabs')}>
                    <Icon name='boat-outline' size={20} color={colores.primary} />
                    <Text style={styles.menuTexto}>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    ...styles.menuButton,
                    flexDirection: 'row'
                    }} onPress={() => navigation.navigate('SettingsScreen')}>
                    <Icon name='boat-outline' size={20} color={colores.primary} />
                    <Text style={styles.menuTexto}>Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}