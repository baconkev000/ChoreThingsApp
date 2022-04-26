import { View, Text, TouchableWithoutFeedback} from 'react-native';
import React from "react";
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles';
import { AntDesign } from '@expo/vector-icons';


function ChoresOptionsButtons(){
  const navigation = useNavigation(); 

  return (
      <View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("ChoreLibrary")}>
        <View style={styles.OptionTile}>
        <Text style={styles.TextSize}>Chore Library </Text><AntDesign name="right" size={24} color="black" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("CustomChore")}>
        <View style={styles.OptionTile}>
        <Text style={styles.TextSize}>Custom Chore</Text><AntDesign name="right" size={24} color="black" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
export default ChoresOptionsButtons;