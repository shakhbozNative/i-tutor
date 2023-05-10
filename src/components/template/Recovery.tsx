import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../constants/colors';
import {STRINGS} from '../../locales/strings';
import DefaultButton from '../uiket/DefaultButton';
import DefaulTitle from '../uiket/DefaultTitle';
import GoBackHeader from '../uiket/GoBackHeader';
import DefaultInput from '../uiket/TextInput';
import axios from 'axios';
import useRootState from '../../hooks/useRootState';
import { observer } from 'mobx-react';


 
type PropsType = {
  title?: String ;
  label?: String;
};
const RecoveryComponent = (props: PropsType) => {
 const recoveryStore = useRootState().recoveryAuth;

  return (
    <View
      style={{
        backgroundColor: COLORS.tabBgColor,
        flex: 1,
        position: 'relative',
      }}>
      <GoBackHeader />
      <DefaulTitle title={STRINGS.ru.recovery}  />
      <View style={styles.input_box}>
        <DefaultInput label={STRINGS.ru.number} 
        value={recoveryStore.phone}
        onChangeText={(text)=> {
          recoveryStore._change(text)
        }}/>
      </View>
      <View style={styles.btn_box}>
        <DefaultButton title="Запросить код" onPress={recoveryStore._submit}/>
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
