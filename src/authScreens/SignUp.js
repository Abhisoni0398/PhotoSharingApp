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

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("Hello");
  const [password, setPassword] = useState(null);
  const [confirm_password, setConfirm_passord] = useState(null);

  const move = () => {
    console.log("email,pass,confirmPass", email, password, confirm_password);
    axios
      .post("http://192.168.29.60:5000/register", {
        email,
        password,
        confirm_password,
      })
      .then((newRes) => {
        if (newRes.data.status_code === 200) {
          console.log("200", newRes.data.message);
        } else if (newRes.data.status_code === 400) {
          console.log("400", newRes.data.error_description);
        } else if (newRes.data.status_code === 500) {
          console.log("500", newRes.data.error_description);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
      <View style={styles.mainView}>
        <Text style={styles.login}>Sign Up</Text>
        <Input
          type="text"
          placeholder="Enter email"
          value={email}
          handleChangeText={setEmail}
          placeholderTextColor={theme.colors.gray}
        />
        <Input
          type="text"
          placeholder="Enter Password"
          value={password}
          handleChangeText={setPassword}
          placeholderTextColor={theme.colors.gray}
        />
        <Input
          type="text"
          placeholder="Confirm Password"
          value={confirm_password}
          handleChangeText={setConfirm_passord}
          placeholderTextColor={theme.colors.gray}
        />
        <Button text={"SignUp"} move={move} />
        <SocialLogin />
      </View>
      <Footer
        text1={"Already have an account ?"}
        text2={"SignIn"}
        move={move}
      />
    </ImageBackground>
  );
};

export default SignUp;
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
