import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
   container:{
       flex: 1,
       flexDirection: 'column'
   },
   brideContainer:{
       height: Dimensions.get('window').height * 0.5,
       backgroundColor: window.theme.primary,
       justifyContent: 'center',
       alignItems: 'center'
   },
   groomContainer:{
        height: Dimensions.get('window').height * 0.5,
        backgroundColor: window.theme.alt,
        justifyContent: 'center',
        alignItems: 'center'
   },
   text:{
       color: window.theme.body,
       fontSize: window.fs(16)
   }

})
