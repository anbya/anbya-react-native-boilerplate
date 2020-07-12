import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator  } from 'react-navigation';
import signInScreen from './signInScreen';
import signUpScreen from './signUpScreen';
//--------------------------------------------------------------------------------//
const HomeStack = createStackNavigator(
  {
    SignIn: {
      screen: signInScreen,
      navigationOptions: {
        title: 'Signin',
   
        headerLeft : 
        <Image
        source={{uri : 'https://transdeal.co.id/assets/imagesBase/transdealplane-white.png'}}
        style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
        />,
   
        headerStyle: {
   
          backgroundColor: '#019cde'
    
        },
   
      headerTintColor: '#ffffff',
   
      },
    },
    SignUp: signUpScreen
  }
);
//--------------------------------------------------------------------------------//

export default HomeStack;