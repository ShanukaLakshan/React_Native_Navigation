import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Home</Text>

      <FontAwesome name="user" size={24} color="black" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
