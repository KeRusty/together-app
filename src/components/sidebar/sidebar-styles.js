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
    profilePictureContainer: {
        paddingRight: 12
    },
    thumbnail: {
        aspectRatio: 1 / 1,
        width: 52,
        height: 52,
        borderRadius: 26,
        flexGrow: 0,
        flexBasis: 32,
    },
    profileDetailsContainer: {
    },
    userNameText: {
        color: window.theme.body,
        fontSize: window.fs(20),
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
        paddingVertical: 16,
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    navListDetails: {
        flexDirection: 'row',
        paddingVertical: 8
    },
    navListText: {
        color: window.theme.text,
        fontSize: window.fs(16),
        paddingHorizontal: 4
    },
    navListIcon: {
        color: window.theme.light2,
        fontSize: window.fs(20),
        paddingHorizontal: 4
    },
    navListIconAlt: {
        tintColor: window.theme.light2,
        resizeMode: "contain",
        height: 20,
        width: 20,
    },
    bottomNavListContainer: {
        paddingTop: 20,
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    version: {
        color: window.theme.light2,
        opacity: .5,
        fontSize: window.fs(14),
        paddingRight: 16,
        paddingBottom: 16,
        textAlign: "right"
    },
    iconContainer: {
        paddingHorizontal: 4
    }


})
