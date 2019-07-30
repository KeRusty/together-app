
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: window.theme.body
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: "center",
    },
    noAccountContainer: {
        paddingVertical: 8
    },
    loginButtonContainer: {
        paddingVertical: 24
    },
    registerButtonContainer: {
        paddingVertical: 24
    },
    loginButton: {
        backgroundColor: window.theme.primary,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 24,
        width: Dimensions.get('window').width * 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerButton: {
        backgroundColor: window.theme.alt,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 24,
        width: Dimensions.get('window').width * 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: window.theme.body,
        fontSize: window.fs(16),
        fontWeight: 'bold',
    },
    noAccountText: {
        color: window.theme.textAlt,
        fontSize: window.fs(16),
    }

})
