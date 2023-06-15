import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GoBackHeader from '../GoBackHeader';
import DefaulTitle from '../DefaultTitle';
import {COLORS} from '../../../constants/colors';
import ChatRecipient from '../ChatRecipient';
import {RaiseYourKnowledge} from '../../../assets/icons/icons';
import {STRINGS} from '../../../locales/strings';
import {useTranslation} from 'react-i18next';

const Notification = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <GoBackHeader color={COLORS.tabBgColor} />
      <DefaulTitle
        title={t('notifications')}
        color={COLORS.tabBgColor}
        marginBottom={17}
      />
      <View style={styles.messegeContent}>
        <View style={styles.messegeItem}>
          <View style={styles.messegeTitleContent}>
            <Text style={styles.messegeTitle}> {t('new_message')} </Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.see}> {t('look')} </Text>
          </View>
        </View>
        <Text style={styles.messegeDate}>11.30.2022 15:00</Text>
      </View>
      <View style={styles.imageBox}>
        <ChatRecipient icon={<RaiseYourKnowledge />} />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    position: 'relative',
  },
  imageBox: {
    paddingLeft: 42,
    marginTop: 40,
    bottom: 30,
    position: 'absolute',
    width: '100%',
  },
  messegeContent: {
    width: '100%',
    paddingHorizontal: 20,
  },
  messegeItem: {
    backgroundColor: COLORS.white,
    width: '100%',
    borderRadius: 10,
    height: 94,
    position: 'relative',
  },
  messegeDate: {
    color: 'rgba(154, 154, 154, 0.6)',
    textAlign: 'right',
    marginTop: 12,
  },
  messegeTitleContent: {
    marginTop: 30,
    marginLeft: 34,
  },
  messegeTitle: {
    fontSize: 14,
    color: COLORS.tabBgColor,
    fontWeight: '600',
  },
  bottom: {
    position: 'absolute',
    bottom: 14,
    right: 25,
  },
  see: {
    color: '#F4B840',
    fontSize: 14,
  },
});
