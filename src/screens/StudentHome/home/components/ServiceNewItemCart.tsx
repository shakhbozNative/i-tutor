import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {API_URL_ASSETS} from '../../../../api/api.constants';
import {CalendarIcon} from '../../../../assets/icons/icons';
type PropsType = {
  title: string;
  context: string;
  url?: string;
  id?: string;
};
const ServiceNewItemCart = (props: PropsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.img_box}>
        <View style={styles.image_bg}>
          <Image
            style={{width: '100%', height: '100%', position: 'absolute'}}
            resizeMode="contain"
            source={{uri: `${API_URL_ASSETS}${props.url}`}}
          />
          <View
            style={{
              width: 100,
              height: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: '#ffffff',
              borderRadius: 7,
              marginTop: 10,
              marginHorizontal: 75,
            }}>
            <View style={{}}>
              <CalendarIcon date={new Date()} />
            </View>
            <Text
              style={{
                color: '#000',
                alignItems: 'center',
                fontSize: 12,
              }}>
              28.12.2023
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.info_box}>
        <Text style={styles.title}>
          {props.title.length > 30
            ? props.title.slice(0, 30) + '...'
            : props.title}
        </Text>
        <Text style={styles.text_info}>
          {props.context.length > 60
            ? props.context.slice(0, 60) + '...'
            : props.context}
        </Text>
      </View>
    </View>
  );
};

export default ServiceNewItemCart;

const styles = StyleSheet.create({
  container: {
    width: 188,
    height: 231,
    backgroundColor: COLORS.white,
    marginRight: 10,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img_box: {
    height: 121,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image_bg: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image_old: {
    position: 'absolute',
    width: 94,
    height: 94,
    borderRadius: 50,
    zIndex: 10,
  },
  image_person: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  info_box: {
    width: '100%',
    padding: 10,
    height: 110,
  },
  title: {
    color: '#47406A',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 7,
  },
  text_info: {
    fontWeight: '400',
    fontSize: 11,
    color: '#B5B5B5',
  },
});
