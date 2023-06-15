import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavbarAll from '../../../components/uiket/NavbarAll';
import DefaulTitle from '../../../components/uiket/DefaultTitle';
import PersonalCart from '../../../components/uiket/PersonalCart';
import Form from './components/Form';
import GapHeight from '../../../constants/GapHeight';
import DefaultButton from '../../../components/uiket/DefaultButton';
import FileProtest from '../../../components/uiket/fileProtest/FileProtest';
import useVisible from '../../../hooks/useVisible';
import {observer} from 'mobx-react';
import {useTranslation} from 'react-i18next';
import {StackActions, useNavigation} from '@react-navigation/native';
import useRootStore from '../../../hooks/useRootStore';
import {ROUTES} from '../../../constants/routes';

const ProfileScren = () => {
  const {profileStore, loginStore} = useRootStore();
  const [valyu, setValyu] = useState(false);
  const modalReview = useVisible();

  useEffect(() => {
    profileStore.getProfile();
  }, []);

  const editingHandler = () => {
    setValyu(a => !a);
    profileStore.postProfileEditStudent();
  };

  const [selectImage, setselectImage] = useState('');
  const ImagePicker = () => {
    // Alert.alert('hello');
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    // @ts-ignore
    launchImageLibrary(options, responce => {
      // @ts-ignore
      setselectImage(responce.assets[0].uri);

      // @ts-ignore
      profileStore.setFormStudent('photo', {
        uri:
          Platform.OS === 'android'
            ? // @ts-ignore
              responce?.assets[0]?.uri
            : // @ts-ignore
              responce?.assets[0]?.uri?.replace('file://', ''),
        // @ts-ignore
        type: responce?.assets[0]?.type,
        // @ts-ignore
        name: responce?.assets[0].fileName,
      });
    });
  };
  const {t} = useTranslation();
  const navigation = useNavigation();

  const handleLogOut = () => {
    loginStore.onLogOut();
    navigation.dispatch(StackActions.replace(ROUTES.AUTH));
  };

  return (
    <View style={{position: 'relative', backgroundColor: '#F8F8F8'}}>
      <NavbarAll />
      <ScrollView style={styles.container}>
        <DefaulTitle title={t('personal_data')} color="#47406A" />
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <PersonalCart
            url={profileStore._profile.photo}
            selectImage={selectImage}
            onClick={() => {
              ImagePicker();
            }}
          />
        </View>

        <Form data={profileStore._profile} />
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <DefaultButton
            title={valyu ? 'Изменить' : 'Сохранить'}
            ButtonStyle={{backgroundColor: '#47406A', marginTop: 39}}
            onPress={editingHandler}
          />
          <DefaultButton title="log Out" onPress={handleLogOut} />
        </View>
        <GapHeight height={100} />
        <FileProtest
          modalVisible={modalReview.visible}
          setModalVisible={modalReview.toggle}
        />
      </ScrollView>
    </View>
  );
};

export default observer(ProfileScren);

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
