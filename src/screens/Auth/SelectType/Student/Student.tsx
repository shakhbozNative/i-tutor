import React from "react";
import { StyleSheet } from "react-native";
import NavigationService from "../../../../NavigationService";
import AuthContainer from "../../../../components/template/AuthContainer";

const Student = () => {
  const onPress = () => {
    NavigationService.navigate("STUDENTNAVIGATION");
  };
  return <AuthContainer student={true} onClick={onPress} />;
};

export default Student;

const styles = StyleSheet.create({});
