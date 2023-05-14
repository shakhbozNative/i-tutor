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
  const navigation: any = useNavigation();
  const {setStateEdu, setStateStudent, setStateTeacher, state} =
    useRootStore().signUpEduStore;

  const handleLogin = async () => {
    try {
      const res = await axios({
        url: '/user/sign-up-student',
        method: 'POST',
        data: state.student,
      });

      Alert.alert(
        'Tabriklayman!',
        `${state.student.name} siz muvaffaqqiyatli ro'yxatdan o'tdinggiz`,
        [
          {
            text: 'Davom etish',
            onPress: () => {
              navigation.navigate(ROUTES.LOGIN);
            },
          },
        ],
      );
    } catch (err: any) {
      console.log(JSON.stringify(err.response.data, null, 2));
    }
  };

  const signUpTeacher = async () => {
    try {
      const res = await axios({
        url: `${API_URL}/user/sign-up-tutor`,
        method: 'POST',
        data: state.teacher,
      });

      Alert.alert(
        'Tabriklayman!',
        `${state.teacher.name} siz mufaqiyatli ro'yxatdan o'tdinggiz`,
        [
          {
            text: 'Davom etish',
            onPress: () => {
              navigation.navigate(ROUTES.LOGIN);
            },
          },
        ],
      );
    } catch (err: any) {
      console.log(JSON.stringify(err.response.data, null, 2));
    }
  };

  const signUpEducation = async () => {
    try {
      const res = await axios({
        url: `${API_URL}/user/sign-up-institution`,
        method: 'POST',
        data: state.education,
      });

      Alert.alert(
        'Tabriklayman!',
        `${state.education.educational_name} siz mufaqiyatli ro'yxatdan o'tdinggiz`,
        [
          {
            text: 'Davom etish',
            onPress: () => {
              navigation.navigate(ROUTES.LOGIN);
            },
          },
        ],
      );
    } catch (err: any) {
      console.log(JSON.stringify(err.response.data, null, 2));
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}} bounces={false}>
        <View style={{backgroundColor: COLORS.tabBgColor, flex: 1}}>
          <GoBackHeader />
          <DefaulTitle title={STRINGS.ru.registration} />
          {props?.education ? (
            <ScrollView style={styles.input_box}>
              <DefaultInput
                label={STRINGS.ru.NameOftheTrainingCenter}
                onChangeText={e => {
                  setStateEdu(e, 'educational_name');
                }}
              />
              <DefaultInput
                label={STRINGS.ru.lawAddres}
                onChangeText={e => setStateEdu(e, 'educational_address')}
              />
              <DefaultInput
                label={STRINGS.ru.email}
                onChangeText={e => setStateEdu(e, 'email')}
              />
              <DefaultInput
                label={STRINGS.ru.PhoneNumber}
                onChangeText={e => setStateEdu(e, 'phone')}
              />
              <DefaultInput
                label={STRINGS.ru.password}
                onChangeText={e => setStateEdu(e, 'phone')}
              />
              <DefaultInput
                label={STRINGS.ru.ContractID}
                onChangeText={e => setStateEdu(e, 'country_id')}
              />
              <DefaultInput
                label={STRINGS.ru.region}
                onChangeText={e => setStateEdu(e, 'educational_region')}
              />
              <DefaultButton
                title="Зарегестрироваться"
                ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
                TextStyle={{color: COLORS.white}}
                onPress={signUpEducation}
              />
              <GapHeight height={68} />
            </ScrollView>
          ) : null}
          {props?.student ? (
            <ScrollView style={styles.input_box}>
              <DefaultInput
                label={STRINGS.ru.email}
                onChangeText={e => setStateStudent(e, 'email')}
              />
              <DefaultInput
                label={STRINGS.ru.name}
                onChangeText={e => setStateStudent(e, 'name')}
              />
              <DefaultInput
                label={STRINGS.ru.PhoneNumber}
                onChangeText={e => setStateStudent(e, 'phone')}
              />
              <DefaultInput
                label={STRINGS.ru.password}
                onChangeText={e => setStateStudent(e, 'password')}
              />

              <DefaultButton
                title="Зарегестрироваться"
                ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
                TextStyle={{color: COLORS.white}}
                onPress={handleLogin}
              />
              <GapHeight height={68} />
            </ScrollView>
          ) : null}
          {props?.teacher ? (
            <ScrollView style={styles.input_box}>
              <DefaultInput
                label={STRINGS.ru.name}
                onChangeText={e => setStateTeacher(e, 'name')}
              />
              <DefaultInput
                label={STRINGS.ru.lastName}
                onChangeText={e => setStateTeacher(e, 'lastname')}
              />
              <DefaultInput
                label={STRINGS.ru.Surname}
                onChangeText={e => setStateTeacher(e, 'fname')}
              />
              <DefaultInput
                label={STRINGS.ru.PhoneNumber}
                onChangeText={e => setStateTeacher(e, 'phone')}
              />
              <DefaultInput
                label={STRINGS.ru.email}
                onChangeText={e => setStateTeacher(e, 'email')}
              />
              <DefaultInput
                label={STRINGS.ru.password}
                onChangeText={e => setStateTeacher(e, 'password')}
              />

              <DefaultButton
                title="Зарегестрироваться"
                ButtonStyle={{marginTop: 46, backgroundColor: '#F4B840'}}
                TextStyle={{color: COLORS.white}}
                onPress={signUpTeacher}
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
