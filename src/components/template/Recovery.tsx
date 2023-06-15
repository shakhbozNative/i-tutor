import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../constants/colors';
import {STRINGS} from '../../locales/strings';
import DefaultButton from '../uiket/DefaultButton';
import DefaulTitle from '../uiket/DefaultTitle';
import GoBackHeader from '../uiket/GoBackHeader';
import DefaultInput from '../uiket/TextInput';
import axios from 'axios';
import {observer} from 'mobx-react';
import {useTranslation} from 'react-i18next';

type PropsType = {
  title: string;
  label: string;
  onPress?: () => void;
  onChangeText: (e: string) => void;
  inputValue?: string;
};
const RecoveryComponent = (props: PropsType) => {
  const {t} = useTranslation();

  return (
    <View
      style={{
        backgroundColor: COLORS.tabBgColor,
        flex: 1,
        position: 'relative',
      }}>
      <GoBackHeader />
      <DefaulTitle title={props.title} />
      <View style={styles.input_box}>
        <DefaultInput label={props.label} onChangeText={props.onChangeText} />
      </View>
      <View style={styles.btn_box}>
        <DefaultButton title={t('request_code')} onPress={props.onPress} />
      </View>
    </View>
  );
};

export default observer(RecoveryComponent);

const styles = StyleSheet.create({
  input_box: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 29,
    paddingBottom: 200,
  },
  btn_box: {
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 30,
  },
});
