import { createStackNavigator } from '@react-navigation/stack'
import { Pagina1Screen } from '../screens/Pagina1Screen'
import { Pagina2Screen } from '../screens/Pagina2Screen'
import { Pagina3Screen } from '../screens/Pagina3Screen'
import { PersonaScreen } from '../screens/PersonaScreen'

export type RootStackParams = {
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: {
        id: number,
        nombre: string
    }
}

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {
    return (
        <Stack.Navigator 
            // initialRouteName='Pagina2Screen'
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: '#ffff'
                }
            }}
        >
            <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} options={{
                presentation: 'modal',
                title: 'Pagina 1'
            }} />
            <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} options={{
                presentation: 'modal',
                title: 'Pagina 2'
            }} />
            <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} options={{
                presentation: 'transparentModal',
                title: 'Pagina 3',
                headerTitleAlign: 'center'
            }} />
            <Stack.Screen name='PersonaScreen' component={PersonaScreen}/>
        </Stack.Navigator>
    )
}