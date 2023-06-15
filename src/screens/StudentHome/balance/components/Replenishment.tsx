import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AccountCart from './AccountCart';
import {COLORS} from '../../../../constants/colors';
import DefaultInput from '../../../../components/uiket/TextInput';
import {BalanceType} from '../../../../store/balance/balance.type';
import {STRINGS} from '../../../../locales/strings';
import {useTranslation} from 'react-i18next';
type propsTpye = {
  cartOnline?: boolean;
  cartNumber?: boolean;
  data?: BalanceType[];
};

const Replenishment = (props: propsTpye) => {
  console.log('data11', props.data);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      {props.cartOnline ? (
        <View
          style={{
            marginTop: 12,
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingVertical: 19,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: COLORS.tabBgColor,
              fontSize: 18,
              fontWeight: '700',
            }}>
            {t('Filling_methods')}
          </Text>
          <View style={styles.cartBox}>
            {props.data?.map((item, index) => (
              <AccountCart name={item.name} icon={item.photo} key={index} />
            ))}
          </View>
        </View>
      ) : null}
      {props?.cartNumber ? (
        <View
          style={{
            marginTop: 12,
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingVertical: 19,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: COLORS.tabBgColor,
              fontSize: 18,
              fontWeight: '700',
              marginBottom: 16,
            }}>
            {t('Filling_methods')}
          </Text>
          <DefaultInput
            label={t('cardNumber')}
            lableColor="#47406A"
            backgroundColor="#F2F2F2"
          />
          <DefaultInput
            label={t('Card_expiration_date')}
            lableColor="#47406A"
            backgroundColor="#F2F2F2"
          />
        </View>
      ) : null}
    </View>
  );
};

export default Replenishment;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  cartBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    marginTop: 12,
  },
  btnBox: {
    width: '100%',
  },
});
