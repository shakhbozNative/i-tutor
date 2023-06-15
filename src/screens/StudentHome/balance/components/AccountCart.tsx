import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {API_URL_ASSETS} from '../../../../api/api.constants';

type propsType = {
  editingIcon?: boolean;
  icon?: any;
  name?: any;
};
const AccountCart = (props: propsType) => {
  return (
    <TouchableOpacity style={styles.image_box}>
      <Image
        style={styles.image}
        source={{uri: `${API_URL_ASSETS}${props.icon}`}}
        resizeMode="center"
      />
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default AccountCart;

const styles = StyleSheet.create({
  image_box: {
    width: 125,
    height: 119,
    backgroundColor: '#f2f2f2a5',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 9,
    marginBottom: 9,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#111',
  },
  editing: {
    position: 'absolute',
    width: 43,
    height: 43,
    backgroundColor: '#47406A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
  },
  cart_info: {},
});
