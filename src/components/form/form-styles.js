
import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    input: {
        height: 48,
        width: "100%",
        borderColor: window.theme.textAlt,
        borderRadius: 16,
        backgroundColor: window.theme.body,
        borderWidth: 1,
        padding: 8,
        marginBottom: 8,
        fontSize: window.fs(12)
    },


    wrap: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomColor: window.theme.light1,
        borderBottomWidth: 1,
    },

    label: {
        width: "100%",
        paddingVertical: 8,
    },

    labelText: {
        fontSize: window.fs(12),
        color: window.theme.textAlt
    },

    field: {
        width: "100%",
    },

    textInput: {
        padding: 8,
        fontSize: window.fs(16),
        color: window.theme.text
    },

    dateInput: {
    },

    pickerInputContainer:{

    },

    pickerInput: {
        flexDirection: 'column',
        borderRadius: 12,
        borderColor: window.theme.textAlt,
        borderWidth: 1,
        fontSize: window.fs(12)
    },

})
