import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

export const MassageSet = ({navigation}: any) => {
  return (
    <Container>
      <Text>테스트</Text>
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
`;
