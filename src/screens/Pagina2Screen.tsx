import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

export const Pagina2Screen = () => {
    const navigator = useNavigation()

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Back'
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>

            <Button title='Ir Pagina 3' onPress={() => navigator.navigate('Pagina3Screen' as never)} />
        </View>
    )
}