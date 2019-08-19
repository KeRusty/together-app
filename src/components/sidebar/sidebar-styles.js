import { StyleSheet, Dimensions, StatusBar } from 'react-native'

export default StyleSheet.create({
    sideBarContainer: {
        backgroundColor: window.theme.body,
        flex: 1
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginTop: StatusBar.currentHeight
    },

    editAccountContainer: {
        flexDirection: 'row'
    },
    editAccountText: {
        color: window.theme.light2,
        fontSize: window.fs(12),
    },
    editAccountIcon: {
        color: window.theme.light2,
        fontSize: window.fs(12),
        paddingHorizontal: 4,
        paddingTop: 2
    },
    topNavListContainer: {
        backgroundColor: window.theme.body,
        paddingVertical: 16,
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
        justifyContent: 'center',
        alignContent: 'center',
        flexGrow: 1
    },
    navListDetails: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
    navListText: {
        color: window.theme.text,
        fontSize: window.fs(20),
        paddingHorizontal: 4
    },
    navListIcon: {
        color: window.theme.primary,
        fontSize: window.fs(22),
        paddingHorizontal: 4
    },
    navListIconAlt: {
        color: window.theme.tertiary,
        fontSize: window.fs(20),
        paddingHorizontal: 4
    },
    /*navListIconAlt: {
        tintColor: window.theme.light2,
        resizeMode: "contain",
        height: 20,
        width: 20,
    },*/
    bottomNavListContainer: {
        paddingTop: 20,
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    logoutButtonContainer:{
        borderWidth: 1,
        borderRadius: 24,
        borderColor: window.theme.textAlt,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16
    },
    logoutText:{
        color: window.theme.textAlt,
        fontSize: window.fs(20),
        paddingHorizontal: 4
    },
    upgradeContainer:{
        height: Dimensions.get('window').height * 0.2,
        backgroundColor: window.theme.alt,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: StatusBar.currentHeight
    },
    upgradeIcon:{
        color: window.theme.body,
        fontSize: window.fs(36),
        paddingHorizontal: 4
    },
    upgradeButtonContainer:{
        borderRadius: 24,
        backgroundColor:window.theme.upgrade,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    upgradeText:{
        color: window.theme.body,
        fontSize: window.fs(20),
        paddingHorizontal: 4
    },
    version: {
        color: window.theme.light2,
        opacity: .5,
        fontSize: window.fs(14),
        paddingRight: 16,
        paddingBottom: 16,
        textAlign: "left"
    },
    iconContainer: {
        paddingHorizontal: 4
    }


})
