import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const SPACING = 30;

export default function ProfileDropdown({ title, list }) {
  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleHide} style={styles.dropTitle}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={hide ? "md-arrow-dropdown" : "ios-remove"}
          size={24}
          color="#fff"
        />
      </TouchableOpacity>

      {hide ? (
        <View style={styles.listWrapper}>
          {list.map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: SPACING,
  },
  dropTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
    elevation: 5,
    zIndex: 5,
    borderWidth: 1,
    borderColor: "#2e2e2e",
    padding: SPACING / 6,
  },
  title: {
    fontSize: 18,
    fontFamily: "RalewaySemiBold",
    color: "#fafafa",
  },
  itemText: {
    fontSize: 16,
    fontFamily: "RalewayRegular",
    color: "#e5e5e5",
    paddingVertical: SPACING / 6,
  },
  listWrapper: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "#fff",
    padding: SPACING / 6,
  },
});
