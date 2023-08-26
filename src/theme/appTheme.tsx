import { StyleSheet } from 'react-native'

export const colores = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10
    },
    botonGrandeTexto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 100
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
    },
    menuButton: {
        marginVertical: 10
    },
    menuTexto: {
        fontSize: 20
    }
})