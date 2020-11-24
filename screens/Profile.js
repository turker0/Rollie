import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ProfileDropdown from "../components/profile/profiledropdown";
import { useSelector } from "react-redux";
import AvatarsList from "../components/profile/avatarslist";
import { Feather } from "@expo/vector-icons";

const SPACING = 30;
const { width } = Dimensions.get("window");

export default function Movies({}) {
  const user = useSelector((state) => state.user);
  const movies = useSelector((state) => state.movies);
  const [avatar, setAvatar] = useState(false);

  const toggleAvatar = () => {
    setAvatar(!avatar);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#000" }}
    >
      <View style={styles.container}>
        <Text style={styles.name}>{user.username}</Text>
        <TouchableOpacity onPress={toggleAvatar} style={styles.emptyAvatar}>
          {!user.avatar ? (
            <Feather name="plus" size={24} color="#fff" />
          ) : (
            user.avatar
          )}
        </TouchableOpacity>
        {avatar && <AvatarsList toggleAvatar={toggleAvatar} />}
        <Text style={styles.dummy}>{user.detail}</Text>
        <ProfileDropdown
          title={"Watched " + movies.watched.length}
          list={movies.watched}
        />
        <ProfileDropdown
          title={"Later " + movies.later.length}
          list={movies.later}
        />
        <Text style={styles.title}>Your Movies</Text>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.title}>Profile</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingVertical: SPACING / 2,
    paddingHorizontal: SPACING,
  },
  name: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "RalewayBlack",
    letterSpacing: 1,
    marginTop: SPACING * 2,
    marginBottom: SPACING / 2,
    textTransform: "capitalize",
  },
  image: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    backgroundColor: "#e5e5e5",
    marginVertical: SPACING / 2,
  },
  dummy: {
    fontSize: 20,
    fontFamily: "RalewaySemiBold",
    color: "#e5e5e5",
    marginVertical: SPACING / 2,
  },
  emptyAvatar: {
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2e2e2e",
    borderRadius: 36,
    borderWidth: 4,
    borderColor: "#665DF5",
  },
  modal: {
    margin: 0,
  },
});
