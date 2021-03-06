import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor: window.theme.body,
       height: Dimensions.get('window').height
   },
   profileContainer:{
       height: Dimensions.get('window').height * 0.4,
       borderBottomWidth: 1,
       borderBottomColor: window.theme.textAlt,
       justifyContent: 'center',
       alignItems: 'center'
   },
   pictureContainer:{
        paddingVertical: 16
   },
   findButton:{
       backgroundColor: window.theme.secondary,
       borderRadius: 24,
       paddingVertical: 16,
       paddingHorizontal: 32
   },
   findText:{
       color: window.theme.body,
       fontSize: window.fs(16)
   },
   pictureCover: {
        width: 140,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoBoxContainer:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: window.theme.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16
    },
    infoBoxContent:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24
    },
    infoBoxHeadingText:{
        color: window.theme.textAlt,
        fontSize: window.fs(16)
    },
    infoBoxText:{
        color: window.theme.alt,
        fontSize: window.fs(20)
    },
    buttonContainerOuter:{
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: window.theme.background
    },
    buttonContainer:{
        paddingVertical: 16,
        paddingHorizontal: 16,
        overflow: 'hidden',
        shadowColor: window.theme.textAlt,
        shadowRadius: 8,
        shadowOpacity: 0.5,
    },
    messageButton:{
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: window.theme.body,
    },
    likeButton:{
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: window.theme.alt,
    }

})
