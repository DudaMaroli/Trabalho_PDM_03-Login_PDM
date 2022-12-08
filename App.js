import React from 'react';
import { StatusBar } from 'react-native';

import {NavegationContainer} from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  return (
    <NavegationContainer>
      <StatusBar backgroundcolor={"#38A69D"}barStyle="light-content"/>
<Routes/>
    </NavegationContainer>
  );
}

