import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RecoveryComponent from '../../../components/template/Recovery';
import {STRINGS} from '../../../locales/strings';
import {useNavigation} from '@react-navigation/native';
import useRootStore from '../../../hooks/useRootStore';
import axios from 'axios';
import {ROUTES} from '../../../constants/routes';
import {Alert} from 'react-native';

const RecoveryCode = () => {
  const navigation = useNavigation();

  const {state, setState} = useRootStore().recoveryStore;

  const onHandle = async () => {
    if (state.code === '') {
      Alert.alert('Iltimos SMS kodini kiriting');
    } else {
      try {
        const res = await axios({
          url: 'http://tutor.shini.uz/api/user/accept-recover-code',
          method: 'POST',
          data: state,
        });

        if (res.data) {
          Alert.alert(
            '',
            `Tabriklaymiz sizni yangi parolingiz ${res.data.data.password}`,
            [
              {
                text: 'Tushundim',
                onPress: () => navigation.navigate(ROUTES.LOGIN as never),
              },
            ],
          );
        }
      } catch (error: any) {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <RecoveryComponent
      title={STRINGS.ru.recovery}
      label="Введите код"
      onChangeText={e => setState(e, 'code')}
      onPress={onHandle}
    />
  );
};

export default RecoveryCode;

const styles = StyleSheet.create({});
