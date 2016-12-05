import React,{Component} from 'react';
import {View} from 'react-native';
import {Header,Spinner,Button} from './Components/Common';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';



class App extends Component {
    state = {loggedIn:null};
    componentWillMount(){
        firebase.initializeApp(
            {
                    apiKey: "AIzaSyBTsmDiXZrA5aJotSEJJH5zwgO4YaSf0l4",
                    authDomain: "auth-22e30.firebaseapp.com",
                    databaseURL: "https://auth-22e30.firebaseio.com",
                    storageBucket: "auth-22e30.appspot.com",
                    messagingSenderId: "727869712410"
             }
        );
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true})
            }else{
                 this.setState({loggedIn:false})
            }
        });
    }
    renderContent(){
        switch(this.state.loggedIn){
            case true:
            return (
                <Button onPress={()=> firebase.auth().signOut()}>
                    Log Out
                </Button>);
            case false:
             return <LoginForm />;
            default:
            return <Spinner size="large"> </Spinner>
        }
        
    }

    render(){
        return(
            <View>
                <Header headerText = "Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}
export default App;