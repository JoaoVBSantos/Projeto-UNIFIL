import React from "react";
import { StatusBar } from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routs/index.js';

export default function App() {
  return (
<NavigationContainer>
  <Routes/>
</NavigationContainer>
  );
}


