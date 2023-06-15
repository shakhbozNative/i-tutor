import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/colors';
import {STRINGS} from '../../../../locales/strings';
import {useTranslation} from 'react-i18next';
type propsType = {
  amount?: any;
};
const OnAccount = (props: propsType) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.amount}> {t('On_account')} </Text>
        <Text style={styles.amount}>
          {props.amount ? props.amount : '30.000'} + {t('sum')}
        </Text>
      </View>
    </View>
  );
};

export default OnAccount;

const styles = StyleSheet.create({
  container: {
    minHeight: 75,
    width: '100%',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    borderRadius: 10,
  },
  contentBox: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 21,
  },
  amount: {
    color: COLORS.tabBgColor,
    fontSize: 15,
    fontWeight: '700',
  },
});
