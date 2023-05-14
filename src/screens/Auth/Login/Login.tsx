import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WelcomeScreen from '../../../components/template/WelcomeScreen';
import DefaultButton from '../../../components/uiket/DefaultButton';
import DefaultInputEye from '../../../components/uiket/DefaultInputEye';
import DefaultInput from '../../../components/uiket/TextInput';
import {COLORS} from '../../../constants/colors';
import {ROUTES} from '../../../constants/routes';
import useRootStore from '../../../hooks/useRootStore';
import {API_URL} from '../../../api/api.constants';
import {observer} from 'mobx-react';
import axios from 'axios';

const Login = () => {
  const navigaton: any = useNavigation();
  const {setState, state, onLogin} = useRootStore().loginStore;

  return (
    <WelcomeScreen
      title="Авторизация"
      text={'Авторизуйтесь для получения доступа ко всем возможностям системы'}
      imageWidth={254}
      height={231}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={10}>
        <View>
          <DefaultInput
            value={state.phone}
            placeholder="Номер телефона"
            onChangeText={e => setState(e, 'phone')}
          />
          <DefaultInputEye
            value={state.password}
            placeholder="Пароль"
            backgroundColor={'#69628D'}
            inputStyle={'#69628D'}
            color={COLORS.white}
            placeholderColor={COLORS.white}
            onChange={e => setState(e, 'password')}
          />
          {/* <Text style={styles.error}>Не верный логин и/или пароль</Text> */}
        </View>
        <View>
          <DefaultButton
            title={'Войти'}
            ButtonStyle={{
              backgroundColor: '#F4B840',
              marginTop: 30,
            }}
            TextStyle={{color: COLORS.white}}
            onPress={onLogin}
          />
          <TouchableOpacity
            onPress={() => navigaton.navigate(ROUTES.SELECTTYPE)}>
            <Text style={styles.text}>Нет аккаунта?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigaton.navigate(ROUTES.RECOVERY_EMAIL)}>
            <Text style={styles.text}>Вы забыли свой пароль?</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
        </View>
      </KeyboardAvoidingView>
    </WelcomeScreen>
  );
};

export default observer(Login);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
    color: '#c9c9c9aa',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
  },
  error: {
    color: COLORS.red,
    alignSelf: 'center',
  },
});
