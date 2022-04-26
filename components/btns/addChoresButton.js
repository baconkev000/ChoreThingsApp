import { View, Text, TouchableWithoutFeedback} from 'react-native';
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import styles from '../../styles';

function AddChoresButton(props){
  const navigation = useNavigation(); 
  return (
    <TouchableWithoutFeedback style={styles.NoChoresTextContainer} onPress={() => navigation.navigate('ChoresOptionsPage')}>
        <Text style={styles.NoChoresButton}> 
          <AntDesign name="pluscircleo" size={20} style={styles.AddCircle} /> 
          Add a chore
        </Text>
      </TouchableWithoutFeedback>
  );
}
export default AddChoresButton;