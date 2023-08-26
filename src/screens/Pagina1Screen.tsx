import { Text, View, Button, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { styles } from '../theme/appTheme'
import { useEffect } from 'react'

interface Props extends StackScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            // headerLeft: () => <Text>Hola</Text>
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button title='Ir a Pagina 2' onPress={() => navigation.navigate('Pagina2Screen')} />
            <Text>Navegar con argumentos</Text>

            <View style={{
                flexDirection: 'row'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('PersonaScreen', {
                    id: 2,
                    nombre: 'Maria'
                })} style={{
                    ...styles.botonGrande,
                    backgroundColor: 'blue'
                }}>
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PersonaScreen', {
                    id: 1,
                    nombre: 'Pedro'
                })} style={{
                    ...styles.botonGrande,
                    backgroundColor: 'orange'
                }}>
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}