import { View, Text, Button } from 'react-native';
import styles from './styles';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './components/home';
import 'react-native-gesture-handler';
import ChoresOptionsPage from './components/choresOptionsPage';
import ChoreLibrary from './components/choreLibrary';
import CustomChore from './components/customChorePage';

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
      <Stack.Screen
        name="ChoresOptionsPage"
        component={ChoresOptionsPage}
        options={{
          headerBackTitle: "Cancel",
          headerTitle: "Add Chores",
          headerBackTitle: "Cancel",
        }}
      />
      <Stack.Screen
        name="ChoreLibrary"
        component={ChoreLibrary}
        options={{
          headerTitle: "Chore Library",
          headerBackTitle: "Cancel",
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
        }}
      />
            <Stack.Screen
        name="CustomChore"
        component={CustomChore}
        options={{
          headerTitle: "Custom Chore",
          headerBackTitle: "Cancel",
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Save"
              color="#fff"
            />
          ),
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