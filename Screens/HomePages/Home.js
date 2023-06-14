import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PostScreen from '../MainPages/PostsScreen';
import CreatePostsScreen from '../MainPages/CreatePostsScreen';
import ProfileScreen from '../MainPages/ProfileScreen';

import SvgArrowLeft from '../../assets/svg/SvgArrowLeft';
import SvgLogOut from '../../assets/svg/SvgLogOut';

import SvgGrid from '../../assets/svg/SvgGrid';
import SvgPlus from '../../assets/svg/SvgPlus';
import SvgUser from '../../assets/svg/SvgUser';

const ButtomTabs = createBottomTabNavigator();

const Home = () => {
  const [isCreatePost, setIsCreatePost] = useState(false);

  return (
    <ButtomTabs.Navigator
      tabBarOptions={{
        showLabel: false,
        // activeTintColor: 'tomato',
        // inactiveTintColor: 'gray',
      }}
    >
      {isCreatePost ? (
        <ButtomTabs.Screen
          name="CreatePosts"
          component={PostScreen}
          options={({ navigation }) => ({
            ...postsOptions,
            headerRight: () => (
              <SvgLogOut
                onPress={() => navigation.navigate('Login')}
                title="Return back"
                color="#fff"
                style={styles.logOut}
              />
            ),
            tabBarIcon: () => {
              return (
                <SvgGrid
                  onPress={() => {
                    navigation.navigate('Posts');
                    setIsCreatePost(false);
                  }}
                />
              );
            },
          })}
        />
      ) : (
        <>
          <ButtomTabs.Screen
            name="Posts"
            component={PostScreen}
            options={({ navigation }) => ({
              ...postsOptions,
              headerRight: () => (
                <SvgLogOut
                  onPress={() => navigation.navigate('Login')}
                  title="Return back"
                  color="#fff"
                  style={styles.logOut}
                />
              ),
              tabBarIcon: () => {
                return <SvgGrid />;
              },
            })}
          />
          <ButtomTabs.Screen
            name="CreatePosts"
            component={CreatePostsScreen}
            options={({ navigation, route }) => ({
              ...createPostsOptions,
              headerLeft: () => (
                <SvgArrowLeft
                  onPress={() => {
                    navigation.navigate('Posts');
                    setIsCreatePost(true);
                  }}
                  title="Return back"
                  color="#fff"
                  style={styles.arrowLeft}
                />
              ),
              tabBarIcon: () => {
                return <SvgPlus fill={route.name === 'CreatePosts' ? '#000000' : '#ffffff'} />;
              },
            })}
          />
          <ButtomTabs.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ navigation }) => ({
              ...createPostsOptions,
              headerLeft: () => (
                <SvgArrowLeft
                  onPress={() => navigation.navigate('Posts')}
                  title="Return back"
                  color="#fff"
                  style={styles.arrowLeft}
                />
              ),
              tabBarIcon: ({ focused, color, size }) => {
                return <SvgUser size={size} color={color} />;
              },
            })}
          />
        </>
      )}
    </ButtomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  arrowLeft: {
    marginLeft: 16,
    marginRight: 42,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logOut: {
    width: 24,
    height: 24,
    marginRight: 60,
    marginRight: 16,
    // paddingHorizontal: 16,
    paddingVertical: 10,
  },
  btnTabs: {
    alignSelf: 'center',

    paddingVertical: 8,
    paddingHorizontal: 23,

    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },
});

export default Home;

const createPostsOptions = {
  title: 'Створити публікацію',
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    boxShadow: '0px 0.5px 0px rgba(0, 0, 0, 0.3)',
  },
  headerTintColor: '#212121',
  headerTitleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 22,

    textAlign: 'center',
  },
};

const postsOptions = {
  title: 'Публікації',
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    boxShadow: '0px 0.5px 0px rgba(0, 0, 0, 0.3)',
  },
  headerTintColor: '#212121',
  headerTitleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 22,

    marginLeft: 120,

    textAlign: 'center',
  },
};
