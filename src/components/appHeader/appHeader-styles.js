
import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    header: {
        backgroundColor: window.theme.headerBg,
        borderBottomWidth: 0
    },
    headerFloating: {
        position: "absolute",
        width: "100%",
        zIndex: 99,
    },
    headerWrap: {
        borderBottomColor: window.theme.headerBorder,
        borderBottomWidth: 0
    },
    headerNoTabs: {
        backgroundColor: window.theme.primary,
        borderBottomColor: window.theme.primary,
        borderBottomWidth: 0
    },
    headerTransparent: {
        backgroundColor: "transparent",
        borderBottomWidth: 0
    },
    headerTitle: {
        display: "flex",
        flexDirection: "column",
        color: window.theme.primary,
        fontWeight: '400',
        fontSize: (Platform.OS === 'ios' ? 16 : 20)
    },
    headerTitleProfile: {
        display: "flex",
        flexDirection: "column",
        color: window.theme.primary,
        fontWeight: '400',
        fontSize: (Platform.OS === 'ios' ? 20 : 24)
    },
    headerTitleWhite: {
        color: window.theme.text,
        fontWeight: '400',
        fontSize: (Platform.OS === 'ios' ? 16 : 20),
        backgroundColor: "transparent",
        borderBottomWidth: 0
    },
    headerTitleSmall: {
        color: window.theme.headerColorAlt,
        fontWeight: '400',
        fontSize: (Platform.OS === 'ios' ? 12 : 16),
        marginBottom: -6,
    },
    headerTitleSmallProfile: {
        color: window.theme.headerColorAlt,
        fontWeight: '400',
        fontSize: (Platform.OS === 'ios' ? 16 : 20),
        marginBottom: -4,
    },
    headerMenuButtonIcon: {
        color: window.theme.text
    },
    headerBackButtonIcon: {
        color: window.theme.text
    },
    headerBookMarkButtonIcon: {
        color: 'white',
        fontSize: 20
    },
    headerRighButtonsIcon: {
        color: window.theme.headerColor,
        paddingRight: 2,
        fontSize: 25,
    },
    left: {
        flex: 1,
    },
    body: {
        flex: 2,
        flexGrow: 5,
        alignItems: "center",
    },
    right: {
        flex: 1,
    }

})
