import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductsTitle from '../../../../components/uiket/ProductsTitle';
import CategorieItemCard from '../components/CategorieItemCard';
import {ROUTES} from '../../../../constants/routes';

type Props = {
  title: string;
  filter?: boolean;
};
const data = [
  {id: 0, imgUrl: '../../../../assets/images/vector2.png', name: 'Химия'},
  {id: 1, imgUrl: '../../../../assets/images/Vector.png', name: 'ИТ'},
  {id: 2, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
  {id: 3, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
  {id: 4, imgUrl: '../../../../assets/images/Vector.png', name: 'Языки'},
];

export default function Categories(props: Props) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.CategoriesAllScreen as never);
  };

  return (
    <View style={{marginVertical: 15}}>
      <ProductsTitle title={props.title} onPress={onPress} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <CategorieItemCard item={item} />}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentContainerStyle: {paddingHorizontal: 10},
});
