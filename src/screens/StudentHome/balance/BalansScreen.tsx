import {ScrollView, StyleSheet, View} from 'react-native';
import DefaulTitle from '../../../components/uiket/DefaultTitle';
import GapHeight from '../../../constants/GapHeight';
import GoBackHeader from '../../../components/uiket/GoBackHeader';
import OnAccount from './components/OnAccount';
import Replenishment from './components/Replenishment';
import DefaultButton from '../../../components/uiket/DefaultButton';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';
import {observer} from 'mobx-react';
import useRootStore from '../../../hooks/useRootStore';
import {useEffect} from 'react';
import {STRINGS} from '../../../locales/strings';
import {useTranslation} from 'react-i18next';

type PropsType = {
  id: string;
  name: string;
  url: string;
};

export const BalanseScreen = observer((props: PropsType) => {
  const {balanceStore} = useRootStore();
  const navigation = useNavigation();

  useEffect(() => {
    balanceStore.getBalance();
  }, []);
  const {t} = useTranslation();
  return (
    <View style={{position: 'relative', backgroundColor: '#F8F8F8'}}>
      <GoBackHeader color="#47406A" />
      <DefaulTitle title={t('balance')} color="#47406A" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <OnAccount />
        <Replenishment data={balanceStore._balanceData} cartOnline={true} />
        <Replenishment cartNumber={true} />
        <View style={styles.btnBox}>
          <DefaultButton
            title={t('Top_up')}
            onPress={() => navigation.navigate(ROUTES.PaidService as never)}
          />
        </View>
        <GapHeight height={150} />
      </ScrollView>
    </View>
  );
});

export default BalanseScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    height: '90%',
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  btnBox: {
    width: '100%',
    marginTop: 36,
  },
});
