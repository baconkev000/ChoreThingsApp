import { View, Text, Button } from 'react-native';
import styles from './styles';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './classes/home';
import 'react-native-gesture-handler';
import TasksOptionsPage from './components/taskOptionsPage';
import TaskLibrary from './components/taskLibrary';
import CustomTask from './components/customTaskPage';
import EditTaskPage from './components/editTaskPage';

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
        name="TasksOptionsPage"
        component={TasksOptionsPage}
        options={({navigation}) => ({
          headerBackTitle: "Cancel",
          headerTitle: "Add Tasks",
          
          })}
          />
      <Stack.Screen
        name="TaskLibrary"
        component={TaskLibrary}
        options={({navigation}) => ({
          headerTitle: "Task Library",
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate({name: 'TasksOptionsPage'})}
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
        name="CustomTask"
        component={CustomTask}
        options={({navigation}) => ({
          headerTitle: "Custom Tasks",
          headerBackTitle: "Cancel",
        })}
      />
      <Stack.Screen
        name="EditTaskPage"
        component={EditTaskPage}
        options={({navigation}) => ({
          headerTitle: "Edit Task",
          headerBackTitle: "Cancel",
            headerLeft: () => (
                <Button
                  onPress={() => navigation.goBack()}
                  title="Cancel"
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
      <Text style={styles.TitleColor}>Tiny Task Tuesday</Text>
    </View>
  );
}

//----- Dependencies ------
// npm install @react-navigation/native
// npm install @react-navigation/stack
// expo install react-native-gesture-handler
// npm install --save @react-native-firebase/app
// expo install @react-navigation/native @react-navigation/stack firebase dotenv react-native-elements expo-constants
// npm install @reduxjs/toolkit react-redux
// npm install react-native-sqlite-2 --save
// expo install expo-sqlite
// expo install react-native-gesture-handler