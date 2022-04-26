import { StyleSheet } from "react-native"

const primaryColor = "#FFA06A";
const secondaryColor = "#FFDEC9";
const terinaryColor = "#EAEAEA";
const linkColor = "#0645AD";


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
      /*MainContainer:{
        backgroundColor: "red",
        alignItems: 'stretch',
        alignContent: "center",
        justifyContent: 'center',
      },*/
      YearContainer:{
        marginLeft: "5%",
        width:"100%",
      },

      // ------------------ Date Iterator -----------------------
      DateContainer: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: terinaryColor,
        width: "90%",
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

      },
      TouchButton:{
        padding:20,
      },

      // ------------------ No Chores Page -----------------------
      NoChoresContainer:{
        width: "90%",
        padding: 20,
        backgroundColor: secondaryColor,
        justifyContent: "center",
        alignItems:"center",
        marginTop: 40,
      },
      LogoPH:{
        justifyContent: "center",
        alignItems:"center",
        padding: 20,
        backgroundColor: primaryColor,
      },
      NoChoresTextContainer:{
        width: "80%",
        padding: 10,
      },
      NoChoresText:{
        fontSize: 20,
        textAlign: "center",
      },
      NoChoresButton:{
        fontSize: 20,
        textAlign: "center",
        color: linkColor,
        paddingTop:10,
      },
      AddCircle:{
        color: linkColor,
      },

      // ------------------ Add Chores Page -----------------------
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
      ChoreContainer: {
        width: "100%",
        padding: 7,
        margin: 5,
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

      }
})


export default styles;