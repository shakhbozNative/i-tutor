import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import {STRINGS} from '../../locales/strings';
import {useTranslation} from 'react-i18next';

type Props = {
  title?: string;
  onPress?: () => void;
  showButton?: boolean;
  products?: any;
};

export default function ProductsTitle(props: Props) {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      {props.showButton && (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Text style={styles.textLink}> {t('view_all')} </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

ProductsTitle.defaultProps = {
  showButton: true,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginBottom: 13,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#47406A',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLink: {
    fontSize: 16,
    fontWeight: '400',
    color: '#D3D3D3',
  },
});
