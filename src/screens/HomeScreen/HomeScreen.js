import React,{useState} from 'react';
import {Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native-web';
import styles from './styles';
import { firebase } from '../../firebase/config'
export default function HomeScreen() {
    const user = firebase.auth().currentUser;
    const uid = user.uid
    const [name,setName] = useState("")
    const userDocument = firebase.firestore().collection('users').doc(uid);
    userDocument.get()
                .then(documentSnapshot => {
                    console.log('User exists: ', documentSnapshot.exists);
                
                    if (documentSnapshot.exists) {
                    console.log('User data: ', documentSnapshot.data());
                    }
                    setName(documentSnapshot.data()["name"]);
                });
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: "#9571EE", justifyContent:"flex-end"}} >
            <Image
                    style={styles.logo}
                    source={require('../../../assets/image3.png')}
                />
                <Text style={styles.TextProfile}>Welcome Back, {name}!</Text>
            </View>
            <KeyboardAvoidingView style={{ flex: 2, backgroundColor: "#FEFBFB"}} >
                <TouchableOpacity style={[styles.button,{width:"20%",alignSelf:"center"}]}>
                <Text style={styles.buttonText}>SELECT MAHALLAH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{width:"20%",alignSelf:"center"}]}>
                <Text style={styles.buttonText}>VIEW REPORT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{width:"20%",alignSelf:"center"}]}>
                <Text style={styles.buttonText}>CONTACT LIST</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{width:"20%",alignSelf:"center"}]}>
                <Text style={styles.buttonText}>SETTING</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}