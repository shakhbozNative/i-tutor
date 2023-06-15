import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecoveryComponent from '../../../components/template/Recovery';
import {STRINGS} from '../../../locales/strings';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';
import useRootStore from '../../../hooks/useRootStore';
import axios from 'axios';
import {API_URL} from '../../../api/api.constants';
import {useTranslation} from 'react-i18next';

const RecoveryEmail = () => {
  const navigation = useNavigation();

  const {state, setState} = useRootStore().recoveryStore;

  const onHandle = async () => {
    if (state.phone === '') {
      Alert.alert('Iltimos telefon nomeringizni kiriting');
    } else {
      try {
        const res = await axios({
          url: `${API_URL}/user/recover-password`,
          method: 'POST',
          data: {
            phone: state.phone,
          },
        });

        if (res.data) {
          navigation.navigate(ROUTES.RECOVERYCODE as never);
        }
      } catch (error: any) {
        Alert.alert(error.message);
      }
    }
  };
  const {t} = useTranslation();
  return (
    <RecoveryComponent
      title={t('recovery')}
      label={t('PhoneNumber')}
      onChangeText={e => setState(e, 'phone')}
      onPress={onHandle}
    />
  );
};

export default RecoveryEmail;

const styles = StyleSheet.create({});
