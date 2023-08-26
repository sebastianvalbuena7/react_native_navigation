import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina3Screen</Text>
            <Button title='Go back' onPress={() => navigation.goBack()}/>
            <Button title='Ir a Pagina 1' onPress={() => navigation.popToTop()}/>
        </View>
    )
}