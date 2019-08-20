import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor: window.theme.body
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
        borderBottomColor: window.theme.textAlt,
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
    buttonContainer:{
        flexDirection: 'column',
        alignSelf: 'flex-end'
    }
})
