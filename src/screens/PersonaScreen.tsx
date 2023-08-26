import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from "../theme/appTheme"
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { RootStackParams } from '../navigator/StackNavigator'

// interface RouterParams {
//     id: number,
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

export const PersonaScreen = ({ navigation, route: { params} }: Props) => {
    // const params = route.params as RouterParams

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{params.nombre}</Text>
            <Button title='Ir a pagina' />
        </View>
    )
}