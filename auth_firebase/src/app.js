import React,{Component} from 'react';
import {View} from 'react-native';
import {Header} from './Components/Common';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';



class App extends Component {
    componenWillMount(){
        firebase.initializeApp(
            {
               apiKey: "AIzaSyBTsmDiXZrA5aJotSEJJH5zwgO4YaSf0l4",
               authDomain: "auth-22e30.firebaseapp.com",
               databaseURL: "https://auth-22e30.firebaseio.com",
               storageBucket: "auth-22e30.appspot.com",
               messagingSenderId: "727869712410"
             }
        );
    }

    render(){
        return(
            <View>
                <Header headerText = "Authentication"/>
                <LoginForm />
            </View>
        );
    }
}
export default App;