import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from "../screaens/login/index.js"
import { Home } from "../screaens/home/index.js"

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
             <Stack.Screen
            name="Login"
            component={Login}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            />


        </Stack.Navigator>
    );
  }