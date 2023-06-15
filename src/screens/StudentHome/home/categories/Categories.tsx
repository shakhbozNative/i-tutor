import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import ProductsTitle from '../../../../components/uiket/ProductsTitle';
import CategorieItemCard from '../components/CategorieItemCard';
import {ROUTES} from '../../../../constants/routes';
import {CategoryType} from '../../../../store/home/category.type';

type Props = {
  title: string;
  filter?: boolean;
  data: CategoryType[];
};

export const Categories = (props: Props) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(ROUTES.CategoriesAllScreen as never);
  };
  console.log(props.data);

  const renderItem: ListRenderItem<CategoryType> = ({item: Item}) => (
    <CategorieItemCard name={Item.name} url={Item.photo} id={Item.id} />
  );

  return (
    <View style={{marginVertical: 15}}>
      <ProductsTitle title={props.title} onPress={onPress} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={renderItem}
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainerStyle: {paddingHorizontal: 10},
});
