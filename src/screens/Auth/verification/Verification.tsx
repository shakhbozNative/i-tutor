import React, {useContext, useEffect, useState, version} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import WelcomeScreen from '../../../components/template/WelcomeScreen';

import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {observer} from 'mobx-react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import DefaultButton from '../../../components/uiket/DefaultButton';
import {COLORS} from '../../../constants/colors';
import {ROUTES} from '../../../constants/routes';
import ClockContext from '../../../helper/ClockHelper';
import {ScrollView} from 'react-native-gesture-handler';

const CELL_COUNT = 6;

const Verification = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const clockStore = useContext(ClockContext);
  //   const recoveryAuthStore = useRootState().recoveryAuth;
  //   const state = useRootState();
  const isFocused = useIsFocused();
  //  const verificationStore = useRootState().verification;
  const route = useRoute();

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    clockStore.run();
  }, []);

  // useEffect(() => {
  //   verificationStore._change(value);
  // }, [value])

  // const clockRefresh=()=>{
  //   clockStore.run();
  //   console.log('recoveryAuthStore.isRunningClock', recoveryAuthStore.isRunningClock);

  //   clockStore.refresh()
  // }

  // useEffect(() =>{
  //   isFocused && recoveryAuthStore.isRunningClock && clockStore.refresh();

  // }, [recoveryAuthStore.isRunningClock, isFocused, clockStore.refresh])

  //   const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={{flex: 1}}>
        <WelcomeScreen
          title="Введите код,
      полученный в SMS"
          text={''}
          imageWidth={254}
          height={231}
          fontSize={28}>
          <>
            <View>
              <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <View style={styles.number_box} key={index}>
                    <Text
                      style={styles.cell}
                      onLayout={getCellOnLayoutHandler(index)}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  </View>
                )}
              />
            </View>
            <View style={{width: '100%', marginTop: 50}}>
              <DefaultButton
                title="Войти в ЛК"
                ButtonStyle={{backgroundColor: '#F4B840'}}
                TextStyle={{color: COLORS.white}}
                // onPress={() => {
                //   verificationStore._submit(state.auth.state.login.phone);
                //   console.log(`state.auth.state.login.phone${state.auth.state.login.phone}`)
                // }}
              />
            </View>
            <View
              style={{
                width: '100%',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#C9C9C9',
                  marginTop: 40,
                  fontSize: 16,
                  lineHeight: 20,
                }}>
                Повторная отправка кода в сообщении возможна через{' '}
                {clockStore.second}s
              </Text>
              <TouchableOpacity
              // disabled={clockStore.second!==0}
              // onPress={clockRefresh}
              >
                <Text style={styles.repledCode}>Отправить код ещё раз</Text>
              </TouchableOpacity>
            </View>
          </>
        </WelcomeScreen>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default observer(Verification);
const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  number_box: {
    width: 29,
    height: 25,
    marginHorizontal: 4,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.white,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: -10,
  },
  focusCell: {
    borderBottomColor: '#000',
  },
  repledCode: {
    textAlign: 'center',
    marginTop: 47,
    color: '#C9C9C9',
    textDecorationLine: 'underline',
  },
});
