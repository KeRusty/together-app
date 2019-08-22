import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: window.theme.body,
    height: Dimensions.get("window").height
  },
  profileContainer: {
    height: Dimensions.get("window").height * 0.4,
    borderBottomWidth: 1,
    borderBottomColor: window.theme.background,
    justifyContent: "center",
    alignItems: "center"
  },
  pictureContainer: {
    paddingVertical: 16
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: window.theme.secondary,
    fontSize: window.fs(40)
  },
  iconAlt: {
    color: window.theme.alt,
    fontSize: window.fs(40)
  },
  actionsText: {
    color: window.theme.textAlt,
    fontSize: window.fs(16)
  },
  pictureCover: {
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center"
  },
  infoBoxContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: window.theme.background,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16
  },
  infoBoxContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24
  },
  infoBoxHeadingText: {
    color: window.theme.textAlt,
    fontSize: window.fs(16)
  },
  infoBoxText: {
    color: window.theme.alt,
    fontSize: window.fs(20)
  },
  aboutMeContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: window.theme.background
  },
  textContainer: {
    flexDirection: "column",
    width: Dimensions.get("window").width * 0.8,
    justifyContent: "center",
    marginRight: 0
  },
  headingText: {
    fontSize: window.fs(40),
    fontWeight: "bold",
    color: window.theme.text
  },
  contentText: {
    fontSize: window.fs(20),
    color: window.theme.textAlt
  }
});
