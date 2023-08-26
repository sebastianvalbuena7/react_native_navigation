import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab1Screen } from '../screens/Tab1Screen'
import { StackNavigator } from './StackNavigator'
import { colores } from '../theme/appTheme'
import { Platform, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { TopTapNavigator } from './TopTapNavigator'
import Icon from 'react-native-vector-icons/Ionicons'

const BottomTabIOS = createBottomTabNavigator()

export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator()

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: 'red',
                    borderTopWidth: 0,
                    shadowColor: '#ffff',
                    borderStyle: 'dashed',
                    elevation: 0
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName: string = ''
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'airplane-outline'
                            break

                        case 'Tab2Screen':
                            iconName = 'american-football-outline'
                            break

                        case 'StackNavigator':
                            iconName = 'barbell-outline'
                            break
                    }

                    return <Icon name={iconName} size={20} color={colores.primary} />
                }
            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab1' }} />
            <BottomTabAndroid.Screen name="Tab2Screen" component={TopTapNavigator} options={{ title: 'Tab2' }} />
            <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Stack' }} />
        </BottomTabAndroid.Navigator>
    );
}

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: 'red',
                    borderTopWidth: 0,
                    shadowColor: '#ffff',
                    borderStyle: 'dashed',
                    elevation: 0
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = ''
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'airplane-outline'
                            break

                        case 'Tab2Screen':
                            iconName = 'american-football-outline'
                            break

                        case 'StackNavigator':
                            iconName = 'barbell-outline'
                            break
                    }

                    return <Icon name={iconName} size={50} color={colores.primary} />
                }
            })}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
        >
            <BottomTabIOS.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab1' }} />
            <BottomTabIOS.Screen name="Tab2Screen" component={TopTapNavigator} options={{ title: 'Tab2' }} />
            <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Stack' }} />
        </BottomTabIOS.Navigator>
    )
}