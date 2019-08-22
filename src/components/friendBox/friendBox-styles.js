import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  imageContainer: {
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  nameContainer: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 8,
    marginRight: "auto"
  },
  statusContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    alignSelf: "stretch",
    paddingHorizontal: 4
  },
  requestContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: 4
  },
  followerButton: {
    backgroundColor: window.theme.alt,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16
  },
  image: {
    width: 60,
    height: 60
  },
  statusLight: {
    backgroundColor: window.theme.status,
    width: 10,
    height: 10,
    borderRadius: 5,
    paddingVertical: 4
  },
  statusLightAlt: {
    backgroundColor: window.theme.textAlt,
    width: 10,
    height: 10,
    borderRadius: 5,
    paddingVertical: 4
  },
  nameText: {
    fontSize: window.fs(16),
    fontWeight: "bold",
    color: window.theme.text
  },
  nameTextAlt: {
    fontSize: window.fs(16),
    color: window.theme.textAlt
  },
  statusText: {
    fontSize: window.fs(12),
    color: window.theme.status
  },
  statusTextAlt: {
    fontSize: window.fs(12),
    color: window.theme.textAlt
  },
  messageText: {
    fontSize: window.fs(12),
    color: window.theme.secondary
  },
  messageIcon: {
    fontSize: window.fs(32),
    color: window.theme.secondary
  },
  yesIcon: {
    fontSize: window.fs(32),
    color: window.theme.status,
    paddingHorizontal: 4
  },
  noIcon: {
    fontSize: window.fs(32),
    color: window.theme.secondary,
    paddingHorizontal: 4
  },
  followerText: {
    fontSize: window.fs(16),
    color: window.theme.body
  }
});
