import { useContext, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from "../theme/appTheme"
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { RootStackParams } from '../navigator/StackNavigator'
import { AuthContext } from '../context/AuthContext'

// interface RouterParams {
//     id: number,
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

export const PersonaScreen = ({ navigation, route: { params} }: Props) => {
    // const params = route.params as RouterParams
    const {changeUsername} = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        })

        changeUsername(params.nombre)
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{params.nombre}</Text>
            <Button title='Ir a pagina' />
        </View>
    )
}