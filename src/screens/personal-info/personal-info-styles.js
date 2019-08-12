
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: window.theme.body
    },
    scrollView:{
        flexGrow: 1,
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    form: {
        width: Dimensions.get('window').width * 0.8,
        alignItems: 'center',
        marginBottom: 32
    },
    keyboard: {
        width: "100%",
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: "center",
        paddingVertical: 8
    },
    buttonInnerContainer: {
        paddingVertical: 24
    },
    orContainer: {
        paddingVertical: 8
    },
    facebookButton: {
        backgroundColor: window.theme.facebook,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 24,
        width: Dimensions.get('window').width * 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleButton: {
        backgroundColor: window.theme.google,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 24,
        width: Dimensions.get('window').width * 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    createButton:{
        backgroundColor: window.theme.alt,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 24,
        width: Dimensions.get('window').width * 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText:{
        color: window.theme.text,
        fontSize: window.fs(20),
        fontWeight: 'bold',
    },
    buttonText: {
        color: window.theme.body,
        fontSize: window.fs(16),
    },
    orText: {
        color: window.theme.textAlt,
        fontSize: window.fs(16),
    }

})
