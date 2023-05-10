import React from "react";
import { StyleSheet } from "react-native";
import NavigationService from "../../../../NavigationService";
import AuthContainer from "../../../../components/template/AuthContainer";

const EducationalCenter = () => {
  const onPress = () => {
    NavigationService.navigate("EDUCATIONALCENTERVIGATION");
  };
  return <AuthContainer education={true} onClick={onPress} />;
};

export default EducationalCenter;

const styles = StyleSheet.create({});
