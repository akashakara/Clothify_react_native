import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';



import SearchScreen from './src/SearchScreen';
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import NotificationScreen from './src/NotificationScreen';
import {Entypo , MaterialCommunityIcons , FontAwesome} from '@expo/vector-icons';
const appNavigator = createBottomTabNavigator(
  {
    Home:{ screen: HomeScreen,  
      navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Entypo style={[{color: tintColor}]} size={25} name={'home'}/>  
              </View>),  
      }
    },

      Search:  { screen: SearchScreen,  
        navigationOptions:{  
            tabBarLabel:'Search',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <FontAwesome style={[{color: tintColor}]} size={25} name={'search'}/>  
                </View>),  
            activeColor: '#f60c0d',  
            inactiveColor: '#f65a22',  
            barStyle: { backgroundColor: '#f69b31' },  
        }  
    },  
      
      Notify: { screen: NotificationScreen,  
        navigationOptions:{  
            tabBarLabel:'Notification',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Entypo style={[{color: tintColor}]} size={25} name={'notification'}/>  
                </View>),  
            activeColor: '#f60c0d',  
            inactiveColor: '#f65a22',  
            barStyle: { backgroundColor: '#f69b31' },  
        }  
    },  
      Profile : { screen: ProfileScreen,  
        navigationOptions:{  
            tabBarLabel:'Profile',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <MaterialCommunityIcons style={[{color: tintColor}]} size={25} name={'face-profile'}/>  
                </View>),  
            activeColor: '#f60c0d',  
            inactiveColor: '#f65a22',  
            barStyle: { backgroundColor: '#f69b31' },  
        }  
    },  
      
  },
  {
     initialRouteName:'Search',
     defaultNavigationOptions:{
      
     }

  }
);

export default createAppContainer(appNavigator);