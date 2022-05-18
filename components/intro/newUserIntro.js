import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from '../../styles';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const slides = [
  {
    key: 1,
    name: "home",
    subTitle: 'Welcome to',
    title: 'Tiny Task Tuesdays',
    image: require('../../assets/ttt_logo.png'),
    text: 'An anti-procrastination app where you only focus on one tiny task at a time.',
    backgroundColor: "#FFA06A",
  },
  {
    key: 2,
    name: "noTasks",
    subTitle: 'Any day without tasks will look like this. You can change the date and/or click the add tasks button to add tasks to your day.',
    image: require('../../assets/tt_logo.png'),
    backgroundColor: 'white',
  },
  {
    key: 3,
    name: "optionsPage",
    subTitle: 'You will have the option to either select a task from our pre-defined task library or create your own custom task.',
    backgroundColor: 'white',
  },
  {
    key: 4,
    name: "completeDelete",
    image: require('../../assets/complete-delete.png'),
    subTitle: 'Once tasks are added, you can do three different things: swipe right to complete, swipe left to delete, or tap to edit.',
    backgroundColor: 'white',
  },
  {
    key: 5,
    name: "done",
    title: "Thats it!",
    subTitle: "Your ant-procrastination journy starts... now!",
    backgroundColor: 'white',
  },
];
 
class NewUserIntro extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  _renderItem = ({ item }) => {
    if(item.name == "home"){
      return (
    <View style={styles.SlideContainer}>
        <Text style={styles.SlideSubTitle}>{item.subTitle}</Text>
        <Text style={styles.SlideTitle}>{item.title}</Text>
        <Image style={[styles.SlideLogo, styles.SlideAsset]} source={item.image} />
        <Text style={styles.SlideText}>{item.text}</Text>
      </View>
      );
    }else if(item.name == "noTasks"){
      return (
        <View style={styles.SlideContainer}>

          <Text style={styles.SlideSubTitle}>{item.subTitle}</Text>
          <View style={styles.SlideContentContainer}>
          <View style={styles.YearContainer}> 
    <View style={styles.DateContainer}>
      <TouchableWithoutFeedback style={styles.TouchButton} ><AntDesign name="left" size={24} color="black" /></TouchableWithoutFeedback>
        <View style={styles.DateTextContainer}>
        <Text style={styles.DateText}>April 21</Text>
        </View>
      <TouchableWithoutFeedback style={styles.TouchButton} ><AntDesign name="right" size={24} color="black" /></TouchableWithoutFeedback>
    </View>
    <View>

    </View>
</View>
          <View style={styles.SlideNoTasksContainer}>
        <View style={styles.LogoPH}>
        <Image
            style={styles.TinyLogo}
            source={require("../../assets/ttt_logo.png")}
          />
          </View>
        <View style={styles.NoTasksTextContainer}>
          <Text style={styles.NoTasksText}>You have no tasks!</Text>
        </View>
        <View>      
        <TouchableWithoutFeedback>
          <Text style={styles.NoTasksButton}> 
          <Feather name="plus" style={styles.NoTasksButton} />
            Add a task
          </Text>
        </TouchableWithoutFeedback>
        </View>
      </View>
      </View>
    </View>
      );
    }else if(item.name == "optionsPage"){
      return ( 
      <View style={styles.SlideContainer}>

        <Text style={styles.SlideSubTitle}>{item.subTitle}</Text>
        <View style={styles.SlideContentContainer}>

      <View style={styles.SlideTaskOptionsContainer}>
        <TouchableWithoutFeedback>
          <View style={styles.OptionTile}>
          <Text style={styles.TextSize}><MaterialCommunityIcons name="bookshelf" style={styles.TextSize} /> Task Library </Text><AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback >
          <View style={styles.OptionTile}>
          <Text style={styles.TextSize}><Entypo name="pencil" style={styles.TextSize} /> Custom Task</Text><AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableWithoutFeedback>
      </View>
      </View>
      
    </View>
      );
    }else if(item.name == "completeDelete"){
      return (
        <View style={styles.SlideContainer}>

          <Text style={styles.SlideSubTitle}>{item.subTitle}</Text>
          <Text style={styles.SlideTitle}>{item.title}</Text>
          <View style={styles.SlideContentContainer}>

          <Image style={styles.SlideImage} source={item.image} />
          <Text style={styles.SlideText}>{item.text}</Text>
        </View>
        </View>
      );
    }else if(item.name == "done"){
      return (
        <View style={styles.SlideContainer}>
  
          <Text style={styles.SlideTitle}>{item.title}</Text>
          <Text style={styles.SlideSubTitle}>{item.subTitle}</Text>
          </View>
      );
    }else{
    return (
      <View style={styles.SlideContainer}>

        <Text style={styles.SlideSubTitle}>{item.subTitle}</Text>
        <Text style={styles.SlideTitle}>{item.title}</Text>
        <View style={styles.SlideContentContainer}>

        <Image style={styles.SlideImage} source={item.image} />
        <Text style={styles.SlideText}>{item.text}</Text>
        </View>
      </View>
    );
    }
  }
  _onDone = () => {
   this.props.showAppFunc();
  }
  render() {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
  
  }
}

export default NewUserIntro

