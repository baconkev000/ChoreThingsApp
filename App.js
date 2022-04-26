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
        options={({navigation}) => ({
          headerBackTitle: "Cancel",
          headerTitle: "Add Chores",
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate({name: 'Home'})}
              title="Cancel"
              color="#fff"
            />
          ),
          })}
          />
      <Stack.Screen
        name="ChoreLibrary"
        component={ChoreLibrary}
        options={({navigation}) => ({
          headerTitle: "Chore Library",
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate({name: 'ChoresOptionsPage'})}
              title="Cancel"
              color="#fff"
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate({name: 'Home'})}
              title="Save"
              color="#fff"
            />
          ),
          
          })}
      />
            <Stack.Screen
        name="CustomChore"
        component={CustomChore}
        options={({navigation}) => ({
          headerTitle: "Custom Chores",
          headerBackTitle: "Cancel",
          
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate({name: 'Home'})}
              title="Cancel"
              color="#fff"
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate({name: 'Home'})}
              title="Save"
              color="#fff"
            />
          ),
        })}
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
// npm install --save @react-native-firebase/app