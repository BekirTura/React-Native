import React , {Component} from 'react';
import{Button,CardSection,Card,Input} from './Common';

class LoginForm extends Component {
    state = {email:'',passport:''};
    onButtonPress(){
        
    }
    render(){
        return(
            <Card>
              <CardSection>
                 <Input 
                 placeholder = "user@gmail.com"
                 label = "Email"
                 value={this.state.email}
                 onChangeText={email => this.setState({email})}
                 />
              </CardSection>
              <CardSection>
                   <Input 
                   secureTextEntry
                 placeholder = "Password"
                 label = "Password"
                 value={this.state.passport}
                 onChangeText={passport => this.setState({passport})}
                 />
              </CardSection>
              <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                Log in
                </Button>
              </CardSection>
            </Card>
        );
    }
}

export default LoginForm ; 