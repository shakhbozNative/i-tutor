import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import MaskInput, {Masks} from 'react-native-mask-input';

type Props = {
  label?: any;
  placeholder?: any;
  backgroundColor?: string;
  color?: string;
  placeholderColor?: string;
  marginBottom?: number;
  onChangeText?: (val: string) => void;
  value?: string;
  onFocus?: () => void;
  defaultValue?: any;
  typeOf?: KeyboardTypeOptions;
  isDate?: boolean;
  lableColor?: string;
};

export default function DefaultInput(props: Props) {
  return (
    <View style={[styles.inputBox, {marginBottom: props.marginBottom}]}>
      {props.label && (
        <Text
          style={[
            styles.inputLabel,
            {color: props.lableColor ? props.lableColor : COLORS.white},
          ]}>
          {props.label}
        </Text>
      )}

      {props.isDate ? (
        <MaskInput
          mask={Masks.DATE_YYYYMMDD}
          onChangeText={props.onChangeText}
          value={props.value || ''}
          onFocus={props.onFocus}
          placeholderTextColor={
            props.placeholderColor ? props.placeholderColor : '#000'
          }
          style={[
            styles.input,
            {
              backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : '',
              color: props.color ? props.color : '#000',
            },
          ]}
        />
      ) : (
        <TextInput
          placeholder={props.placeholder}
          onFocus={props.onFocus}
          placeholderTextColor={
            props.placeholderColor ? props.placeholderColor : '#000'
          }
          style={[
            styles.input,
            {
              backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : '#69628D',
              color: '#000',
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          defaultValue={props.defaultValue}
          keyboardType={props.typeOf ?? 'default'}
        />
      )}
    </View>
  );
}

DefaultInput.defaultProps = {
  backgroundColor: '#69628D',
  color: '#fff',
  placeholderColor: '#fff',
  marginBottom: 15,
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 61,
    borderRadius: 5,
    paddingHorizontal: 24,
    fontSize: 16,
    marginBottom: 9,
  },
  inputBox: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 15,
  },
});
