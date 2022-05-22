import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ResetPassword from './screens/ResetPassword';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
  },
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
  ForgotPasswordScreen: {
    screen: ForgotPasswordScreen,
  },
  ResetPassword: {
    screen: ResetPassword,
  },
});

const AppContainer = createAppContainer(AppNavigator);
