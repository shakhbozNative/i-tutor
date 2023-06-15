import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SearchIcon, SearchSettingsIcon} from '../../../assets/icons/icons';
import DefaulTitle from '../../../components/uiket/DefaultTitle';
import NavbarAll from '../../../components/uiket/NavbarAll';
import ModalLeft from '../../../components/uiket/modalLeft/ModalLeft';
import SearchInput from '../../../components/uiket/search/SearchInput';
import GapHeight from '../../../constants/GapHeight';
import useVisible from '../../../hooks/useVisible';
import ServiceNew from './ServiceNews/ServiceNew';
import Advertising from './components/Advertising';
import OurExperts from './ourExperts/OurExpert';
import UserReview from './userReviews/UserReview';

import {observer} from 'mobx-react';
import useRootStore from '../../../hooks/useRootStore';
import {Categories} from './categories/Categories';
import {STRINGS} from '../../../locales/strings';
import {useTranslation} from 'react-i18next';
const HomeScreen = observer(() => {
  const {profileStore, homeStore} = useRootStore();
  const leftModalOpen = useVisible();
  useEffect(() => {
    profileStore.getProfile();
    homeStore.getCategory();
    homeStore.getNews();
  }, []);
  const {t} = useTranslation();
  return (
    <View style={{position: 'relative', backgroundColor: '#F8F8F8'}}>
      <NavbarAll clickMe={leftModalOpen.show} />
      <ScrollView style={styles.container}>
        <DefaulTitle title={t('Search_for_teachers')} color="#47406A" />
        <View style={styles.search_box}>
          <SearchInput Icon1={<SearchSettingsIcon />} Icon2={<SearchIcon />} />
        </View>
        <Categories data={homeStore._category} title={t('categories')} />
        <OurExperts title={t('Our_experts')} />
        <UserReview title={t('User_Reviews')} />
        <ServiceNew data={homeStore._news} title="Новости сервиса" />
        <Advertising />

        <GapHeight height={100} />
      </ScrollView>
      <ModalLeft
        openModal={leftModalOpen.visible}
        closeModal={leftModalOpen.hide}
      />
    </View>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F8F8F8',
    height: '90%',
    paddingTop: 18,
  },
  search_box: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
});
