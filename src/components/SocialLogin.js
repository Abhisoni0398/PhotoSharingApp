/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import auth from "@react-native-firebase/auth";
import theme from "../../assets/themes";
import IconComponent from "./IconComponent";
import { loginFail, loginStart, loginSuccess } from "../redux/action";
import { NavigationContainer } from "@react-navigation/native";

const SocialLogin = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "239652825383-72t2olckmrrivone7fhb01i11uinb20r.apps.googleusercontent.com",
    });
  });
  const dispatch = useDispatch();
  const { isLogin, isLoading, errorMsg, userData } = useSelector(
    (state) => state.auth
  );

  const onGoogleButtonPress = async () => {
    dispatch(loginStart());
    // Get the users ID token
    try {
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);

      dispatch(loginSuccess("abcd"));
    } catch (error) {
      console.log(error);
      dispatch(loginFail(error));
    }
  };

  useEffect(() => {
    console.log("userData", userData);
  }, [userData]);

  const facebookLogin = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
      "user_friends",
    ]);

    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw "Something went wrong obtaining access token";
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };
  const twitterLogin = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View>
      <View style={styles.separator}>
        <View style={styles.lineStyle} />
        <Text style={styles.lineText}>Or login with</Text>
        <View style={styles.lineStyle} />
      </View>
      <View style={styles.iconStyle}>
        <IconComponent iconName={"google"} googleLogin={onGoogleButtonPress} />
        <IconComponent iconName={"twitter"} googleLogin={twitterLogin} />
        <IconComponent iconName={"facebook"} googleLogin={facebookLogin} />
      </View>
      <Text>
        {isLoading && "Loading....."}
        {errorMsg && "errorMsg"}
        {isLogin && "Nice BC"}
      </Text>
    </View>
  );
};

export default SocialLogin;
const styles = StyleSheet.create({
  separator: {
    width: "90%",
    paddingTop: 15,
    flexDirection: "row",
  },
  lineStyle: {
    backgroundColor: "white",
    height: 2,
    flex: 1,
    alignSelf: "center",
  },
  lineText: {
    alignSelf: "center",
    color: theme.colors.white,
    paddingHorizontal: 5,
    fontSize: 15,
    fontFamily: "OpenSans-Bold",
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  iconStyle: { flexDirection: "row", justifyContent: "space-around" },
});
