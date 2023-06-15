import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  EducationCentryIcon,
  StudentsTypeIcon,
  TecherTypeIcon,
} from '../../../assets/icons/icons';
import WelcomeScreen from '../../../components/template/WelcomeScreen';
import FlagButton from '../../../components/uiket/FlagButton';
import {ROUTES} from '../../../constants/routes';
import {STRINGS} from '../../../locales/strings';
import {useTranslation} from 'react-i18next';

const SelectType = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <WelcomeScreen title={t('Select_user_type')}>
      <FlagButton
        onPress={() => navigation.navigate(ROUTES.EDUCATIONCENTER as never)}
        title={t('education_center')}
        iconUrl={<EducationCentryIcon />}
      />
      <FlagButton
        onPress={() => navigation.navigate(ROUTES.TEACHER as never)}
        title={t('teacher')}
        iconUrl={<TecherTypeIcon />}
      />
      <FlagButton
        onPress={() => navigation.navigate(ROUTES.STUDENT as never)}
        title={t('student')}
        iconUrl={<StudentsTypeIcon />}
      />
    </WelcomeScreen>
  );
};

export default SelectType;

const styles = StyleSheet.create({});
