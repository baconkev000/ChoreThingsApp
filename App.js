import { View, Text } from 'react-native';
import styles from './styles';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './components/home';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFA06A"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <Title></Title>,
        }}
      />

    </Stack.Navigator>
  </NavigationContainer>
  )
    
}

function Title() {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.TitleColor}>Chore Things</Text>
    </View>
  );
}


//----- Dependencies ------
// npm install @react-navigation/native
// npm install @react-navigation/stack
// expo install react-native-gesture-handler