import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DefaultInput from '../../../../components/uiket/TextInput';
import {STRINGS} from '../../../../locales/strings';
import {LoginResponseUser} from '../../../../store/auth/login/LoginStore.type';
import {observer} from 'mobx-react';
import useRootStore from '../../../../hooks/useRootStore';
import {useTranslation} from 'react-i18next';

type propsType = {
  data: LoginResponseUser;
};

const Form: React.FC<propsType> = observer((props: propsType) => {
  const {profileStore} = useRootStore();
  const {name, email, country, region, gender, birthday, lastName, fname} =
    props.data;
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <DefaultInput
        label={t('name')}
        lableColor="#47406A"
        defaultValue={name}
        onChangeText={text => profileStore.setFormStudent('name', text)}
        backgroundColor="#EFEFEF"
      />

      <DefaultInput
        label={t('lastName')}
        lableColor="#47406A"
        defaultValue={lastName}
        onChangeText={text => profileStore.setFormStudent('lastName', text)}
        backgroundColor="#EFEFEF"
      />

      <DefaultInput
        label={t('fname')}
        lableColor="#47406A"
        defaultValue={fname}
        onChangeText={text => profileStore.setFormStudent('fname', text)}
        backgroundColor="#EFEFEF"
        color="#111"
      />

      <DefaultInput
        label={t('birthday')}
        lableColor="#47406A"
        isDate
        value={birthday}
        onChangeText={text => profileStore.setFormStudent('birthday', text)}
        backgroundColor="#EFEFEF"
        color="#111"
      />

      <DefaultInput
        label={t('email')}
        lableColor="#47406A"
        defaultValue={email}
        onChangeText={text => profileStore.setFormStudent('email', text)}
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={t('vvedite_svoy_pol')}
        lableColor="#47406A"
        defaultValue={gender}
        onChangeText={text => profileStore.setFormStudent('gender', text)}
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={t('acountry')}
        lableColor="#47406A"
        defaultValue={country}
        onChangeText={text => profileStore.setFormStudent('country', text)}
        backgroundColor="#EFEFEF"
      />
      <DefaultInput
        label={t('region')}
        lableColor="#47406A"
        defaultValue={region}
        onChangeText={text => profileStore.setFormStudent('region', text)}
        backgroundColor="#EFEFEF"
      />
    </View>
  );
});

export default Form;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
});
