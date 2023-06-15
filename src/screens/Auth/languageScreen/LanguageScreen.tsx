import React from 'react';

import {useNavigation} from '@react-navigation/native';
import WelcomeScreen from '../../../components/template/WelcomeScreen';

import {ROUTES} from '../../../constants/routes';
import FlagButton from '../../../components/uiket/FlagButton';
import {STRINGS} from '../../../locales/strings';

import {useTranslation} from 'react-i18next';

export default function LanguageScreen(props: any) {
  const navigation = useNavigation();

  const {t, i18n} = useTranslation();

  const handle = (key: 'uz' | 'ru' | 'en') => {
    i18n.changeLanguage(key);
    navigation.navigate(ROUTES.LOGIN as never);
  };

  return (
    <WelcomeScreen title={t('welcome')} text={t('Choose_languag')}>
      <FlagButton flagName="ru" title="Русский" onPress={() => handle('ru')} />
      <FlagButton flagName="uz" title="O'zbek" onPress={() => handle('uz')} />
      <FlagButton flagName="en" title="English" onPress={() => handle('en')} />
    </WelcomeScreen>
  );
}
