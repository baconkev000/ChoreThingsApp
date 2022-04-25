import { StyleSheet } from "react-native"

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
        backgroundColor: "#FFA06A"
      },
      Hidden: {
        display: "none",
      },
      DateContainer: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#EEEEEE",
        width: "90%",
        marginLeft: "5%",
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

})


export default styles;