/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import backgroundImage from "../../assets/backgroundImage/background.jpg";
import theme from "../../assets/themes";
import Input from "../components/Input";
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin";
import Footer from "../components/Footer";
import axios from "axios";
// import SignUp from './SignUp';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const move = () => {
    console.log(email, password);
    axios
      .post("http://192.168.29.60:000/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.status_code === 200) {
          console.log("200", res.data.message);
        } else if (res.data.status_code === 400) {
          console.log("400", res.data.error_description);
        } else if (res.data.status_code === 500) {
          console.log("500", res.data.error_description);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
      <View style={styles.mainView}>
        <Text style={styles.login}>Login</Text>
        <Input
          type="text"
          placeholder="Enter email"
          placeholderTextColor={theme.colors.gray}
          value={email}
          handleChangeText={setEmail}
        />
        <Input
          type="text"
          placeholder="Enter Password"
          placeholderTextColor={theme.colors.gray}
          value={password}
          handleChangeText={setPassword}
        />
        <Button move={move} text={"Login"} />
        <SocialLogin />
      </View>
      <Footer text1={"Don't have an account"} text2={"SignUp"} move={move} />
    </ImageBackground>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  login: {
    fontSize: 28,
    fontWeight: "500",
    color: theme.colors.white,
    letterSpacing: 2,
  },
  mainView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
