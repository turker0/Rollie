import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ProfileDropdown from "../components/profile/profiledropdown";
import { useSelector } from "react-redux";
import AvatarsList from "../components/profile/avatarslist";
import { Feather } from "@expo/vector-icons";
import { User } from "../redux/types";
import GradientBG from "../components/shared/gradientbg";
import colors from "../style/colors";
import fonts from "../style/fonts";
import { LinearGradient } from "expo-linear-gradient";

const SPACING = 30;

const Profile = ({}) => {
  const user: User = useSelector((state: User) => state);
  const [avatar, setAvatar] = useState<boolean>(false);
  const toggleAvatar = () => {
    setAvatar(!avatar);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1 }}
    >
      <GradientBG />
      <View style={styles.container}>
        <Text style={styles.name}>{user.username}</Text>
        <TouchableOpacity onPress={toggleAvatar} style={styles.emptyAvatar}>
          <LinearGradient
            colors={[colors.pink, colors.purple]}
            style={styles.gradient}
          />
          <View style={styles.overlay}>
            {!user.avatar ? (
              <Feather name="plus" size={24} color={colors.white} />
            ) : (
              user.avatar
            )}
          </View>
        </TouchableOpacity>
        {avatar && <AvatarsList toggleAvatar={toggleAvatar} />}
        <Text style={styles.dummy}>{user.mail}</Text>
        <ProfileDropdown title="Watched Movies" type="watched" />
        <ProfileDropdown title="Later Movies" type="later" />
        <ProfileDropdown title="Declined Movies" type="declined" />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SPACING * 3,
    paddingHorizontal: SPACING,
  },
  name: {
    fontSize: fonts.text32,
    color: "#fff",
    fontFamily: "RalewayBlack",
    letterSpacing: 1,
    marginTop: SPACING * 2,
    marginBottom: SPACING / 2,
    textTransform: "capitalize",
  },
  dummy: {
    fontSize: fonts.text20,
    fontFamily: "RalewaySemiBold",
    color: colors.gray,
    marginVertical: SPACING / 2,
  },
  emptyAvatar: {
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 36,
  },
  modal: {
    margin: 0,
  },
  title: {
    fontSize: 20,
  },
  overlay: {
    width: 62,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dark,
    borderRadius: 36,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
    elevation: -1,
    borderRadius: 36,
  },
});
