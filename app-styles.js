import { StyleSheet } from 'react-native'
import { Platform, StatusBar } from 'react-native'

export default StyleSheet.create({
  wrap: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
