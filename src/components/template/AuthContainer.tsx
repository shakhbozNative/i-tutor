import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import GapHeight from '../../constants/GapHeight';
import {COLORS} from '../../constants/colors';
import {ROUTES} from '../../constants/routes';
import {STRINGS} from '../../locales/strings';
import DefaultButton from '../uiket/DefaultButton';
import DefaulTitle from '../uiket/DefaultTitle';
import GoBackHeader from '../uiket/GoBackHeader';
import DefaultInput from '../uiket/TextInput';
import useRootStore from '../../hooks/useRootStore';
import {API_URL} from '../../api/api.constants';
import {useTranslation} from 'react-i18next';
type PropsType = {
  title?: string;
  text?: string;
  imageWidth?: any;
  height?: any;
  fontSize?: any;
  education?: boolean;
  student?: boolean;
  teacher?: boolean;
  onClick?: () => void;
};

const AuthContainer = (props: PropsType) => {
  const navigation = useNavigation();
  const {registerStore} = useRootStore();
  const {setStateEdu, setStateStudent, setStateTeacher, state} =
    useRootStore().signUpEduStore;

  const handleRegisterEducation = async () => {
    if (state.education.educational_name) {
      await registerStore.onRegisterEducation(state.education);
    }
  };

  const handleRegisterTeacher = async () => {
    if (state.teacher.name) {
      await registerStore.onRegisterTeacher(state.teacher);
    }
  };

  const handleRegisterStudent = async () => {
    if (state.student.name) {
      await registerStore.onRegisterStudent(state.student);
    }
  };

  const {t} = useTranslation();

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}} bounces={false}>
        <View style={{backgroundColor: COLORS.tabBgColor, flex: 1}}>
          <GoBackHeader />
          <DefaulTitle title={t('registration')} />
          {props?.education ? (
            <ScrollView style={styles.input_box}>
              <DefaultInput
                label={t('NameOftheTrainingCenter')}
                onChangeText={e => {
                  setStateEdu(e, 'educational_name');
                }}
              />
              <DefaultInput
                label={t('lawAddres')}
                onChangeText={e => setStateEdu(e, 'educational_address')}
              />
              <DefaultInput
                label={t('email')}
                onChangeText={e => setStateEdu(e, 'email')}
              />
              <DefaultInput
                label={t('PhoneNumber')}
                onChangeText={e => setStateEdu(e, 'phone')}
              />
              <DefaultInput
                label={t('password')}
                onChangeText={e => setStateEdu(e, 'password')}
              />
              <DefaultInput
                label={t('ContractID')}
                onChangeText={e => setStateEdu(e, 'country_id')}
              />
              <DefaultInput
                label={t('region')}
                onChangeText={e => setStateEdu(e, 'educational_region')}
              />
              <DefaultButton
                title={t('registr')}
                ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
                TextStyle={{color: COLORS.white}}
                onPress={handleRegisterEducation}
              />
              <GapHeight height={68} />
            </ScrollView>
          ) : null}
          {props?.student ? (
            <ScrollView style={styles.input_box}>
              <DefaultInput
                label={t('email')}
                onChangeText={e => setStateStudent(e, 'email')}
              />
              <DefaultInput
                label={t('name')}
                onChangeText={e => setStateStudent(e, 'name')}
              />
              <DefaultInput
                label={t('PhoneNumber')}
                onChangeText={e => setStateStudent(e, 'phone')}
              />
              <DefaultInput
                label={t('password')}
                onChangeText={e => setStateStudent(e, 'password')}
              />

              <DefaultButton
                title={t('registr')}
                ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
                TextStyle={{color: COLORS.white}}
                onPress={handleRegisterStudent}
              />
              <GapHeight height={68} />
            </ScrollView>
          ) : null}
          {props?.teacher ? (
            <ScrollView style={styles.input_box}>
              <DefaultInput
                label={t('name')}
                onChangeText={e => setStateTeacher(e, 'name')}
              />
              <DefaultInput
                label={t('lastName')}
                onChangeText={e => setStateTeacher(e, 'lastname')}
              />
              <DefaultInput
                label={t('Surname')}
                onChangeText={e => setStateTeacher(e, 'fname')}
              />
              <DefaultInput
                label={t('PhoneNumber')}
                onChangeText={e => setStateTeacher(e, 'phone')}
              />
              <DefaultInput
                label={t('email')}
                onChangeText={e => setStateTeacher(e, 'email')}
              />
              <DefaultInput
                label={t('password')}
                onChangeText={e => setStateTeacher(e, 'password')}
              />

              <DefaultButton
                title={t('registr')}
                ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
                TextStyle={{color: COLORS.white}}
                onPress={handleRegisterTeacher}
              />
              <GapHeight height={68} />
            </ScrollView>
          ) : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default observer(AuthContainer);

const styles = StyleSheet.create({
  input_box: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 29,
    paddingBottom: 200,
  },
});
