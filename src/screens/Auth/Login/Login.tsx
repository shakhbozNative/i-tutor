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
import {STRINGS} from '../../../locales/strings';
import {useTranslation} from 'react-i18next';

const Login = () => {
  const navigaton: any = useNavigation();
  const {setState, state, onLogin, isError, isLoading} =
    useRootStore().loginStore;
  const {t} = useTranslation();

  return (
    <WelcomeScreen
      title={t('authorization')}
      text={t('authorization_new')}
      imageWidth={254}
      height={231}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={10}>
        <View>
          <DefaultInput
            value={state.phone}
            placeholder={t('PhoneNumber')}
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
          {isError ? (
            <Text style={styles.error}>Не верный логин и/или пароль</Text>
          ) : null}
        </View>
        <View>
          <DefaultButton
            title={t('enter')}
            ButtonStyle={{
              backgroundColor: '#F4B840',
              marginTop: 30,
            }}
            TextStyle={{color: COLORS.white}}
            onPress={onLogin}
            loading={isLoading}
          />
          <TouchableOpacity
            onPress={() => navigaton.navigate(ROUTES.SELECTTYPE)}>
            <Text style={styles.text}> {t('no_account')} </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigaton.navigate(ROUTES.RECOVERY_EMAIL)}>
            <Text style={styles.text}> {t('forget_password')} </Text>
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
