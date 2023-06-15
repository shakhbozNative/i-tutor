import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../constants/routes';
import {API_URL_ASSETS} from '../../../../api/api.constants';

type PropType = {
  id: string;
  name: string;
  url: string;
};

const CategorieItemCard = (props: PropType) => {
  const [onClick, setOnclick] = useState();
  const navigation = useNavigation();
  console.log(props);

  const onPress = (e: any) => {
    setOnclick(e);
    navigation.navigate(ROUTES.CategoriesCartInfo as never);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.image_box,
          // {backgroundColor: onClick === props.id ? '#F4B840' : '#F2F2F2'},
        ]}
        onPress={() => onPress(props.id)}>
        <Image
          style={{width: 90, height: 90}}
          source={{uri: `${API_URL_ASSETS}${props.url}`}}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.title}>{props.name}</Text>
    </View>
  );
};

export default CategorieItemCard;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    width: 130,
    height: 130,
  },
  image_box: {
    width: 84,
    height: 82,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.black,
    marginTop: 9,
    fontSize: 13,
    textAlign: 'center',
  },
});
