import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Photo from "./src/screens/photo";
import { Provider } from "react-redux";
import store from "./src/store/index";
import { HOME, PHOTO } from "./src/path";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={HOME} component={Home} />
          <Stack.Screen name={PHOTO} component={Photo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
