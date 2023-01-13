import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    formContainer: {
        flex:1,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        backgroundColor: '#CFBDF4',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
    },   
    buttonProfile: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#CFBDF4',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    TextProfile: {
        color: '#FEFBFB',
        fontSize: 27,
        fontWeight: 'bold',
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    },
    logo: {
        flex: 1,
        height: 250,
        width: "100%",
        alignSelf: "center",
        margin: 30
    },
})