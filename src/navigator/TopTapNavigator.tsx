import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
    return (
        <Tab.Navigator
            style={{
                paddingTop: 2
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: 'red',
                    borderTopWidth: 0,
                    shadowColor: '#transparent',
                    borderStyle: 'dashed',
                    elevation: 0
                },
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName: string = ''
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName = 'american-football-outline'
                            break

                        case 'ContactsScreen':
                            iconName = 'archive-outline'
                            break

                        case 'AlbumsScreen':
                            iconName = 'boat-outline'
                            break
                    }

                    return  <Icon name={iconName} size={20} color={colores.primary} />
                }
            })}>
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    )
}