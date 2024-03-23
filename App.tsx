import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './src/screens/app/Home';
import { NavigationContainer } from '@react-navigation/native';
import Notification from './src/screens/app/Notification';
import Profile from './src/screens/app/Profile';
import Search from './src/screens/app/Search';
import Cart from './src/screens/app/Cart';
import ProductDetails from './src/screens/app/ProductDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/tabs/home_active.png')
              : require('./src/assets/tabs/home.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./src/assets/tabs/profile.png')
              : require('./src/assets/tabs/profile_active.png');
          } else if (route.name === 'Search') {
            icon = focused
              ? require('./src/assets/tabs/search_active.png')
              : require('./src/assets/tabs/search.png');
          } else if (route.name === 'Notification') {
            icon = focused
              ? require('./src/assets/tabs/notification_active.png')
              : require('./src/assets/tabs/notification.png');
          }
          // You can return any component that you like here!
          return <Image source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: '#DADADA', height: 60 }, // Thiết lập chiều cao ở đây
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      {/* thay đổi component */}
    </Tab.Navigator>
  );
};

const App = () => {
  const isSignedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {isSignedIn ? (
          <>
            <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
            
          </>
        ) : (
          <>
            <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} /> 
            <Stack.Screen name="ProductDetail" component={ProductDetails} options={{ headerShown: false }} /> 
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // <NewListing></NewListing>
  );
};

export default App;
