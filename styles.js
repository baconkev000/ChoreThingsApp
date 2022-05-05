import { StyleSheet } from "react-native"

const primaryColor = "#FFA06A";
const secondaryColor = "#FFDEC9";
const terinaryColor = "#D8D8D8";
const linkColor = "#3973CB";
const backgroundColor = "white";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      },
      HeaderContainer: {
        flex: 1,
      },
      TitleColor: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold",
        backgroundColor: primaryColor,
      },
      Hidden: {
        display: "none",
      },
      YearContainer:{
        marginLeft: "5%",
        width:"90%",

      },
      HomeContainer:{
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
      },
      TinyLogo:{
        width: 150,
        height: 150,
      },

      // ------------------ Date Iterator -----------------------
      TaskDayContainer:{
        flexDirection: "column",
        marginTop: 20,
      },
      TaskListContainer: {
        height:"85%",
      },
      DateContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: "5%",
        justifyContent: "space-between",
        alignItems: "center",

      },
      DateTextContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      DateText:{
        fontSize: 20,
      },
      ToTodayText:{
        opacity: 0,
      },
      ToTodayTextColor:{
        opacity: 100,
        color: primaryColor,
      },
      TouchButton:{
        padding:20,
      },

      // ------------------ No Tasks Page -----------------------
      NoTasksContainer:{
        padding: 20,
        backgroundColor: secondaryColor,
        justifyContent: "center",
        alignItems:"center",
        marginTop: 20,
      },
      LogoPH:{
        justifyContent: "center",
        alignItems:"center",
        padding: 20,
      },
      NoTasksTextContainer:{
        width: "80%",
        padding: 10,
      },
      NoTasksText:{
        fontSize: 20,
        textAlign: "center",
      },
      NoTasksButton:{
        fontSize: 20,
        textAlign: "center",
        paddingTop:10,
        color: linkColor,
      },
      
      AddCircle:{
        color: linkColor,
      },

      // ------------------ Add Tasks Page -----------------------
      OptionTile:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: terinaryColor,
        padding: 10,
      },
      TaskContainer: {
        width: "100%",
        padding: 7,
        margin: 5,
        borderWidth: 2,
        borderColor: terinaryColor,

      },
      InputBox: {
        display: "flex",
        flex: 1,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 2,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginTop: 10,
        fontSize: 20,
      },
      TextInput:{
        fontSize: 20,
      },
      NameText:{
        fontSize: 20,
        paddingBottom: 5,
      },
      TextSize:{
        fontSize: 20,

      },

      //----------------------- Task --------------------------\
      TaskNameContainer:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: primaryColor,
        marginTop: "5%",
        justifyContent: "space-between",
        alignItems: "center",
      },
      TaskNameText:{
        fontSize: 20,
        padding: 20,
      },
      TaskNameTextEdit:{
        fontSize: 15,
        padding: 20,
      },
      SwipeLeft:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#05BB59",
        width: "100%",
        marginTop: "5%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,

      },
      SwipeRight:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F96A61",
        width: "100%",
        marginTop: "5%",
        justifyContent:"flex-end",
        alignItems: "center",
        paddingRight: 10,
      },
      SwipeText:{
        color:"white",
        fontSize: 20,
        fontWeight: "bold",
      },
      TaskInputContainer:{
        marginTop: "5%",
        marginLeft: "5%",
        width: "90%",
      },

      //----------------------- Edit Task Page --------------------------\
      EditNameText:{
        fontSize: 20,
        padding: 5,
      },

      //----------------------- Task Library Page --------------------------\
      TaskLibraryContainer:{
        padding: 15,
        borderBottomColor: terinaryColor,
        borderBottomWidth: .5,
      },
      TaskLibraryText:{
        fontSize: 20,
        padding: 5,
      },
      TaskLibraryIcon:{
        fontSize: 20,
        padding: 5,
        color: primaryColor,
      },

      //----------------------- Login Page --------------------------\
      LoginPageContainer:{
        backgroundColor: primaryColor,
        flex: 1,
        flexDirection: "column",
        paddingTop: "50%",
        width: "100%",
      },
      LoginInputContainer:{
        marginLeft: "5%",
        width: "90%",
        padding: 10,
      },
      LoginContainer: {
        width: "100%",
        padding: 10,
        backgroundColor: "white",
      },
  
      LoginText:{
        fontSize: 20,
        paddingBottom: 10,
      },
      LoginInputText:{
        fontSize: 15,
      },

})


export default styles;