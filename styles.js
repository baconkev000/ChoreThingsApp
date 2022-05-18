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
        fontSize: 25,
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
        width: "100%",
        height: "100%",
      },
      TinyLogo:{
        width: 150,
        height: 150,
      },
      ConfettiContainer:{
        width:"100%",
        height:"100%",
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
      AddToLibraryText:{
        fontSize: 15,
        paddingTop: 10,
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
        padding: 20,
      },
      TaskContainer: {
        width: "100%",
        flexDirection: "row",
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
      CustomTextInput:{
        fontSize: 20,
        padding: 10,
      },
      TextInputSearch:{
        fontSize: 20,
        padding: 10,
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
      TaskLibraryContentContainer:{
        flexDirection: "row",
        alignItems: "center",
      },
      TaskLibraryText:{
        fontSize: 20,
        padding: 5,
      },
      TaskLibraryIcon:{
        fontSize: 25,
        paddingRight: 5,
        color: primaryColor,
      },

      //----------------------- Login Page --------------------------\
      LoginPageContainer:{
        backgroundColor: primaryColor,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      },
      LoginInputContainer:{
        padding:15,
        width: "90%",
        marginBottom: "5%",
        backgroundColor: "white",
      },
      LoginContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      SlideContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: primaryColor,
        color:"white",
        padding: 30,
      },
      LoginButtonsContainer:{
        flexDirection: "row",
        width:"90%",
      },
      LoginButton: {
        padding: 20,
        textAlign: "center",
        width: "45%",
        backgroundColor: secondaryColor,
        color: "black",
        marginTop: "5%",
        marginRight: "10%",
      },

      SlideContentContainer:{
        flex: .8,
        width:"100%",
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 40,
      },
      SlideAsset:{
        borderWidth: 2,
        borderColor: "white",
        padding: 10,
        marginTop: 40,
        marginBottom: 40,
      },
      SlideLogo:{
        width: 150,
        height: 150,
      },
      SlideImage:{
        width: 300,
        height: 400,
        
      },
      SlideSubTitle:{
        fontSize: 25,
        color: "white",
        textAlign: "center",
      },
      SlideTitle:{
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      SlideText:{
        fontSize: 20,
        color: "white",
        textAlign: "center",
      },
      SlideNoTasksContainer:{
        padding: 50,
        width: "100%",
        backgroundColor: secondaryColor,
        justifyContent: "center",
        alignItems:"center",
        marginTop: 20,
      },
      SlideTaskOptionsContainer:{
        width: "100%",
      },
      SlideOptionsContainer: {
        width:"100%",
      },

      //----------------------- Modal  --------------------------\
  
      LoginText:{
        fontSize: 20,
        paddingBottom: 10,
      },
      LoginInputText:{
        fontSize: 15,
      },

      ModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      ModalContainer: {
        margin: 20,
        backgroundColor: "white",
        width:"80%",
        height: "18%",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      ShareButton: {
        margin:10,
        padding: 10,
        width: "90%",
        elevation: 2
      },
      ShareButtonClose: {
        backgroundColor: "#2196F3",
      },
      ShareButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
      },
      ModalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
      },

      //----------------------- Modal  --------------------------\

      ButtonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },

})


export default styles;