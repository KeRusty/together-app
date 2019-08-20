import { StyleSheet, Dimensions, StatusBar } from 'react-native'

export default StyleSheet.create({
    //SearchBox
    searchBox: {
        width: Dimensions.get('window').width,
        backgroundColor: window.theme.light3,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column"
    },
    searchContainer: {
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: window.theme.background,
        flexDirection: 'row',
        paddingVertical: 8,
        borderWidth: 1,
        borderRadius: 24,
        borderColor: window.theme.background,
        paddingVertical: 8
    },
    iconContainer: {
        paddingHorizontal: 16,
        justifyContent: 'center'
    },
    icon: {
        fontSize: window.fs(16),
        color: window.theme.textAlt
    },
    textInputContainer: {
        paddingRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    textInput: {
        fontSize: window.fs(16),
        color: window.theme.textAlt
    },
    memberContainer: {
        flexDirection: 'row',
        paddingTop: 8
    },
    memberBox: {
        backgroundColor: window.theme.primary,
        paddingHorizontal: 4
    },
    memberText: {
        fontSize: window.fs(16),
        color: window.theme.body
    },
    memberBoxAlt: {
        paddingHorizontal: 4
    },
    text: {
        fontSize: window.fs(16),
        color: window.theme.textAlt
    },

})
